import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateTextCenter = (ref) => {
  gsap.fromTo(
    ref,
    { opacity: 0, y: -80 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "top 60%",
      },
    }
  );
};

export const animateBenefits = (refs) => {
  const animations = [
    { opacity: 0, y: -100 },
    { opacity: 0, y: -100 },
    { opacity: 0, y: -100 },
    { opacity: 0, x: -100 },
    { opacity: 0, y: 100 },
    { opacity: 0, x: 100 },
  ];

  refs.forEach((benefitRef, index) => {
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
        delay: index * 0.2,
      }
    );
  });
};
