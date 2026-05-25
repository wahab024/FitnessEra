import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Tag } from 'lucide-react';

export function CountdownOffer() {
  const [isVisible, setIsVisible] = useState(true);

  // Example simple countdown (static for visual purpose, reset every day)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-primary px-8 pt-3.5 pb-2.5 sm:py-2 relative z-[60] text-center flex flex-row items-center justify-center gap-2 sm:gap-3 flex-wrap"
      >
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-white text-[10px] sm:text-xs">
          <Tag size={13} className="shrink-0" />
          <span>Flash Sale: 20% OFF ALL PLANS!</span>
        </div>
        
        <div className="flex gap-1 items-center">
          <div className="bg-black/30 rounded px-1.5 py-0.5 text-white font-mono font-bold text-[10px] sm:text-xs">
            {String(timeLeft.hours).padStart(2, '0')}h
          </div>
          <div className="bg-black/30 rounded px-1.5 py-0.5 text-white font-mono font-bold text-[10px] sm:text-xs">
            {String(timeLeft.minutes).padStart(2, '0')}m
          </div>
          <div className="bg-black/30 rounded px-1.5 py-0.5 text-white font-mono font-bold text-[10px] sm:text-xs">
            {String(timeLeft.seconds).padStart(2, '0')}s
          </div>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors"
          aria-label="Close announcement"
        >
          <X size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
