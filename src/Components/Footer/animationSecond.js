import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roadmap } from '../../Constants/index.js';


export const setupAnimationsSecond = () => {
    gsap.registerPlugin(ScrollTrigger);


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
