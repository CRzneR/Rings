import RingCard from "./ringcard";

export default function SliderCard() {
  return (
    <div className="flex gap-4 overflow-x-auto pl-[10%]">
      <RingCard />
      <RingCard />
      <RingCard />
      <RingCard />
    </div>
  );
}
