
export const TokenIcon = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-glow relative overflow-hidden">
        <div className="absolute -inset-1 bg-homemate-accent/20 blur-md rounded-full animate-pulse-slow"></div>
        <div className="absolute -inset-4 bg-homemate-accent/10 blur-lg rounded-full animate-glow-pulse"></div>
        <div className="flex items-center justify-center relative z-10">
          <img
            src="/hmnt-token-nobg.png"
            alt="HMNT Token"
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenIcon;
