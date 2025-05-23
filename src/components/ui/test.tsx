"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import TextCard from "./textCard.comp";
import ScrollCard from "./vorlage/horizontalScroll/scrollCard.comp";

const Test = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
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
      className="group relative h-[540px] w-[440px] md:w-[400px] lg:w-[500px] overflow-hidden"
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
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Test;

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
