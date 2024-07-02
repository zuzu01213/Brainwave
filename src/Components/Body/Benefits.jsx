import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits } from "../../Constants/index.js";
import Arrow from "../../assets/svg/Arrow.jsx";
import { GradientLight } from "../design/Benefits.jsx";
import { Section } from "../Parts/Section.jsx";
import ClipPath from "../../assets/svg/ClipPath.jsx";
import { Heading } from "../Header/Heading.jsx";

export const Benefits = () => {
  const benefitsRefs = useRef([]);
  const textCenterRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
  textCenterRef.current,
  { opacity: 0, y: -80 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: textCenterRef.current,
      start: "top 80%",
      end: "top 60%",

    },
  }
);

const animations = [
  { opacity: 0, y: -100 },  // From top
  { opacity: 0, y: -100 },  // From top
  { opacity: 0, y: -100 },  // From top
  { opacity: 0, x: -100 },  // From left
  { opacity: 0, y: 100 },   // From bottom
  { opacity: 0, x: 100 }    // From right
];

benefitsRefs.current.forEach((benefitRef, index) => {
  gsap.fromTo(
    benefitRef,
    animations[index],
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: benefitRef,
        start: 'top 80%',
        end: 'top 60%',

      },
      delay: index * 0.2, // Stagger the animation
    }
  );
});

  }, []);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <div ref={textCenterRef} className="text-center">
          <h1 id="text" className="text-3xl md:text-5xl text-gray-200 mb-10">
            Chat{" "}
            <span className="text-color-2 font-bold">Smarter</span>, not{" "}
            <span className="text-color-4 font-bold">Harder</span> with Amazing Power of Ours{" "}
            <span className="text-color-1 inline-block font-bold">Brainwave</span>
          </h1>
        </div>

        <div className="flex flex-wrap gap-10 mb-10 mt-24">
          {benefits.map((item, index) => (
            <div
              ref={(el) => (benefitsRefs.current[index] = el)}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
