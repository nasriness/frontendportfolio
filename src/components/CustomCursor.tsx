import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const checkPointer = () => {
      const hoveredEl = document.querySelector(':hover:last-child');
      if (hoveredEl) {
        const style = window.getComputedStyle(hoveredEl);
        setIsPointer(
          style.cursor === 'pointer' || 
          hoveredEl.tagName === 'A' || 
          hoveredEl.tagName === 'BUTTON'
        );
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', (e) => {
      moveCursor(e);
      checkPointer();
    });
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-gold-400 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isClicking ? 0.8 : (isPointer ? 1.5 : 1),
          backgroundColor: isPointer ? 'rgba(250, 204, 21, 0.1)' : 'transparent',
          borderColor: isPointer ? 'rgba(250, 204, 21, 0.8)' : 'rgba(250, 204, 21, 0.3)',
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold-400 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 400 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 400 }),
          translateX: 12,
          translateY: 12,
          scale: isPointer ? 0 : 1,
          opacity: isPointer ? 0 : 1
        }}
      />
    </>
  );
}
