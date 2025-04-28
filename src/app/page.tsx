import Image from "next/image";
import HeroSection from "../components/ui/herosection";
import Banner from "@/components/ui/banner";
import SliderCard from "@/components/slidercards";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Scroll } from "@/components/ui/scroll";
import { Spinning } from "@/components/ui/spinning";

export default function Home() {
  return (
    <>
      <section>
        <HeroSection />
        <Banner />
      </section>

      <section>
        <h2 className="p-30 text-[64px]">
          Custom made Championship ring fully individalized{" "}
        </h2>
        <SliderCard />
        <Scroll />
        <Spinning />
      </section>
    </>
  );
}
