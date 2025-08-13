import { useState, useEffect } from "react";
import { Users, Zap } from "lucide-react";

const ProgressBar = () => {
  const [currentCount, setCurrentCount] = useState(87);
  const totalSlots = 100;
  const percentage = (currentCount / totalSlots) * 100;

  useEffect(() => {
    // Simular diminuição gradual das vagas
    const interval = setInterval(() => {
      setCurrentCount(prev => {
        if (prev > 80) {
          return prev - (Math.random() > 0.7 ? 1 : 0);
        }
        return prev;
      });
    }, 30000); // A cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-urgency animate-pulse" />
              <span className="text-xl font-bold text-urgency">
                VAGAS LIMITADAS!
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {currentCount} de {totalSlots} acessos já foram preenchidos
            </h3>
            
            <div className="bg-secondary rounded-full h-4 mb-4 overflow-hidden">
              <div 
                className="progress-glow h-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
            
            <p className="text-muted-foreground mb-6">
              Restam apenas <span className="text-urgency font-bold">{totalSlots - currentCount} vagas</span> disponíveis
            </p>
          </div>

          <button className="cta-button w-full md:w-auto animate-glow-pulse">
            <Zap className="w-5 h-5 mr-2" />
            GARANTIR MEU ACESSO AGORA
          </button>
          
          <p className="text-sm text-muted-foreground mt-4">
            🔒 Compra 100% segura • ✅ Garantia de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;