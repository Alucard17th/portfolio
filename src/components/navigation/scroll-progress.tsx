import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.6,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-[linear-gradient(to_right,hsl(var(--primary)/0.0),hsl(var(--primary)/0.55),hsl(var(--ring)/0.35),hsl(var(--primary)/0.0))]"
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : scaleX,
      }}
    />
  );
}
