import HeroSection from "../components/ui/herosection";
import { Spinning } from "@/components/ui/spinning";
import HorizontalScroll from "@/components/ui/horizontalScroll/horizontalScroll.comp";
import TextCard from "@/components/ui/horizontalScroll/textCard.comp";
import ScrollCard from "@/components/ui/horizontalScroll/scrollCard.comp";
import ContactMe from "@/components/contact.comp";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ScrollWindow from "@/components/ui/scroll.comp";
import ImageGrid from "@/components/ui/pictureGrid/grid";
import ThreeJsModel from "@/components/ui/threeJs/threeJsModel";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => <div>Item {i + 1}</div>);

  return (
    <>
      <section className="my-24">
        <HeroSection />
      </section>

      <section className="p-8 my-24">
        <HorizontalScroll>
          <div>
            <TextCard />
          </div>
          <div>
            <ScrollCard
              imageSrc="https://picsum.photos/440/540/?blur"
              titel="CAD"
              text="Konsturktion mithilfe von Rhinoceros"
            />
          </div>
          <div>
            <ScrollCard
              imageSrc="https://picsum.photos/440/540/?blur"
              titel="3D Printing"
              text="Hergestellt aus Resin durch SLA Technik"
            />
          </div>
          <div>
            <ScrollCard
              imageSrc="https://picsum.photos/440/540/?blur"
              titel="Electroplating"
              text="Veredelt mit 24 Karat Gold"
            />
          </div>
          <div>
            <ScrollCard
              imageSrc="https://picsum.photos/440/540/?blur"
              titel="Finishing"
              text="Feinschliff und Finish"
            />
          </div>
        </HorizontalScroll>
      </section>
      <section className="my-24">
        <Spinning />
        <div>
          <div className="threeJsCanvas">
            <ThreeJsModel />
          </div>
        </div>
      </section>
      <section>
        <ScrollWindow />
      </section>
      <main>
        <ImageGrid />
      </main>
      <div className="mt-30 min-h-screen flex items-center justify-center">
        <BackgroundGradient
          className="rounded-[22px] max-w-sm p-12 sm:p-10 dark:bg-zinc-900"
          animate={true}
        >
          <ContactMe />
        </BackgroundGradient>
      </div>
    </>
  );
}
