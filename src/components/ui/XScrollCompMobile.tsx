"use client";

type XScrollCompProps = {
  className?: string;
};

const XScrollComp = ({ className = "" }: XScrollCompProps) => {
  return (
    <section className={`relative ${className}`}>
      <div className="flex flex-col items-center gap-6 px-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
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
      className="group relative w-full max-w-[400px] h-[240px] overflow-hidden rounded-xl shadow-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-black/40 to-black/10 p-3 text-base font-black uppercase text-white backdrop-blur-sm">
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
