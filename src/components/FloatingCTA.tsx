import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 m-auto left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
        >
          <a
            href="#contact"
            className="flex items-center gap-3 px-6 py-3 bg-white text-dark-900 rounded-full font-medium shadow-[0_8px_30px_rgba(255,255,255,0.2)] pointer-events-auto hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            Hire Me
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
