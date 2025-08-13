import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Eu vou ter suporte após a compra?",
      answer: "Sim! Oferecemos suporte vitalício para todos os clientes do Plano Premium. Nossa equipe responde em até 24 horas e te ajuda com qualquer dúvida sobre as ferramentas ou configurações. Além disso, você terá acesso à nossa comunidade VIP no Discord com outros usuários."
    },
    {
      question: "Isso aqui é pirata? Vai dar problema?",
      answer: "Não, não é pirata! Trabalhamos com um modelo de compra coletiva 100% legal. Compramos as licenças corporativas diretamente das empresas e compartilhamos o acesso entre nossos membros. É como um 'Netflix' para ferramentas de IA. Tudo transparente e dentro da lei."
    },
    {
      question: "Eu vou ter acesso ao plano PRO mesmo?",
      answer: "Sim, garantimos 100%! Você terá acesso aos planos premium/pro de todas as ferramentas listadas. Isso inclui ChatGPT Plus com GPT-4, Canva PRO, Leonardo AI Maestro, Midjourney e todas as outras. Fornecemos login e senha ou link de acesso direto para cada ferramenta."
    },
    {
      question: "Por que é tão barato? Qual a pegadinha?",
      answer: "Não há pegadinha! O preço baixo é possível devido ao nosso modelo de negócios de compra coletiva. Compramos licenças corporativas que permitem múltiplos usuários e dividimos os custos entre nossos membros. Quanto mais pessoas aderem, menor fica o custo individual. É economia de escala trabalhando a seu favor!"
    },
    {
      question: "Funciona no celular? Precisa instalar alguma coisa?",
      answer: "Funciona perfeitamente no celular, tablet e computador! Não precisa instalar nada. As ferramentas funcionam direto no navegador ou através dos aplicativos originais que você já conhece. Você recebe acesso aos mesmos apps que usaria normalmente, mas sem pagar as mensalidades caras."
    },
    {
      question: "E se eu tiver dificuldade para usar?",
      answer: "Sem problemas! Além do suporte técnico, você ganha acesso aos 4 cursos exclusivos que ensinam como usar cada ferramenta do zero ao avançado. São mais de 145 aulas práticas. Também temos tutoriais em vídeo e nossa comunidade está sempre disposta a ajudar."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "É simples: se por qualquer motivo você não ficar satisfeito em 30 dias, devolvemos 100% do seu dinheiro, sem perguntas. É nossa forma de mostrar que temos total confiança na qualidade do que oferecemos."
    },
    {
      question: "Quando vou receber meu acesso?",
      answer: "O acesso é liberado automaticamente em até 5 minutos após a confirmação do pagamento. Você receberá por email todas as instruções, logins e links para acessar as ferramentas. É praticamente instantâneo!"
    },
    {
      question: "As ferramentas ficam atualizadas?",
      answer: "Sim! Mantemos todas as ferramentas sempre atualizadas com as versões mais recentes. Quando sair o GPT-5, ChatGPT o1-pro, ou qualquer nova funcionalidade, você terá acesso automaticamente sem custo adicional."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas que você faria se fosse{" "}
              <span className="text-gradient-primary">esperto</span>{" "}
              (e você é)
            </h2>
            <p className="text-xl text-muted-foreground">
              Esclarecemos todas as suas dúvidas antes da compra
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="engine-card overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-secondary/20 transition-colors"
                >
                  <h3 className="text-lg font-bold pr-4">{item.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="engine-card inline-block p-6">
              <h3 className="text-xl font-bold mb-4">
                Ainda tem dúvidas? Fale conosco!
              </h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe responde em até 1 hora no WhatsApp
              </p>
              <button className="bg-[#25D366] hover:bg-[#25D366]/80 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                💬 Chamar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;