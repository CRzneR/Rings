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
      const maxScroll = window.innerHeight; // etwas kleiner für mobile screens
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
    <div className="relative h-[160vh] sm:h-[180vh] md:h-[190vh]">
      {/* Hintergrundbild mit Blur */}
      <div
        ref={imageRef}
        className="sticky top-0 h-screen -z-10 overflow-hidden"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img/IMG1045.jpg")',
            filter: `blur(${blurAmount}px)`,
            transition: "filter 0.05s linear",
          }}
        ></div>
      </div>

      {/* Text Content */}
      <div className="max-w-[800px] mx-auto pt-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-left mb-4 leading-tight">
          Präzision in Gold und Silber
        </h2>
        <p className="text-base sm:text-lg md:text-2xl my-6 sm:my-8 md:my-12 text-gray-200 font-light text-left max-w-3xl">
          Unsere Ringe werden zunächst als CAD-Modelle konzipiert, um jede Linie
          und Gravur perfekt zu planen. Anschließend erfolgt der 3D-Druck und
          die metallische Veredelung, sodass jeder Ring nicht nur ein Symbol des
          Sieges, sondern auch ein Kunstwerk für sich ist.d
        </p>
      </div>
    </div>
  );
};

export default BlurredScrollText;
