import * as React from "react";
import { motion, useInView } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
};

export function Reveal({
  children,
  className,
  as: Comp = "div",
  delay = 0,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  const MotionComp = motion.create(Comp as never) as unknown as React.ElementType;

  return (
    <MotionComp
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: isInView ? 0 : 16 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </MotionComp>
  );
}
