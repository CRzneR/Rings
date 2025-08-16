"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import TextCard from "./textCard.comp";

const XScrollComp = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] sm:h-[250vh] md:h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8"
        >
          <TextCard />
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type CardProps = {
  card: {
    url: string;
    title: string;
    id: number;
  };
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[220px] sm:h-[400px] sm:w-[320px] md:h-[540px] md:w-[400px] lg:w-[500px] overflow-hidden rounded-xl shadow-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-black/40 to-black/10 p-4 sm:p-6 md:p-8 text-base sm:text-xl md:text-2xl font-black uppercase text-white backdrop-blur-sm sm:backdrop-blur-md">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default XScrollComp;

const cards = [
  {
    url: "/img/finish.JPG",
    title: "CAD and Rhinoceros",
    id: 1,
  },
  {
    url: "/img/printing.jpg",
    title: "3D Printing",
    id: 2,
  },
  {
    url: "/img/plating.JPG",
    title: "Electroplating",
    id: 3,
  },
  {
    url: "/img/finish.JPG",
    title: "Finishing",
    id: 4,
  },
];
