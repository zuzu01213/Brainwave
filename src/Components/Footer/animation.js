import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roadmap } from '../../Constants/index.js'; // Adjust the path as needed

// Function to register GSAP plugins and define animations
export const setupAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    roadmap.forEach((item, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#animation-${index + 1}`,
                start: 'top bottom-=100', // Adjust start position
            },
        });

        tl.fromTo(
            `#animation-${index + 1}`,
            { opacity: 0, y: 100, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
        );
        tl.fromTo(
            `#animation-${index + 1} img`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 },
            '<'
        );
        tl.fromTo(
            `#animation-${index + 1} .tagline`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            '<0.5'
        );
        tl.fromTo(
            `#animation-${index + 1} h4`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            '<0.5'
        );
        tl.fromTo(
            `#animation-${index + 1} p`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            '<0.5'
        );
    });

    // Example animation outside the forEach loop
    gsap.fromTo(
        ".animation-8",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.8, // Adjust delay as needed
            scrollTrigger: {
                trigger: ".animation-8",
                start: 'top bottom-=100', // Adjust start position
            }
        }
    );
};
