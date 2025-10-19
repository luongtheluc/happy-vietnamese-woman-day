import React, { useMemo } from "react";

interface ConfettiProps {
  burstKey: number;
}

const Confetti: React.FC<ConfettiProps> = ({ burstKey }) => {
  const pieces = 140;
  const arr = useMemo(() => Array.from({ length: pieces }, (_, i) => i), [burstKey]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {arr.map((i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.2;
        const duration = 2 + Math.random() * 1.5;
        const size = 6 + Math.random() * 10;
        const rotate = Math.random() * 360;
        const hue = Math.floor(Math.random() * 360);
        return (
          <span
            key={`${burstKey}-${i}`}
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: `hsl(${hue} 85% 60%)`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${rotate}deg)`,
            }}
            className="absolute top-[-10px] rounded-sm confetti-piece"
          />
        );
      })}
      <style>{`
        @keyframes fallSpin {
          0% { transform: translate3d(0,-20vh,0) rotate(0deg); opacity: 0 }
          10% { opacity: 1 }
          100% { transform: translate3d(0, 110vh, 0) rotate(720deg); opacity: 0 }
        }
        .confetti-piece { animation-name: fallSpin; animation-timing-function: cubic-bezier(.22,1,.36,1); }
      `}</style>
    </div>
  );
};

export default Confetti;
