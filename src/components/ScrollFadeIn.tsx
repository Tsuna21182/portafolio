import { motion } from "motion/react";
import type { ReactNode } from "react";

type ScrollFadeInProps = {
  children: ReactNode;
  className?: string;
};

function ScrollFadeIn({ children, className = "" }: ScrollFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollFadeIn;
