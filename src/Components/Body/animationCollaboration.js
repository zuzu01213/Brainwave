import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateRounded = (ref) => {
  gsap.fromTo(
    ref,
    { scale: 0.5, opacity: 0 },
    {
      scale: 1.23,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "top 60%",
      },
    }
  );
};

export const animateIcons = (refs) => {
  refs.forEach((iconRef, index) => {
    gsap.fromTo(
      iconRef,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: iconRef,
          start: "top 80%",
          end: "top 60%",
        },
      }
    );
  });
};

export const animateContent = (refs) => {
  refs.forEach((contentRef, index) => {
    gsap.fromTo(
      contentRef,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: contentRef,
          start: "top 80%",
          end: "top 60%",
        },
      }
    );
  });
};

export const animateButton = (ref) => {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "top 60%",
      },
    }
  );
};

export const animateText = (ref) => {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref,
        start: "top 80%",
        end: "top 60%",
      },
    }
  );
};
