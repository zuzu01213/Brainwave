import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./Section.jsx";
import { Gradient } from "./design/Services.jsx";
import {ServiceCard1} from "./ServiceCard1.jsx";
import {ServiceCards2} from "./ServiceCards2.jsx";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  useEffect(() => {
    gsap.fromTo(
      ".image-animation",
      { opacity: 0, x: -550, rotation: -30 },
      { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: 'power1.inOut',
        scrollTrigger: {
          trigger: ".image-animation",
          start: "top 36%",
        }
      }
    );

    gsap.fromTo(
      ".image-animation-2",
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: ".image-animation-2",
          start: "top 36%",
        }
      }
    );

    gsap.fromTo(
      ".image-animation-3",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: ".image-animation-3",
          start: "bottom bottom",
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
      '.g_fadeIn',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.g_fadeIn',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.g_fadeIn-icon',
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.g_fadeIn-icon',
          start: 'top 80%',
        },
      }
    );

    gsap.to('.fade-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.fade-title',
        start: "top 80%",
      }
    });

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
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <ServiceCard1/>

         <ServiceCards2/>
        </div>

        <Gradient />
      </div>
    </Section>
  );
};
