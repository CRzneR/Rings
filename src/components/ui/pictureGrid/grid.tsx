"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageGrid() {
  const containerRef = useRef(null);

  // Scrollfortschritt für das linke div
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["5% 5%", "70% 70%"],
  });

  // Parallax-Effekt für das linke div mit Stopp bei 80%
  const leftY = useTransform(
    scrollYProgress,
    [0, 1], // Der Scrollfortschritt wird nun bei 0.8 gestoppt
    ["0%", "-40%"]
  );

  return (
    <div className="grid grid-cols-2 gap-10 px-10" ref={containerRef}>
      {/* Linke Spalte mit Parallax-Effekt */}
      <div className="flex flex-col gap-10">
        <motion.div
          style={{ y: leftY }}
          className="w-full min-h-[600px] bg-red-500  shadow-lg"
        ></motion.div>
        <motion.div
          style={{ y: leftY }}
          className="w-full min-h-[600px] bg-blue-500  shadow-lg"
        ></motion.div>
        <motion.div
          style={{ y: leftY }}
          className="w-full min-h-[600px] bg-green-500  shadow-lg"
        ></motion.div>
      </div>

      {/* Rechte Spalte ohne Parallax-Effekt */}
      <div className="flex flex-col gap-10">
        <div className="w-full min-h-[800px] bg-yellow-500  shadow-lg"></div>
        <div className="w-full min-h-[800px] bg-purple-500  shadow-lg"></div>
      </div>
    </div>
  );
}
