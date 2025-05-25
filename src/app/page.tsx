import HeroSection from "../components/ui/herosection";
import { GradientHeading } from "@/components/ui/gradientHeading";
import ContactMe from "@/components/contact.comp";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ScrollWindow from "@/components/ui/scroll.comp";
import ImageGrid from "@/components/ui/pictureGrid/grid";
import ThreeScene from "@/components/ui/threeJs/ThreeScene";
import { TextElement } from "../components/ui/textElement";
import XScrollComp from "@/components/ui/XScrollComp";
import Parallax from "@/components/ui/parallax";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => <div>Item {i + 1}</div>);
  const SECTION_HEIGHT = 1500;
  return (
    <>
      <section className="my-24">
        <HeroSection />
      </section>
      <TextElement
        top="Leidenschaft bekam eine Plattform um Sie zu zeigen"
        text="Hier präsentiere ich eine Auswahl selbst erstellter 3D-Modelle – gestaltet, gerendert und eingebunden in eine von mir entwickelte Webanwendung. Diese Seite dient nicht nur zur Präsentation meiner Modelle, sondern zeigt auch meine Fähigkeiten in Webentwicklung und 3D-Visualisierung. Viel Spaß beim Stöbern!"
      />
      <XScrollComp />

      <section className="my-24">
        <GradientHeading text={"Jahr"} />
        <Parallax
          children={<GradientHeading text={"2025"} />}
          start={0.4}
          end={-50}
        />
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
