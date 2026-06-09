import { motion } from 'motion/react';
import { Utensils, Briefcase, Palette, ShoppingBag } from 'lucide-react';

const cards = [
  { icon: <Utensils className="w-8 h-8" />, title: "Restaurant Websites", tag: "Reservation UI" },
  { icon: <Briefcase className="w-8 h-8" />, title: "Business Landing Pages", tag: "High-Conversion" },
  { icon: <Palette className="w-8 h-8" />, title: "Creative Portfolios", tag: "Awwwards Style" },
  { icon: <ShoppingBag className="w-8 h-8" />, title: "E-commerce UI", tag: "Modern Stores" },
];

export function WhatIBuild() {
  return (
    <section className="py-32 px-6 relative z-10 w-full overflow-hidden bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium mb-4"
          >
            What I Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            Specialized in crafting tailored digital experiences for modern businesses.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                y: { duration: 0.3, ease: "easeOut" }
              }}
              className="glass-panel p-8 flex flex-col items-center text-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-colors duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-500/20 group-hover:text-gold-300 transition-all duration-300 transform group-hover:scale-110">
                {card.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-3">{card.title}</h3>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 font-mono">
                {card.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
