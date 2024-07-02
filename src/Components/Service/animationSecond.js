import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupAnimationsSecond = () => {
    gsap.fromTo(
        ".image-animation",
        { opacity: 0, x: -550, rotation: -30 },
        { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: 'power3.inOut',
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
};
