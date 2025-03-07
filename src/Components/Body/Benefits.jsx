import { useEffect, useRef } from "react";
import { animateTextCenter, animateBenefits } from "./animationBenefits";
import { benefits } from "../../Constants/index.js";
import Arrow from "../../assets/svg/Arrow.jsx";
import { GradientLight } from "../design/Benefits.jsx";
import { Section } from "../Parts/Section.jsx";
import ClipPath from "../../assets/svg/ClipPath.jsx";

export const Benefits = () => {
  const benefitsRefs = useRef([]);
  const textCenterRef = useRef(null);

  useEffect(() => {
    animateTextCenter(textCenterRef.current);
    animateBenefits(benefitsRefs.current);
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
