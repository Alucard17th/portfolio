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
      className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-[hsl(var(--lime))] shadow-[0_0_8px_hsl(var(--lime)/0.7)]"
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : scaleX,
      }}
    />
  );
}
