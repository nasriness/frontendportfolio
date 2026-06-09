import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

export function AnimatedStickers() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const y4 = useTransform(scrollYProgress, [0, 1], [-100, 400]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[20%] left-[5%] opacity-[0.15]"
      >
        <Sparkles className="w-24 h-24 text-gold-500" />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[40%] right-[10%] opacity-[0.1]"
      >
        <Code className="w-32 h-32 text-white" />
      </motion.div>

      <motion.div
        style={{ y: y3, rotate: rotate3 }}
        className="absolute top-[70%] left-[8%] opacity-[0.1]"
      >
        <Palette className="w-28 h-28 text-white" />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="absolute top-[10%] right-[5%] opacity-[0.15]"
      >
        <Zap className="w-20 h-20 text-gold-400" />
      </motion.div>
    </div>
  );
}
