// fadeInUp.tsx
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

/**
 * Reusable fade-in-up effect.
 * --------------------------------------------------
 * - y-Versatz: 48 px
 * - Opacity: 0 → 1
 * - Ease-Kurve: easeInOut
 * - Dauer: 0.75 s
 * - Läuft genau einmal pro Viewport-Eintritt
 */
export const FadeIn = ({
  children,
  ...rest
}: PropsWithChildren<HTMLMotionProps<"div">>) => (
  <motion.div
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.75 }}
    viewport={{ once: true, amount: 0.2 }} // nur einmal, wenn 20 % sichtbar
    {...rest}
  >
    {children}
  </motion.div>
);
