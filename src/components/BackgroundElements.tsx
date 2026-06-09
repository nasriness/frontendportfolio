import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export function BackgroundElements() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 100, mass: 1 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 100, mass: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = (e.clientX / innerWidth - 0.5) * 100; // max shift 50px
      const yOffset = (e.clientY / innerHeight - 0.5) * 100;
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="bg-noise" />
      <motion.div 
        style={{ x: springX, y: springY }}
        className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-dark-900"
      >
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gold-500/5 blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[150px]"
        />
      </motion.div>
    </>
  );
}
