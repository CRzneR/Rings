"use client";
import { motion, useTransform, useScroll } from "motion/react";
import { div } from "motion/react-client";
import { useRef } from "react";
import Image from "next/image";

export default function ScrollWindow() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-[100vh]">
        <motion.div
          style={{ scale }}
          className="w-[100vh] h-[100vh] absolute top-0  flex items-center justify-center"
        >
          <div className="w-[25vh] h-[24vh] relative">
            <Image src="" fill alt="" className="object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
