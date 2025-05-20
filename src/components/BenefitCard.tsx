
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const BenefitCard = ({ title, description, icon: Icon }: BenefitCardProps) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all hover:shadow-glow hover:border-homemate-accent/50">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-glow-sm relative overflow-hidden">
        <div className="absolute -inset-1 bg-homemate-accent/10 blur-md rounded-full animate-pulse-slow"></div>
        <Icon className="h-8 w-8 text-homemate-accent relative z-10" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default BenefitCard;
