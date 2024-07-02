import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupAnimationsThird = () => {

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

};
