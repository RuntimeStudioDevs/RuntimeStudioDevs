type LogoNegroRuntimeStudioDevsProps = {
  className?: string;
};

export function LogoNegroRuntimeStudioDevs({
  className = "",
}: LogoNegroRuntimeStudioDevsProps) {
  return (
    <span
      aria-label="Runtime Studio Devs"
      className={`inline-flex items-center justify-center font-logo text-3xl leading-[0.55] tracking-[-0.1em] ${className}`}
    >
      <span className="font-bold text-runtime-black">Runtime</span>
      <span className="font-normal text-studio-blue">Studio</span>
      <span className="font-normal text-devs-silver">Devs</span>
    </span>
  );
}
