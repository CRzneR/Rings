// components/ScrollingImages.tsx
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const imagesLeft = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

const imagesRight = ["/img4.jpg", "/img5.jpg"];

export default function ScrollingImages() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const leftSpring = useSpring(leftY, { stiffness: 40, damping: 20 });
  const rightSpring = useSpring(rightY, { stiffness: 40, damping: 20 });

  return (
    <div
      ref={containerRef}
      className="h-[100vh] flex gap-4 overflow-hidden px-8"
    >
      {/* Left column */}
      <motion.div
        style={{ y: leftSpring }}
        className="flex flex-col gap-4 flex-1"
      >
        {imagesLeft.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`left-${index}`}
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        ))}
      </motion.div>

      {/* Right column */}
      <motion.div
        style={{ y: rightSpring }}
        className="flex flex-col gap-4 flex-1"
      >
        {imagesRight.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`right-${index}`}
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
}
