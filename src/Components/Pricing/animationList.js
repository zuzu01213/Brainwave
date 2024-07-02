import { gsap } from "gsap";

export const animateCard = (el, index) => {
    let animationProps = {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
        },
    };

    if (index === 0) {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                x: -100,
                rotation: -15,
            },
            {
                ...animationProps,
                x: 0,
                rotation: 0,
            }
        );
    } else if (index === 1) {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 100,
                scale: 0.8,
            },
            {
                ...animationProps,
                y: 0,
                scale: 1,
            }
        );
    } else if (index === 2) {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                x: 100,
                rotation: 15,
            },
            {
                ...animationProps,
                x: 0,
                rotation: 0,
            }
        );
    }

    // Animating elements inside each pricing card
    gsap.fromTo(
        el.querySelectorAll(".h4, .body-2, .h3, ul, .Button"),
        {
            opacity: 0,
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
            },
        }
    );
};
