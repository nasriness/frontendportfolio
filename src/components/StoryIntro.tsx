import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Code2, PenTool, Zap } from 'lucide-react';

export function StoryIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <PenTool className="w-6 h-6 text-gold-400" />,
      title: "Clean Design",
      desc: "Pixel-perfect interfaces that build trust instantly."
    },
    {
      icon: <Code2 className="w-6 h-6 text-gold-400" />,
      title: "Modern Tech",
      desc: "React, Tailwind, and Framer Motion for premium feel."
    },
    {
      icon: <Zap className="w-6 h-6 text-gold-400" />,
      title: "Fast & Fluid",
      desc: "Optimized performance with silky smooth animations."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 relative z-10">
      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight mb-16 text-center">
          "I don't just build websites. I build <span className="text-gradient-gold italic">digital experiences</span> that convert visitors into customers."
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass-panel p-8 glass-panel-hover"
            >
              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-white/90">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed dark:text-white/50">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
