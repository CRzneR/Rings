"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, ReactNode } from "react";

type ParallaxProps = {
  className?: string;
  start: number;
  end: number;
  src?: string;
  alt?: string;
  children?: ReactNode;
};

const Parallax = ({
  className = "",
  start,
  end,
  src,
  alt = "",
  children,
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Parallax-Scroll-Progress im definierten Bereich
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  // Animations-Werte
  // const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  // const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px)`; // scale(${scale}

  /**
   * Inhalt entscheiden:
   * - Wenn `src` vorhanden → Bild-Shortcut
   * - Sonst rendern wir die übergebenen `children`
   */
  const content =
    src !== undefined ? (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      children
    );

  return (
    <motion.div ref={ref} className={className} style={{ transform }}>
      {content}
    </motion.div>
  );
};

export default Parallax;
