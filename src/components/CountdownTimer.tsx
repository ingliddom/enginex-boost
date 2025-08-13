import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches zero
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-urgency/90 text-urgency-foreground py-3 px-6 rounded-lg inline-flex items-center gap-3">
      <Clock className="w-5 h-5 animate-pulse" />
      <div className="flex items-center gap-2">
        <span className="font-bold text-sm">OFERTA TERMINA EM:</span>
        <div className="flex items-center gap-1 font-mono text-lg font-bold">
          <span className="bg-black/20 px-2 py-1 rounded">
            {formatTime(timeLeft.hours)}
          </span>
          <span>:</span>
          <span className="bg-black/20 px-2 py-1 rounded">
            {formatTime(timeLeft.minutes)}
          </span>
          <span>:</span>
          <span className="bg-black/20 px-2 py-1 rounded">
            {formatTime(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;