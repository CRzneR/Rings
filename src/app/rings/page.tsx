"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: "2021",
    text: "Die Tradition besteh bereits schon seit 2019, doch 2021 wurden zum ersten Mal Championship Ringe an das Siegerteam übergeben. Aus einem 3D Drucker mit SLA Technik hergestellt und lackiert",
    img: "/img/history/Ring21.jpg",
  },
  {
    year: "2022",
    text: "Im folgenden Jahr wurden die Ringe weiterentwickelt und das Design verfeinert. Dabei orientiert sich das Design immer am Sport. Die Aufstellung der Becher wurde hier dargestellt.",
    img: "/img/history/Ring22.png",
  },
  {
    year: "2023",
    text: "Zum erssten Mal ist der Championship Ring in der Farbe Gold gehalten. Die Drucktechnik hat sich weiterentwicklet und es sind feinere Details möglich.",
    img: "/img/history/ring23.jpg",
  },
  {
    year: "2024",
    text: "Die tradition besagt, dass der Austragungsort sich den Gewinnern des Vorjahres anpasst.",
    img: "/img/history/ring24-2.png",
  },
  {
    year: "2025",
    text: "Der nächste Schritt. 18 Karat Gold und Silber wurden mit neuem Verfahren verarbeitet. Die Ringe sind nun robuster und haben sich in ihrer Wertigkeit stark gesteigert.",
    img: "/img/history/ring25.jpg",
  },
];

export default function TimelinePage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Smooth Scroll (Lenis)
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger Animation
    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <main className="my-24 relative mx-auto max-w-5xl p-8">
      <h1 className="text-6xl font-bold text-center mb-16">
        Unsere Geschichte
      </h1>

      {/* Timeline line */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>

        <div className="space-y-24">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              ref={(el) => {
                if (el) sectionsRef.current[index] = el;
              }}
              className={`flex items-center justify-between w-full`}
            >
              {/* Linke Seite */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-5/12 text-right pr-6">
                    <h2 className="text-2xl font-bold">{event.year}</h2>
                    <p className="mt-2">{event.text}</p>
                  </div>
                  <div className="relative w-full max-w-[400px] aspect-[3/4]">
                    <Image
                      src={event.img}
                      alt={event.year}
                      fill
                      className="rounded-xl  object-cover"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-full max-w-[400px] aspect-[3/4]">
                    <Image
                      src={event.img}
                      alt={event.year}
                      fill
                      className="rounded-xl  object-cover"
                    />
                  </div>
                  <div className="w-5/12 text-left pl-6">
                    <h2 className="text-2xl font-bold">{event.year}</h2>
                    <p className="mt-2">{event.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
