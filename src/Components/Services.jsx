import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./Section.jsx";
import {service1, service2, check, service3} from "../assets/index.js";
import {brainwaveServices, brainwaveServicesIcons} from "../Constants/index.js";
import { Generating } from "./Generating.jsx";
import Button from "./Button.jsx";
import {Gradient, PhotChatMessage, VideoBar, VideoChatMessage} from "./design/Services.jsx";
import { ScrollParallax } from "react-just-parallax";

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
      ".image-animation-2",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1.4, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: ".image-animation-2",
          start: "top 36%",
        }
      }
    )
     gsap.fromTo(
      ".image-animation-3",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1.4, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: ".image-animation-3",
          start: "bottom bottom",
        }
      }
    )

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
      ".text-title-2",
      { opacity: 0, y: 50, rotation: 10 },
      { opacity: 1, y: 0, rotation: 0, duration: 1, ease: 'power3.inOut', stagger: 0.25,
        scrollTrigger: {
          trigger: ".text-title-2",
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

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-5">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover image-animation-2 opacity-0"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex justify-end flex-col p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4 text-title-2">Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3 text-title-2">
                  Automatically enhance your photos using our AI app's photos editing feature.
                </p>
                <Button>
                  Try it now!
                </Button>
              </div>

              {/* Place PhotChatMessage component here */}
                <div className={"image-animation-2"}>
                  <ScrollParallax isAbsolutelyPositioned >
                    <PhotChatMessage />
                  </ScrollParallax>

                </div>
            </div>
          </div>

          <div className={"p-4 bg-n-7 rounded-3xl overflow-hidden m" +
              "lg:min-h-[46rem]"}>

            <div className={"py-12 px-4 xl:px-8"}>
              <h4 className={"h4 mb-4"}>Video Generation</h4>
              <p className={"body-2 mb-[2rem] text-n-3"}>
                The world's most powerful AI photo and video
                art generation engine.
                What will you create?
              </p>

              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item, index) => (
                    <li
                        key={index}
                        className={`rounded-2xl flex items-center justify-center ${
                            index === 2
                                ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                                : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                        }`}
                    >
                      <div
                          className={
                            index === 2
                                ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                                : ""
                          }
                      >
                        <img src={item} width={24} height={24} alt={item}/>
                      </div>
                    </li>
                ))}
              </ul>
            </div>


            <div className={"relative h-[20rem] bg-n-8 " +
                "rounded-xl overflow-hidden"}>
              <img
                  src={service3}
                  className={"w-full h-full object-cover image-animation-3"}
                  alt={"scary"}
                  width={520}
                  height={400}
              />

              <ScrollParallax isAbsolutelyPositioned>
                <VideoChatMessage/>
              </ScrollParallax>

              <div className={'text-title-2'}>
                <VideoBar/>
              </div>

            </div>
          </div>
        </div>

        <Gradient/>
      </div>
    </Section>
  );
};
