import { motion, useScroll, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
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
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none px-4"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="bg-dark-800 border border-white/10 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-[280px] pointer-events-auto relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500/20 via-gold-400 to-gold-500/20" />
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <h4 className="text-base font-medium mb-1 text-white pr-6">Need help choosing a plan?</h4>
                <p className="text-white/60 text-xs mb-4 font-light">
                  Let's talk about your project and I'll suggest the best option for you.
                </p>
                <a
                  href="#contact"
                  onClick={() => setIsExpanded(false)}
                  className="block w-full text-center py-2.5 bg-white text-dark-900 rounded-xl text-sm font-medium hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  Get Free Consultation
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 bg-gold-400 text-dark-900 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.3)] pointer-events-auto hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-shadow"
          >
            {isExpanded ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
