import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupAnimations = () => {


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


};
