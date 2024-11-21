import { useEffect } from "react";
import SocratesHero from "../components/SocratesHero";

function Headline() {
  useEffect(() => {
    const svg = document.querySelector(".socrates-hero-svg");
    if (svg) {
      svg.classList.add("animate-svg-draw");
    }
  }, []);

  return (
    <section className="relative mx-auto pb-20">
      <div className=" grid grid-cols-[1fr_1fr] bg-[var(--contrast-color)] md:grid-rows-[1fr_auto] gap-4">
        {/* Left Content */}
        <div className=" space-y-8 px-8 py-8  col-span-2 md:col-span-1 row-span-2">
          <h1 className="my-2 font-bold text-fluid-4xl  text-[--primary-color] whitespace-break-spaces animate-text-fade">
            Get Existential in your Coffee Break
          </h1>

          <h3 className="italic text-[var(--primary-color)] max-w-[50%] animate-text-fade">
            High quality, approachable and transferable content from people with
            decades of elite industry experience.
          </h3>
        </div>

        {/* Background Section - Positioned Full Width */}
        <div className="h-full w-full col-span-2 row-start-2 bg-[var(--primary-color)]"></div>
      </div>

      {/* SocratesHero Image - Positioned Absolutely */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-[50%] md:w-[70%] lg:w-[40%] overflow-hidden socrates-hero-container">
        <SocratesHero
          className="socrates-hero-svg"
          svgColor="var(--primary-color)"
        />
      </div>
    </section>
  );
}

export default Headline;
