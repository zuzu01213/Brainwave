import { Section } from "../Parts/Section.jsx";
import { curve, heroBackground, robot } from "../../assets/index.js";
import Button from "../Parts/Button.jsx";
import { heroIcons } from "../../Constants/index.js";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero.jsx";
import { Generating } from "../Parts/Generating.jsx";
import { Notification } from "../Parts/Notification.jsx";
import { CompanyLogo } from "../Body/CompanyLogo.jsx";

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
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6" ref={titleRef}>
                        <span className="text-color-2">Explore</span> the Possibilities of{" "}
                        <span className="text-color-6">AI Chatting</span> with{" "}
                        <span className="inline-block relative text-color-1">
                            Brainwave{" "}
                            <img
                                src={curve}
                                alt="line rainbow"
                                className="absolute top-full left-0 w-full xl:mt-2"
                                width={224}
                                height={28}
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl text-n-2 lg:mb-8 mb-6 mx-auto md:my-12" ref={descriptionRef}>
                        Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                    </p>
                    <Button href="/pricing" white>
                        Get started
                    </Button>
                </div>

                <div className="relative max-w-[62rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src={robot}
                                    alt="robot"
                                    className="w-full scale-[1.7] translate-y-[-8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                />

                                <Generating
                                    className={
                                        "absolute left-4 right-4 bottom-5 md:left-1/2 " +
                                        "md:right-auto md:bottom-0 md:w-[32rem] " +
                                        "md:-translate-x-1/2"
                                    }
                                />

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul
                                        className="absolute -left-[1.5rem] bottom-[23.5rem]
                                    md:-left-[5.5rem] md:bottom-[7.5rem] flex
                                    px-1 py-1 bg-n-9/40 backdrop-blur border
                                    border-n-1/10 rounded-2xl"
                                    >
                                        {heroIcons.map((icon, index) => (
                                            <li className="p-5" key={index}>
                                                <img
                                                    src={icon}
                                                    alt={`icon-${index}`}
                                                    width={24}
                                                    height={25}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification
                                        classname={
                                            "absolute -right-[2rem] md:-right-[5.5rem] " +
                                            "bottom-[11rem] md:bottom-[16rem] " +
                                            "w-[18rem] xl:flex"
                                        }
                                        title={"Code generation"}
                                    />
                                </ScrollParallax>
                            </div>
                        </div>

                        <Gradient />
                    </div>

                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            alt="hero"
                            width={1440}
                            height={1800}
                        />
                    </div>

                    <ScrollParallax isAbsolutelyPositioned>
                        <BackgroundCircles />
                    </ScrollParallax>
                </div>

                <CompanyLogo className={"relative mt-20 lg:block z-10"} />
            </div>
            <BottomLine />
        </Section>
    );
};
