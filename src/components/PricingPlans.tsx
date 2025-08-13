import { Check, X, Crown, Zap, Shield, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const PricingPlans = () => {
  const basicFeatures = [
    { feature: "Acesso a 3 ferramentas básicas", included: true },
    { feature: "ChatGPT Standard", included: true },
    { feature: "Canva Básico", included: true },
    { feature: "Suporte por email", included: true },
    { feature: "Acesso vitalício", included: false },
    { feature: "Todas as 12 ferramentas premium", included: false },
    { feature: "4 cursos exclusivos", included: false },
    { feature: "Suporte prioritário", included: false },
    { feature: "Atualizações gratuitas", included: false },
    { feature: "Garantia de 30 dias", included: false }
  ];

  const premiumFeatures = [
    { feature: "Acesso a TODAS as 12 ferramentas", included: true },
    { feature: "ChatGPT Plus + GPT-4", included: true },
    { feature: "Canva PRO completo", included: true },
    { feature: "Leonardo AI Maestro", included: true },
    { feature: "Midjourney Premium", included: true },
    { feature: "Adobe Creative Suite", included: true },
    { feature: "4 cursos exclusivos", included: true },
    { feature: "Suporte prioritário 24/7", included: true },
    { feature: "Acesso vitalício", included: true },
    { feature: "Garantia de 30 dias", included: true },
    { feature: "Atualizações gratuitas", included: true },
    { feature: "Comunidade VIP", included: true }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escolha o plano ideal para{" "}
              <span className="text-gradient-primary">revolucionar</span>{" "}
              sua produtividade
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Mais de 98% dos nossos clientes escolhem o Plano Premium
            </p>
            <div className="flex justify-center">
              <CountdownTimer />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Plano Básico */}
            <div className="engine-card relative">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">PLANO BÁSICO</h3>
                  <p className="text-muted-foreground mb-4">Para quem está começando</p>
                  <div className="text-4xl font-bold mb-2">R$ 12,33</div>
                  <p className="text-sm text-muted-foreground">Pagamento único</p>
                </div>

                <div className="space-y-4 mb-8">
                  {basicFeatures.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.included ? (
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={item.included ? "" : "text-muted-foreground line-through"}>
                        {item.feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground py-4 px-6 rounded-lg font-bold text-lg transition-colors">
                  QUERO O PLANO BÁSICO
                </button>
              </div>
            </div>

            {/* Plano Premium */}
            <div className="engine-card plan-premium relative">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Crown className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">PLANO PREMIUM</h3>
                    <Crown className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">Recomendado - Melhor custo-benefício</p>
                  
                  <div className="mb-4">
                    <div className="text-lg text-urgency line-through opacity-60 mb-1">
                      De R$ 1.224,70/mês
                    </div>
                    <div className="text-5xl font-bold text-gradient-primary mb-2 glow-primary">
                      R$ 32,03
                    </div>
                    <p className="text-sm text-success font-semibold">
                      ✅ Pagamento único • ✅ Acesso vitalício
                    </p>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-bold">ECONOMIA DE 97,4%</span>
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {premiumFeatures.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{item.feature}</span>
                    </div>
                  ))}
                </div>

                <button className="cta-button w-full mb-4">
                  <Crown className="w-5 h-5 mr-2" />
                  QUERO O PLANO PREMIUM
                </button>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Acesso Imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Comparison */}
          <div className="engine-card p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Por que 98% escolhem o Premium?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/60 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Economia Máxima</h4>
                <p className="text-muted-foreground text-sm">
                  Economize mais de R$ 14.000 por ano com todas as ferramentas incluídas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success/30 to-success/60 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-bold mb-2">Acesso Completo</h4>
                <p className="text-muted-foreground text-sm">
                  Todas as 12 ferramentas premium + 4 cursos exclusivos
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-warning/30 to-warning/60 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-warning" />
                </div>
                <h4 className="font-bold mb-2">Garantia Total</h4>
                <p className="text-muted-foreground text-sm">
                  30 dias de garantia + suporte vitalício incluído
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;