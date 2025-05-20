
import TokenIcon from "./TokenIcon";

const SmartHomeIllustration = () => {
  return (
    <div className="relative h-80 md:h-96 lg:h-[450px] max-w-3xl mx-auto">
      {/* House outline - enhanced version */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-2xl relative">
          {/* Base platform */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] h-[10%] bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-full blur-md"></div>
          
          {/* House shape */}
          <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-4/5 h-3/5 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl border border-homemate-accent/30 shadow-lg overflow-hidden">
            {/* Interior glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-homemate-accent/5 to-cyan-400/5"></div>
            
            {/* Windows with glowing effect */}
            <div className="absolute top-[20%] left-[20%] w-[15%] h-[20%] bg-gradient-to-br from-homemate-accent/30 to-cyan-400/20 rounded-lg backdrop-blur-sm border border-white/30"></div>
            <div className="absolute top-[20%] right-[20%] w-[15%] h-[20%] bg-gradient-to-br from-homemate-accent/30 to-cyan-400/20 rounded-lg backdrop-blur-sm border border-white/30"></div>
            
            <div className="absolute bottom-[20%] left-[20%] w-[15%] h-[20%] bg-gradient-to-br from-homemate-accent/20 to-cyan-400/10 rounded-lg backdrop-blur-sm border border-white/20"></div>
            <div className="absolute bottom-[20%] right-[20%] w-[15%] h-[20%] bg-gradient-to-br from-homemate-accent/20 to-cyan-400/10 rounded-lg backdrop-blur-sm border border-white/20"></div>
          </div>
          
          {/* Roof */}
          <div className="absolute bottom-[70%] left-1/2 transform -translate-x-1/2 w-[90%] h-[15%]">
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-3xl border-t border-l border-r border-homemate-accent/20"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-homemate-accent/30 blur-sm"></div>
          </div>
          
          {/* Door */}
          <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[20%] h-[30%] overflow-hidden rounded-t-xl border border-homemate-accent/40">
            <div className="absolute inset-0 bg-gradient-to-b from-homemate-accent/20 to-purple-900/40"></div>
            <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[15%] h-[15%] bg-homemate-accent/60 rounded-full"></div>
          </div>
          
          {/* Smart devices with floating tokens */}
          <TokenIcon className="absolute top-[25%] left-[15%] animate-token-spin scale-75" />
          <TokenIcon className="absolute top-[15%] right-[15%] animate-token-spin [animation-delay:2s] scale-75" />
          <TokenIcon className="absolute top-[60%] right-[28%] animate-token-spin [animation-delay:4s] scale-75" />
          <TokenIcon className="absolute top-[50%] left-[30%] animate-token-spin [animation-delay:3s] scale-[0.6]" />
          
          {/* Connection lines - network effect */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M42,30 Q50,45 58,30" 
              stroke="url(#gradient)" 
              strokeWidth="0.5" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M30,45 Q50,50 70,45" 
              stroke="url(#gradient)" 
              strokeWidth="0.5" 
              fill="none"
              className="animate-pulse [animation-delay:1s]"
            />
            <path 
              d="M35,65 Q50,55 65,65" 
              stroke="url(#gradient)" 
              strokeWidth="0.5" 
              fill="none"
              className="animate-pulse [animation-delay:2s]"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C52FF" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#8C52FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8C52FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Glowing effect around the house */}
          <div className="absolute inset-0 bg-homemate-accent/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
          
          {/* Additional ambient effects */}
          <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-[70%] h-[20%] bg-gradient-to-r from-purple-500/5 via-homemate-accent/10 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeIllustration;
