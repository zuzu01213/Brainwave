import  { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./Section.jsx";
import { service1, check } from "../assets/index.js";
import { brainwaveServices } from "../Constants/index.js";
import { Generating } from "./Generating.jsx";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
    useEffect(() => {
        gsap.fromTo(
          ".image-animation",
          { opacity: 0, x: -550, rotation: -30 },
          { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: 'bounce.out',
            scrollTrigger: {
              trigger: ".image-animation",
              start: "top 36%",
              
            }
          }
        );
      
        gsap.fromTo(
          ".text-title",
          { opacity: 0, y: 50, rotation: 10 },
          { opacity: 1, y: 0, rotation: 0, duration: 1, ease: 'power1.inOut', stagger: 0.25,
            scrollTrigger: {
              trigger: ".text-title",
              start: "top 80%",
              
            }
          }
        );
      
        gsap.fromTo(
          ".text-animation",
          { opacity: 0, x: 50, scale: 0.8 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power1.inOut', stagger: 0.5,
            scrollTrigger: {
              trigger: ".text-animation",
              start: "top 80%",
              
            }
          }
        );
      
        gsap.fromTo(
          ".generating-animation",
          { opacity: 0, y: 50, skewX: 10 },
          { opacity: 1, y: 0, skewX: 0, duration: 1, ease: 'power1.inOut',
            scrollTrigger: {
              trigger: ".generating-animation",
              start: "bottom bottom",
            }
          }
        );
      }, []);
      
  return (
    <Section id="how-to-use">
      <div className="container">
        <heading
          title="Generative AI made for creators."
          // eslint-disable-next-line react/no-unknown-property
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right image-animation opacity-0"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto text-animation opacity-0">
              <h4 className="h4 mb-4 text-title">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3 text-title">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2 text-animation">
                {brainwaveServices.map((item, index) => (
                  <li key={index} className="flex items-start py-4 border-t border-n-6">
                    <img width={24} height={24} src={check} alt="checkmark" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 generating-animation opacity-0" />
          </div>

          
        </div>
      </div>
    </Section>
  );
};
