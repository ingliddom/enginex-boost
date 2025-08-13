import { useState } from "react";
import { Play, Star, MessageCircle, User } from "lucide-react";

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videoTestimonials = [
    {
      id: 1,
      name: "Carlos Eduardo",
      role: "Empreendedor Digital",
      thumbnail: "/api/placeholder/300/200",
      quote: "Economizei mais de R$ 800 por mês com o Engine X!",
      duration: "2:15"
    },
    {
      id: 2,
      name: "Marina Silva",
      role: "Designer Freelancer",
      thumbnail: "/api/placeholder/300/200",
      quote: "Todas as ferramentas que uso estão aqui. Incrível!",
      duration: "1:45"
    }
  ];

  const whatsappTestimonials = [
    {
      name: "João Pedro",
      message: "Cara, não acredito que funciona mesmo! Tô usando o ChatGPT Plus faz 1 semana já 🔥",
      time: "hoje às 14:30",
      verified: true
    },
    {
      name: "Carla Mendes",
      message: "Obrigada! Já estou usando o Canva Pro e Leonardo AI. Meus designs ficaram profissionais!",
      time: "hoje às 13:15",
      verified: true
    },
    {
      name: "Rafael Costa",
      message: "Melhor investimento que fiz esse ano. Economizei mais de R$ 500 no primeiro mês!",
      time: "hoje às 12:45",
      verified: true
    },
    {
      name: "Ana Julia",
      message: "Suporte nota 10! Me ajudaram a configurar tudo em 5 minutos 👏",
      time: "hoje às 11:20",
      verified: true
    },
    {
      name: "Lucas Santos",
      message: "Achei que era pegadinha, mas é real mesmo! Todas as ferramentas funcionando perfeitamente",
      time: "hoje às 10:15",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Veja o que nossos{" "}
              <span className="text-gradient-primary">+10.000 clientes</span>{" "}
              estão dizendo
            </h2>
            <p className="text-xl text-muted-foreground">
              Depoimentos reais de pessoas que já estão economizando milhares
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              📹 Depoimentos em Vídeo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="engine-card group cursor-pointer">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={testimonial.thumbnail} 
                      alt={`Depoimento de ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="bg-primary/90 rounded-full p-3 glow-primary">
                        <Play className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {testimonial.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/60 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                      <p className="text-sm italic">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Testimonials */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              💬 Mensagens dos Nossos Clientes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatsappTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#128C7E] rounded-lg p-4 text-white relative">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{testimonial.name}</span>
                        {testimonial.verified && (
                          <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="mb-2">{testimonial.message}</p>
                      <span className="text-xs opacity-70">{testimonial.time}</span>
                    </div>
                  </div>
                  {/* WhatsApp bubble tail */}
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#128C7E]" />
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="engine-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">10.000+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="engine-card text-center">
                <div className="text-3xl font-bold text-success mb-2">98%</div>
                <div className="text-muted-foreground">Taxa de Satisfação</div>
              </div>
              <div className="engine-card text-center">
                <div className="text-3xl font-bold text-warning mb-2">R$ 800</div>
                <div className="text-muted-foreground">Economia Média/Mês</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;