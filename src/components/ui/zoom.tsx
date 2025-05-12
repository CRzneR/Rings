"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomEffects: React.FC = () => {
  const zoomOutRef = useRef<HTMLDivElement>(null);
  const zoomInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const innerHeight = window.innerHeight;

    // Zoom-Out Animation
    if (zoomOutRef.current) {
      gsap.from(zoomOutRef.current.querySelectorAll("h2"), {
        scale: 50,
        stagger: 0.25,
        duration: 3,
        scrollTrigger: {
          trigger: zoomOutRef.current,
          pin: true,
          end: `+=${innerHeight * 1.3}`,
          scrub: 3,
        },
      });
    }

    // Zoom-In Animation
    if (zoomInRef.current) {
      gsap.to(zoomInRef.current.querySelectorAll("h2"), {
        scale: 100,
        stagger: 0.25,
        duration: 3,
        scrollTrigger: {
          trigger: zoomInRef.current,
          pin: true,
          end: `+=${innerHeight * 1.3}`,
          scrub: 3,
        },
      });
    }
  }, []);

  return (
    <div>
      <div id="zoom-out" ref={zoomOutRef}>
        <h2>Zoom Out Title 1</h2>
        <h2>Zoom Out Title 2</h2>
      </div>

      <div id="zoom-in" ref={zoomInRef}>
        <h2>Zoom In Title 1</h2>
        <h2>Zoom In Title 2</h2>
      </div>
    </div>
  );
};

export default ZoomEffects;
