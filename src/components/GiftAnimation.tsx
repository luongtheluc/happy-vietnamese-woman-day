import { motion } from "framer-motion";
import { useState, useRef } from "react";

const GiftAnimation = ({ onOpen } : any) => {
    const [isOpened, setIsOpened] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    const handleClick = () => {
      setIsOpened(true);
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.15;
        audio.play().catch(() => console.warn('Autoplay blocked'));
      }
      setTimeout(() => onOpen(), 2500);
    };
  
    return (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <audio ref={audioRef} loop>
          <source
            src="https://cdn.pixabay.com/download/audio/2023/03/21/audio_5fa9a6ac8a.mp3?filename=romantic-piano-ambient-144759.mp3"
            type="audio/mpeg"
          />
        </audio>
  
        {/* Ánh sáng nền */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),transparent_70%)] animate-pulse" />
  
        {!isOpened ? (
          <motion.div
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer flex flex-col items-center justify-center"
          >
            {/* Bóng đổ mềm */}
            <div className="absolute bottom-0 w-96 h-10 bg-rose-300/20 rounded-full blur-2xl" />
  
            {/* Thân hộp */}
            <motion.div
              className="w-72 h-72 bg-gradient-to-b from-pink-200 via-rose-300 to-pink-400 rounded-3xl shadow-[0_8px_40px_rgba(255,105,180,0.35)] border-[3px] border-rose-200 relative z-10 flex items-center justify-center"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              {/* Dải ruy băng dọc */}
              <div className="absolute w-10 h-full bg-gradient-to-b from-rose-100 via-pink-200 to-rose-100 left-1/2 -translate-x-1/2 rounded-full shadow-inner" />
              {/* Dải ruy băng ngang */}
              <div className="absolute h-10 w-full bg-gradient-to-r from-rose-100 via-pink-200 to-rose-100 top-1/2 -translate-y-1/2 rounded-full shadow-inner" />
            </motion.div>
  
            {/* Nắp hộp mềm */}
            <motion.div
              className="absolute w-[21rem] h-24 bg-gradient-to-b from-pink-100 via-rose-200 to-pink-300 rounded-t-[3rem] border-[3px] border-rose-200 shadow-[0_6px_25px_rgba(255,182,193,0.4)] flex items-center justify-center"
              style={{ top: '-2.5rem' }}
              animate={{ rotateZ: [0, 1.5, -1.5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              {/* Nơ 🎀 lớn, mềm mại */}
              <motion.div
                className="absolute w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full border border-white/70 shadow-md flex items-center justify-center text-4xl"
                animate={{ rotateZ: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                🎀
              </motion.div>
            </motion.div>
  
            {/* Text hướng dẫn mềm mại */}
            <motion.span
              className="text-3xl mt-8 font-semibold text-pink-700 tracking-wide drop-shadow-sm"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Nhấn để mở quà 💖
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            className="text-9xl"
            initial={{ scale: 2, rotate: -10 }}
            animate={{ scale: [2, 1.2, 1], rotate: [0, 8, 0], y: [0, -100, 0] }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            💐
          </motion.div>
        )}
      </motion.div>
    );
  };

export default GiftAnimation;