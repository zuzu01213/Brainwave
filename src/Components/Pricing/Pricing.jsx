import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "../Parts/Section.jsx";
import { smallSphere, stars } from "../../assets/index.js";
import { ScrollParallax } from "react-just-parallax";
import { Tagline } from "../Parts/Tagline.jsx";
import { PricingList } from "./PricingList.jsx";
import { LeftLine, RightLine } from "../design/Pricing.jsx";

gsap.registerPlugin(ScrollTrigger);

export const Pricing = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const sphereRef = useRef(null);
  const starsRef = useRef(null);
  const fullDetailsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out", scrollTrigger: { trigger: headingRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      sphereRef.current,
      { opacity: 0, scale: 0.8, rotation: -20 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.75)", scrollTrigger: { trigger: sphereRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      starsRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out", scrollTrigger: { trigger: starsRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      fullDetailsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power1.out", scrollTrigger: { trigger: fullDetailsRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2" ref={containerRef}>

        <div className="hidden relative items-center justify-center mb-[26rem] lg:flex">
          <ScrollParallax isAbsolutelyPositioned>
            <div className={"relative items-center justify-center flex"}>
              <img
                src={smallSphere}
                className="relative z-1 scale-125"
                width={255}
                height={255}
                alt="Sphere"
                ref={sphereRef}
              />
            </div>
          </ScrollParallax>
          <div className="absolute top-20 left-1/2 w-[70rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
              ref={starsRef}
            />
          </div>
        </div>

          <Tagline>
              Get started with Brainwave
          </Tagline>

        <h1 className={"h2 md:h1 my-12 items-center justify-center flex z-5"} ref={headingRef}>
          <span className={"text-color-1"}>One&nbsp;</span> Payment,&nbsp;
          <span className={"text-color-2"}>Lifetime&nbsp;</span> Access
        </h1>

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
            ref={fullDetailsRef}
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};
