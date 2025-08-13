import { Check, X } from "lucide-react";

const PriceComparison = () => {
  const tools = [
    { name: "ChatGPT Plus", price: "R$ 109,00", included: true },
    { name: "Capcut PRO", price: "R$ 49,90", included: true },
    { name: "Canva PRO", price: "R$ 54,90", included: true },
    { name: "Gemini Premium", price: "R$ 97,00", included: true },
    { name: "Eleven Labs Creator", price: "R$ 119,00", included: true },
    { name: "Leonardo AI Maestro", price: "R$ 89,90", included: true },
    { name: "Perplexity AI PRO", price: "R$ 109,00", included: true },
    { name: "Claude AI PRO", price: "R$ 99,00", included: true },
    { name: "Grok AI Super", price: "R$ 79,00", included: true },
    { name: "Midjourney Premium", price: "R$ 149,00", included: true },
    { name: "Notion AI", price: "R$ 49,00", included: true },
    { name: "Adobe Creative Suite", price: "R$ 219,00", included: true }
  ];

  const totalPrice = tools.reduce((sum, tool) => {
    const price = parseFloat(tool.price.replace("R$ ", "").replace(",", "."));
    return sum + price;
  }, 0);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você não precisa gastar{" "}
              <span className="text-urgency">quase um salário inteiro</span>{" "}
              pra ter acesso a isso
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja quanto você economiza com o Engine X
            </p>
          </div>

          <div className="engine-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-bold text-lg">Ferramenta</th>
                    <th className="text-center py-4 px-6 font-bold text-lg text-urgency">Preço Individual</th>
                    <th className="text-center py-4 px-6 font-bold text-lg text-primary">Com Engine X</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">
                              {tool.name.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <span className="font-medium">{tool.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-lg font-bold text-urgency">{tool.price}</span>
                        <div className="text-sm text-muted-foreground">/mês</div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {tool.included ? (
                          <div className="flex items-center justify-center gap-2">
                            <Check className="w-5 h-5 text-success" />
                            <span className="text-success font-bold">INCLUSO</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <X className="w-5 h-5 text-urgency" />
                            <span className="text-urgency">Não incluso</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  
                  {/* Total Row */}
                  <tr className="bg-secondary/50 border-t-2 border-primary">
                    <td className="py-6 px-6">
                      <span className="text-xl font-bold">TOTAL MENSAL</span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-urgency">
                        R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-sm text-muted-foreground">Por mês pagando individual</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-primary glow-primary">
                        R$ 32,03
                      </div>
                      <div className="text-sm text-success">ECONOMIA TOTAL</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-primary/20 to-success/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">
                💰 Você economiza{" "}
                <span className="text-gradient-primary">
                  R$ {(totalPrice - 32.03).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>{" "}
                por mês!
              </h3>
              <p className="text-lg text-muted-foreground">
                Isso é uma economia de{" "}
                <span className="text-primary font-bold">
                  R$ {((totalPrice - 32.03) * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>{" "}
                por ano! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;