import HeroSection from "../components/ui/herosection";
import { Spinning } from "@/components/ui/spinning";
import HorizontalScroll from "@/components/ui/vorlage/horizontalScroll/horizontalScroll.comp";
import TextCard from "@/components/ui/textCard.comp";
import ScrollCard from "@/components/ui/vorlage/horizontalScroll/scrollCard.comp";
import ContactMe from "@/components/contact.comp";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ScrollWindow from "@/components/ui/scroll.comp";
import ImageGrid from "@/components/ui/pictureGrid/grid";
import ThreeScene from "@/components/ui/threeJs/ThreeScene";
import TextElement from "@/components/ui/textElement";
import Example from "@/components/ui/vorlage/horizontalScroll/scrollY";
import Test from "@/components/ui/test";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => <div>Item {i + 1}</div>);

  return (
    <>
      <section className="my-24">
        <HeroSection />
      </section>
      <TextElement
        top="Leidenschaft bekam eine Plattform um Sie zu zeigen"
        text="dadadadw dadawd dadwad awda d ad a  dad wada wd ad daw da dawd adawdadsd wad sad daw"
      />
      <Test />

      <div>
        <TextElement
          top="Leidenschaft bekam eine Plattform um Sie zu zeigen"
          text="dadadadw dadawd dadwad awda d ad a  dad wada wd ad daw da dawd adawdadsd wad sad daw"
        />
      </div>
      <section className="my-24">
        <Spinning />
        <div>
          <main>
            <ThreeScene />
          </main>
        </div>
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
