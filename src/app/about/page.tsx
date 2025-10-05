// pages/about.js
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Section 1: Intro */}
      <section className="py-40 px-10 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#d1a054]">Me</span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ich designe und fertige einzigartigen Schmuck – vor allem Ringe –
              die ich mit CAD-Software entwerfe und anschließend mit
              3D-Druck-Technologie realisiere. Jedes Stück wird mit viel Liebe
              zum Detail gestaltet und trägt meine persönliche Handschrift.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mein Ziel ist es, Schmuckstücke zu schaffen, die modern, minimal
              und dennoch voller Bedeutung sind.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/img/Logo.png"
              alt="Handmade Rings"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Process */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            My Creative <span className="text-[#d1a054]">Process</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Jedes Schmuckstück durchläuft einen spannenden Prozess: von der
            ersten Skizze über CAD-Design bis hin zum 3D-Druck und der finalen
            Nachbearbeitung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CAD Design",
                text: "Ich entwickle jedes Schmuckstück präzise in 3D-Software.",
                icon: "💻",
              },
              {
                title: "3D Druck",
                text: "Die Modelle werden mit modernster 3D-Druck-Technologie umgesetzt.",
                icon: "🖨️",
              },
              {
                title: "Electroplating",
                text: "Polieren, veredeln und feinste Details sorgen für den finalen Look.",
                icon: "✨",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-2xl shadow-sm p-8 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Difference */}
      <section className="mb-32 py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Makes My Jewelry <span className="text-[#d1a054]">Unique</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Ich kombiniere moderne Technologie mit traditioneller Liebe zum
            Detail. So entstehen Stücke, die nicht nur Schmuck sind, sondern
            kleine Geschichten tragen.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Individuelles Design",
              "Moderne Technologie",
              "Handwerkliche Präzision",
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-full px-6 py-3 shadow-sm hover:shadow-md transition"
              >
                <span className="text-gray-800 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
