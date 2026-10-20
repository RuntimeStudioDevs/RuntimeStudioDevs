type RateLimitRecord = {
  count: number;
  resetAt: number;
};

export const MAX_STORE_SIZE = 1000;

// In-memory rate limit store keyed by IP
const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * Removes all expired entries from the in-memory store.
 */
function pruneExpiredRecords(now: number): void {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Checks if a given identifier (e.g. IP address) exceeds the rate limit.
 * Guarantees bounded memory usage via automatic expiration pruning and FIFO eviction.
 * @param ip Identifier key (client IP)
 * @param limit Maximum allowed requests within the window (default: 5)
 * @param windowMs Window duration in milliseconds (default: 10 minutes = 600,000ms)
 * @param maxStoreSize Maximum allowed entries in the Map (default: MAX_STORE_SIZE = 1000)
 */
export function checkRateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000,
  maxStoreSize: number = MAX_STORE_SIZE,
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // If no record or expired, reset
  if (!record || now > record.resetAt) {
    if (record) {
      rateLimitStore.delete(ip);
    }

    if (rateLimitStore.size >= maxStoreSize) {
      pruneExpiredRecords(now);

      if (rateLimitStore.size >= maxStoreSize) {
        const oldestKey = rateLimitStore.keys().next().value;
        if (oldestKey !== undefined) {
          rateLimitStore.delete(oldestKey);
        }
      }
    }

    const newRecord: RateLimitRecord = {
      count: 1,
      resetAt: now + windowMs,
    };
    rateLimitStore.set(ip, newRecord);
    return {
      success: true,
      remaining: limit - 1,
      resetAt: newRecord.resetAt,
    };
  }

  // If within window
  if (record.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: record.resetAt,
    };
  }

  record.count += 1;
  return {
    success: true,
    remaining: limit - record.count,
    resetAt: record.resetAt,
  };
}

/**
 * Returns the current number of entries in the rate limit store.
 */
export function getRateLimitStoreSize(): number {
  return rateLimitStore.size;
}

/**
 * Clears the rate limit store (useful for test isolation)
 */
export function clearRateLimitStore(): void {
  rateLimitStore.clear();
}

