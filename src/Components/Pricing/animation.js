// animation.js
import { gsap } from "gsap";

export const animateHeading = (ref) => {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power1.out", scrollTrigger: { trigger: ref, start: "top 80%" } }
  );
};

export const animateSphere = (ref) => {
  gsap.fromTo(
    ref,
    { opacity: 0, scale: 0.8, rotation: -20 },
    { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.75)", scrollTrigger: { trigger: ref, start: "top 80%" } }
  );
};

export const animateStars = (ref) => {
  gsap.fromTo(
    ref,
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1, ease: "power1.out", scrollTrigger: { trigger: ref, start: "top 80%" } }
  );
};

export const animateFullDetails = (ref) => {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: "power1.out", scrollTrigger: { trigger: ref, start: "top 80%" } }
  );
};
