import HeroSection from "../components/ui/herosection";
import { GradientHeading } from "@/components/ui/gradientHeading";

import ScrollWindow from "@/components/ui/scroll.comp";
import ImageGrid from "@/components/ui/pictureGrid/grid";
import ThreeScene from "@/components/ui/threeJs/ThreeScene";
import { TextElement } from "../components/ui/textElement";
import XScrollComp from "@/components/ui/XScrollComp";
import Parallax from "@/components/ui/parallax";

import Contact from "@/components/contact.comp";

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
        <GradientHeading text={"Championship"} />
        <Parallax
          children={<GradientHeading text={"Ring 2025"} />}
          start={0.4}
          end={-50}
        />
        <div>
          <main>
            <ThreeScene />
          </main>
        </div>
      </section>
      <section className="bg-gray-100 ">
        <ScrollWindow />
        <ImageGrid />
      </section>

      <Contact />
    </>
  );
}
