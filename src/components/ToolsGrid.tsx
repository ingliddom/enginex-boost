import { Check, Star, Award, Zap } from "lucide-react";

const ToolsGrid = () => {
  const tools = [
    { name: "ChatGPT Plus", category: "IA Conversacional", value: "R$ 109/mês", status: "premium" },
    { name: "Capcut PRO", category: "Editor de Vídeo", value: "R$ 49,90/mês", status: "pro" },
    { name: "Canva PRO", category: "Design Gráfico", value: "R$ 54,90/mês", status: "premium" },
    { name: "Gemini Premium", category: "IA Google", value: "R$ 97/mês", status: "premium" },
    { name: "Eleven Labs", category: "IA de Voz", value: "R$ 119/mês", status: "creator" },
    { name: "Leonardo AI", category: "IA de Imagem", value: "R$ 89,90/mês", status: "maestro" },
    { name: "Perplexity PRO", category: "IA de Pesquisa", value: "R$ 109/mês", status: "pro" },
    { name: "Claude AI PRO", category: "IA Avançada", value: "R$ 99/mês", status: "pro" },
    { name: "Grok AI Super", category: "IA do X", value: "R$ 79/mês", status: "super" },
    { name: "Midjourney", category: "IA Arte", value: "R$ 149/mês", status: "premium" },
    { name: "Notion AI", category: "Produtividade", value: "R$ 49/mês", status: "ai" },
    { name: "Adobe Creative", category: "Suite Criativa", value: "R$ 219/mês", status: "suite" }
  ];

  const courses = [
    { name: "ChatGPT Mestre", category: "Curso Completo", lessons: "50+ Aulas", bonus: true },
    { name: "Canva do Zero", category: "Design", lessons: "30+ Aulas", bonus: false },
    { name: "IA para Negócios", category: "Empreendedorismo", lessons: "40+ Aulas", bonus: true },
    { name: "Automação com IA", category: "Produtividade", lessons: "25+ Aulas", bonus: false }
  ];

  const getStatusBadge = (status: string) => {
    const badges = {
      premium: { text: "PREMIUM", color: "bg-primary", icon: Star },
      pro: { text: "PRO", color: "bg-success", icon: Award },
      creator: { text: "CREATOR", color: "bg-warning", icon: Zap },
      maestro: { text: "MAESTRO", color: "bg-urgency", icon: Award },
      super: { text: "SUPER", color: "bg-primary", icon: Zap },
      ai: { text: "AI", color: "bg-accent", icon: Star },
      suite: { text: "SUITE", color: "bg-urgency", icon: Award }
    };
    
    const badge = badges[status as keyof typeof badges] || badges.premium;
    const Icon = badge.icon;
    
    return (
      <div className={`${badge.color} text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        <span className="font-bold">{badge.text}</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-primary">12 Ferramentas Premium</span>{" "}
              + 4 Cursos Exclusivos
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para dominar a inteligência artificial
            </p>
          </div>

          {/* Ferramentas Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              🛠️ Ferramentas Incluídas
            </h3>
            <div className="tool-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item group">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold text-lg">
                        {tool.name.split(' ')[0].substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      {getStatusBadge(tool.status)}
                    </div>
                    
                    <h4 className="font-bold text-lg mb-2">{tool.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{tool.category}</p>
                    
                    <div className="mt-auto">
                      <div className="text-urgency font-bold text-sm line-through opacity-60">
                        {tool.value}
                      </div>
                      <div className="text-success font-bold flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        INCLUSO
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cursos Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              📚 Cursos Exclusivos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="engine-card relative overflow-hidden group hover:scale-105 transition-transform">
                  {course.bonus && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                      BÔNUS
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/60 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h4 className="font-bold text-lg mb-2">{course.name}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{course.category}</p>
                    
                    <div className="text-primary font-semibold text-sm mb-4">
                      {course.lessons}
                    </div>
                    
                    <div className="text-success font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      ACESSO VITALÍCIO
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="engine-card inline-block p-6">
              <h3 className="text-xl font-bold mb-2">
                💎 Valor Total Individual: 
                <span className="text-urgency ml-2 line-through">R$ 1.224,70/mês</span>
              </h3>
              <p className="text-2xl font-bold text-gradient-primary">
                Seu Preço: R$ 32,03 (pagamento único)
              </p>
              <p className="text-success text-sm mt-2">
                ✅ Acesso vitalício a tudo • ✅ Atualizações gratuitas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;