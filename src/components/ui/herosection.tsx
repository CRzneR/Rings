import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section>
      <div className="p-40 text-center flex flex-col items-center justify-center ">
        <h2 className="text-[64px]">Championship Rings</h2>

        <img src="https://picsum.photos/400/400" alt="Bild" className="my-4" />

        <p>built for Winners and their legacy </p>

        <p className="p-1 text-[20px] font-bold">
          built for Winners and their legacy{" "}
        </p>

        <Button>Mehr über uns</Button>
      </div>
    </section>
  );
}
