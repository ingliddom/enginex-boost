import { useState } from "react";
import { Play, Volume2 } from "lucide-react";

const VideoSection = () => {
  const [isVideoStarted, setIsVideoStarted] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoStarted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Assista ao vídeo e descubra como economizar{" "}
            <span className="text-gradient-primary">milhares de reais</span> por ano
          </h2>
          
          <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden">
            {/* Video Player */}
            <video
              className="w-full h-full object-cover"
              controls={isVideoStarted}
              autoPlay={isVideoStarted}
              muted={!isVideoStarted}
              poster="/api/placeholder/800/450"
            >
              <source src="#" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            
            {/* Video Overlay */}
            {!isVideoStarted && (
              <div 
                className="video-overlay"
                onClick={handlePlayVideo}
              >
                <div className="text-center">
                  <div className="bg-urgency/90 backdrop-blur-sm rounded-xl p-6 mb-4">
                    <Volume2 className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-white font-semibold">
                      Seu vídeo já começou.
                      <br />
                      Clique para ouvir
                    </p>
                  </div>
                  <div className="bg-primary/90 rounded-full p-4 inline-block glow-primary">
                    <Play className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              ⚡ Vídeo rápido de 3 minutos que pode economizar R$1.224+ por ano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;