// Scrollen skaliert das Bild von 1.3x auf 3x

"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollWindowProps = {
  className?: string;
};

export default function ScrollWindow({ className = "" }: ScrollWindowProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const imageBox = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current || !imageBox.current) return;

    gsap.fromTo(
      imageBox.current,
      { scale: 1.3 },
      {
        scale: 3,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1900vh",
          scrub: true,

          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className={`flex justify-center w-full bg-black ${className}`}>
      <div ref={container} className="h-[350vh] relative w-full max-w-4xl">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div ref={imageBox} className="relative w-[64vh] h-[33.6vh]">
            <Image
              src="/img/ring23wide.png"
              fill
              alt="Zentriertes Bild"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
