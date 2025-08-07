"use client";

import { useEffect, useRef, useState } from "react";

const BlurredScrollText = () => {
  const [blurAmount, setBlurAmount] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const [startScrollY, setStartScrollY] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && startScrollY === null) {
          setStartScrollY(window.scrollY);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [startScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (startScrollY === null) return;

      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight; // Wie viel Scroll soll nötig sein für max Blur
      const maxBlur = 8;

      const scrolledSinceStart = scrollTop - startScrollY;
      const blur = Math.min(
        (scrolledSinceStart / maxScroll) * maxBlur,
        maxBlur
      );
      setBlurAmount(Math.max(0, blur));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startScrollY]);

  return (
    <div className="relative h-[190vh]">
      <div
        ref={imageRef}
        className="sticky top-0 h-screen -z-10 overflow-hidden"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img/IMG_1045.jpg")',
            filter: `blur(${blurAmount}px)`,
            transition: "filter 0.05s linear",
          }}
        ></div>
      </div>

      <div className="max-w-[600px] mx-auto pt-10">
        <h2 className="text-6xl font-bold text-white text-left mb-4">
          Legendäre technische Erfindung
        </h2>
        <p className="text-2xl my-12 text-gray-200 font-light text-left max-w-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          cupiditate ducimus illo laudantium reiciendis impedit molestiae
          quibusdam error nam facilis possimus explicabo, blanditiis dolorum
          inventore illum numquam quas quasi velit.
        </p>
      </div>
    </div>
  );
};

export default BlurredScrollText;
