import { Shield, Mail, MessageCircle, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Final CTA Section */}
          <div className="text-center mb-12">
            <div className="engine-card p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Última chance de garantir sua{" "}
                <span className="text-gradient-primary">economia de R$ 1.192,67</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Apenas <span className="text-urgency font-bold">13 vagas restantes</span> para o acesso vitalício
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5 text-success" />
                  <span className="text-sm">Garantia de 30 dias</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">Acesso em 5 minutos</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 text-warning" />
                  <span className="text-sm">Suporte vitalício</span>
                </div>
              </div>

              <button className="cta-button animate-glow-pulse">
                🚀 GARANTIR MEU ACESSO PREMIUM AGORA
              </button>
              
              <p className="text-xs text-muted-foreground mt-4">
                💳 Parcelamos em até 12x no cartão • 🔒 Pagamento 100% seguro
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">Engine X</h3>
              <p className="text-muted-foreground mb-4">
                A plataforma que revolucionou o acesso às melhores ferramentas de IA. 
                Mais de 10.000 pessoas já economizaram milhares de reais com nosso modelo inovador.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">24/7</div>
                  <div className="text-xs text-muted-foreground">Suporte</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Ferramentas Incluídas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ChatGPT Plus</li>
                <li>• Canva PRO</li>
                <li>• Leonardo AI</li>
                <li>• Midjourney</li>
                <li>• Adobe Creative</li>
                <li>• E mais 7 ferramentas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Support
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@enginex.com.br
                </a>
                <div className="text-sm text-muted-foreground">
                  <div>Horário de atendimento:</div>
                  <div>Segunda a Sexta: 9h às 18h</div>
                  <div>Sábado: 9h às 14h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 Engine X - Todos os direitos reservados
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Serviço
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Reembolso
                </a>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Engine X é uma marca registrada. CNPJ: 00.000.000/0001-00 
                <br />
                Este site não é afiliado ao Facebook, Google, ChatGPT ou qualquer outra empresa mencionada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;