import { AlertTriangle } from "lucide-react";

const UrgencyBanner = () => {
  return (
    <div className="urgency-banner fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="w-5 h-5 animate-bounce" />
        <span className="text-sm md:text-base">OS ACESSOS ESTÃO ESGOTANDO!</span>
        <AlertTriangle className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
};

export default UrgencyBanner;