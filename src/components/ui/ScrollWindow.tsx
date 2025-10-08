"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ScrollWindowProps = {
  className?: string;
};

export default function ScrollWindow({ className = "" }: ScrollWindowProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 3.7]);

  return (
    <div className={`flex justify-center w-full ${className}`}>
      <div
        ref={container}
        className="h-[300vh] relative mb-35 w-full max-w-4xl"
      >
        <div className="sticky top-0 h-[100vh] flex items-center justify-center">
          <motion.div
            style={{ scale }}
            className="relative w-[64vh] h-[33.6vh]"
          >
            <Image
              src="/img/ring23wide.png"
              fill
              alt="Zentriertes Bild"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vh"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
