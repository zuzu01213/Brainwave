import { Section } from "../Parts/Section.jsx";
import {  heroBackground, robot } from "../../assets/index.js";
import { heroIcons } from "../../Constants/index.js";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero.jsx";
import { Generating } from "../Parts/Generating.jsx";
import { Notification } from "../Parts/Notification.jsx";
import { CompanyLogo } from "../Body/CompanyLogo.jsx";
import {TextTitle} from "./TextTitle.jsx";
import {TextContent} from "./TextContent.jsx";

export const Hero = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const titleElement = titleRef.current;
        const descriptionElement = descriptionRef.current;

        if (titleElement && descriptionElement) {
            gsap.fromTo(
                titleElement,
                { text: "" },
                {
                    duration: 3,
                    text: { value: titleElement.textContent, delimiter: "" },
                    ease: "none"
                }
            );

            gsap.fromTo(
                descriptionElement,
                { text: "" },
                {
                    duration: 3,
                    delay: 0.5,
                    text: { value: descriptionElement.textContent, delimiter: "" },
                    ease: "none"
                }
            );
        }
    }, []);

    return (
        <Section
            className="md:pt-[11rem] pt-[9rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative">
                <TextTitle/>

                <TextContent/>

                <CompanyLogo className={"relative mt-20 lg:block z-10"} />
            </div>
            <BottomLine />
        </Section>
    );
};
