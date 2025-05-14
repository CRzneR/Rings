"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ScrollWindow() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 3.7]);

  return (
    <div ref={container} className="h-[300vh] relative mb-35">
      <div className="sticky top-0 h-[100vh]">
        <motion.div
          style={{ scale }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        >
          <div className="relative w-[66vh] h-[33.6vh]">
            <Image
              src="/img/ringszoom.jpeg"
              fill
              alt="Zentriertes Bild"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
