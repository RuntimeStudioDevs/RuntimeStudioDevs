type RateLimitRecord = {
  count: number;
  resetAt: number;
};

// In-memory rate limit store keyed by IP
const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * Checks if a given identifier (e.g. IP address) exceeds the rate limit.
 * @param ip Identifier key (client IP)
 * @param limit Maximum allowed requests within the window (default: 5)
 * @param windowMs Window duration in milliseconds (default: 10 minutes = 600,000ms)
 */
export function checkRateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000,
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // If no record or expired, reset
  if (!record || now > record.resetAt) {
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
 * Clears the rate limit store (useful for test isolation)
 */
export function clearRateLimitStore(): void {
  rateLimitStore.clear();
}
