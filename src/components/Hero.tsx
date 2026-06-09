import { Magnetic } from './Magnetic';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const words = "I design and build websites that make businesses look premium online.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-white/70">Available for Freelance</span>
        </motion.div>

        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-6 leading-[1.1]"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={item} className="inline-block mr-[0.25em]">
              {word === 'premium' ? (
                <span className="text-gradient-gold italic pr-2">{word}</span>
              ) : (
                <span className="text-gradient">{word}</span>
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl font-light"
        >
          Hey, I'm Nasrin K. | Freelance Web Developer | React • UI/UX • Modern Web Experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Magnetic>
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white text-dark-900 rounded-full font-medium overflow-hidden w-full sm:w-auto block"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gold-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
          </Magnetic>
          
          <Magnetic>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 rounded-full font-medium text-white transition-colors w-full sm:w-auto text-center block"
            >
              Let's Work Together
            </motion.a>
          </Magnetic>
        </motion.div>

      </div>
    </section>
  );
}
