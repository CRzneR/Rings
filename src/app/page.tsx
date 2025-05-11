import HeroSection from "../components/ui/herosection";
import Banner from "@/components/ui/banner";
import SliderCard from "@/components/slidercards";
import { Spinning } from "@/components/ui/spinning";
import HorizontalScroll from "@/components/ui/horizontalScroll/horizontalScroll.comp";
import TextCard from "@/components/ui/horizontalScroll/textCard.comp";
import ScrollCard from "@/components/ui/horizontalScroll/scrollCard.comp";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => <div>Item {i + 1}</div>);

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
        <section className="p-8">
          <HorizontalScroll>
            <div>
              <TextCard />
            </div>
            <div>
              <ScrollCard />
            </div>
            <div>
              <ScrollCard />
            </div>
            <div>
              <ScrollCard />
            </div>
            <div>
              <ScrollCard />
            </div>
          </HorizontalScroll>
        </section>
        <Spinning />
      </section>
    </>
  );
}
