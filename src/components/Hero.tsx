import { Clock, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hook Principal */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Me dê{" "}
              <span className="text-gradient-primary">3 minutos</span>{" "}
              e vou te fazer{" "}
              <span className="text-gradient-primary">Economizar R$1.224</span>{" "}
              em Ferramentas que você já deve usar todo dia!
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-xl text-muted-foreground">Apenas alguns minutos para mudar sua vida financeira</span>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              <span className="text-primary font-semibold">ChatGPT Plus</span>, 
              <span className="text-primary font-semibold"> Capcut PRO</span>, 
              <span className="text-primary font-semibold"> Canva PRO</span>{" "}
              e Mais...
            </p>
          </div>

          {/* Badges de Credibilidade */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm">+10.000 Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
              <span className="text-sm">✅ Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
              <span className="text-sm">🔒 100% Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;