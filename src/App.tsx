import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import FloatingFlowers from "./components/FloatingFlower";
import Confetti from "./pages/Confetti";
import GiftAnimation from "./components/GiftAnimation";
import VietnameseWomensDayCard from "./components/VietnameseWomensDayCard";


const App = () => {
  const [showGift, setShowGift] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [burst, setBurst] = useState(0);

  const handleGiftOpen = () => {
    setTimeout(() => setShowGift(false), 1000);
    setTimeout(() => setShowCard(true), 2000);
    setBurst((b) => b + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 overflow-hidden relative">
      {showGift && <GiftAnimation onOpen={handleGiftOpen} />}
      {showCard && (
        <>
          <FloatingFlowers />
          <AnimatePresence>{burst > 0 && <Confetti burstKey={burst} />}</AnimatePresence>
          <div className="min-h-screen flex items-center justify-center bg-pink-50">
            {/* motion.div ở trên */}
            <VietnameseWomensDayCard/>
          </div>
        </>
      )}
    </div>
  );
};

export default App;