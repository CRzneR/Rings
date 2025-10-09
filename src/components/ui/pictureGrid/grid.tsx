"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Picture from "./picture";

export default function ImageGrid() {
  const containerRef = useRef(null);

  // Scrollfortschritt für das linke div
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["5% 5%", "70% 70%"],
  });

  // Parallax-Effekt für das linke div mit Stopp bei 80%
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-37.5%"]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10  p-4 md:p-0"
      ref={containerRef}
    >
      {/* Linke Spalte mit Parallax-Effekt */}
      <div className="flex flex-col gap-6 md:gap-10">
        <motion.div
          style={{ y: leftY }}
          className="w-full h-[400px] md:h-[670px] bg-red-500 shadow-lg"
        >
          <Picture
            imageSrc="/img/ring24perspektive2.png"
            title="Ring 2024"
            country="Perspektive"
          />
        </motion.div>
        <motion.div
          style={{ y: leftY }}
          className="w-full h-[400px] md:h-[670px] bg-blue-500 shadow-lg"
        >
          <Picture
            imageSrc="/img/draufsicht.png"
            title="Ring 2024"
            country="Perspektive"
          />
        </motion.div>
        <motion.div
          style={{ y: leftY }}
          className="w-full h-[400px] md:h-[670px] bg-green-500 shadow-lg"
        >
          <Picture
            imageSrc="/img/detail1.png"
            title="Ring 2024"
            country="Perspektive"
          />
        </motion.div>
      </div>

      {/* Rechte Spalte ohne Parallax-Effekt */}
      <div className="flex flex-col gap-6 md:gap-10">
        <div className="w-full h-[500px] md:h-[900px] shadow-lg">
          <Picture
            imageSrc="/img/perspektive1.png"
            title="Ring 2024"
            country="Perspektive"
          />
        </div>
        <div className="w-full h-[500px] md:h-[900px] bg-purple-500 shadow-lg">
          <Picture
            imageSrc="/img/seitenansicht.png"
            title="Ring 2024"
            country="Perspektive"
          />
        </div>
      </div>
    </div>
  );
}
