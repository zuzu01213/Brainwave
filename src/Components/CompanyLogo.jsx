import { companyLogos } from "../Constants/index.js";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const CompanyLogo = ({ className }) => {
    const logosRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Stagger animation for logos
        gsap.fromTo(logosRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1,
              stagger: 0.2, // Stagger animation by 0.2 seconds
              scrollTrigger: {
                  trigger: logosRefs.current[0], // Trigger animation on first logo
                  start: 'bottom 80%',
                  end: 'bottom 50%',
                  scrub: 0.5
              }
        });

        // Animation for text
        gsap.fromTo("#text",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1,
              scrollTrigger: {
                  trigger: "#text",
                  start: 'bottom bottom',
                  end: 'top center',
                  scrub: 0.5
              }
        });
    }, []);

    return (
        <div className={className}>
            <h5 id="text" className="opacity-0 tagline md:mb-14 mb-8 text-xs text-center md:text-lg text-color-6">
                Helping people create beautiful content at
            </h5>
            <ul className="flex mb-20">
                {companyLogos.map((logo, index) => (
                    <li ref={el => logosRefs.current[index] = el} key={index}
                        className="flex opacity-0 items-center justify-center hover:scale-110 duration-300 ease-in-out flex-1 h-[0.5rem]">
                        <img
                            src={logo}
                            alt={logo}
                            className="w-[70px] md:w-[130px]"
                        />
                    </li>
                ))}
            </ul>

        </div>
    );
};
