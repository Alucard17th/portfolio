import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
};

const directionOffset = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "up":    return { x: 0, y: distance };
    case "down":  return { x: 0, y: -distance };
    case "left":  return { x: distance, y: 0 };
    case "right": return { x: -distance, y: 0 };
    case "none":  return { x: 0, y: 0 };
  }
};

const motionDivVariants = {
  hidden: (custom: { x: number; y: number; reduced: boolean }) =>
    custom.reduced ? { opacity: 0 } : { opacity: 0, x: custom.x, y: custom.y },
  visible: { opacity: 1, x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 20,
}: Omit<RevealProps, "as">) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const offset = directionOffset(direction, distance);

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={{ x: offset.x, y: offset.y, reduced: !!prefersReducedMotion }}
      variants={motionDivVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
