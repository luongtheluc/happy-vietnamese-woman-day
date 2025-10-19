import React, { useMemo } from "react";
import { motion } from "framer-motion";

const flowerEmojis = ["🌸", "🌷", "🌺", "🌻", "💮", "💐", "🌼"];

const FloatingFlowers: React.FC = () => {
  const flowers = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 8,
        size: 20 + Math.random() * 30,
        rotate: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [0, 1, 1, 0],
            rotate: [f.rotate, f.rotate + 180],
          }}
          transition={{
            repeat: Infinity,
            duration: f.duration,
            delay: f.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${f.x}%`,
            fontSize: f.size,
            filter: "drop-shadow(0 2px 2px rgba(255,105,180,0.4))",
          }}
        >
          {f.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingFlowers;
