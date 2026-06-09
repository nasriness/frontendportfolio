import { motion } from 'motion/react';

const words = [
  "Creative Developer", 
  "UI/UX Designer", 
  "Digital Experiences", 
  "Motion Master", 
  "Frontend Expert"
];

export function Marquee() {
  return (
    <section className="py-6 bg-gold-500 overflow-hidden relative z-10 w-full -rotate-2 scale-105 my-24 shadow-[0_0_50px_rgba(234,179,8,0.15)] flex items-center group">
      <div className="flex w-[200vw]">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...words, ...words, ...words, ...words].map((word, idx) => (
            <div key={idx} className="flex items-center group-hover:text-dark-700 transition-colors duration-500">
              <span className="text-3xl md:text-5xl font-display font-medium text-dark-900 mx-8 uppercase tracking-tighter">
                {word}
              </span>
              <span className="text-dark-900/50 text-4xl mt-[-5px]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
