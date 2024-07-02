import { useEffect, useRef } from "react";
import { animateRounded, animateIcons, animateContent, animateButton, animateText } from "./animationCollaboration";
import { collabApps, collabContent, collabText2 } from "../../Constants/index.js";
import { brainwaveSymbol, check } from "../../assets/index.js";
import Button from "../Parts/Button.jsx";
import { LeftCurve, RightCurve } from "../design/Collaboration.jsx";
import { Section } from "../Parts/Section.jsx";

export const Collaboration = () => {
    const roundedRef = useRef(null);
    const iconsRefs = useRef([]);
    const contentRefs = useRef([]);
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        animateRounded(roundedRef.current);
        animateIcons(iconsRefs.current);
        animateContent(contentRefs.current);
        animateButton(buttonRef.current);
        animateText(textRef.current);
    }, []);
    return (
        <Section crosses>
            <div className={"container lg:flex"}>
                <div className={"max-w-[25rem]"}>
                    <h2 className={"h2 mb-4 md:mb-8"}>
                        AI Chat App for Seamless Collaboration
                    </h2>
                    <ul className={"max-w-[22rem] mb-10 md:mb-14"}>
                        {collabContent.map((item, index) => (
                            <li
                                className={"mb-3 py-3"}
                                key={item.id}
                                ref={el => contentRefs.current[index] = el}
                            >
                                <div className={"flex items-center"}>
                                    <img src={check} width={24} height={24} alt={"check"} />
                                    <h6 className={"body-2 ml-5"}>{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className={"body-2 mt-3 text-n-4"}>
                                        {item.text}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button ref={buttonRef}>
                        Try it now
                    </Button>
                </div>

                <div className="lg:ml-auto xl:w-[30rem]">
                    <p
                        className="body-2 mb-28 text-n-4 md:mb-24 lg:mb-52 lg:w-[22rem] lg:mx-auto my-4"
                        ref={textRef}
                    >
                        {collabText2}
                    </p>

                    <div
                        id="rounded"
                        ref={roundedRef}
                        className="relative left-1/2 flex w-[22rem]
                        aspect-square rounded-full -translate-x-1/2
                        md:scale-125 opacity-1 my-20"
                    >
                        <div
                            className="relative left-1/2 flex w-[22rem] aspect-square
                            rounded-full -translate-x-1/2 scale-100 md:scale-110
                            border border-n-6"
                        >
                            <div className="flex w-60 m-auto border border-n-6 aspect-square rounded-full">
                                <div
                                    className="w-[6rem] aspect-square m-auto p-[0.2rem]
                                    bg-conic-gradient rounded-full"
                                >
                                    <div className="flex items-center justify-center w-full
                                    h-full bg-n-8 rounded-full">
                                        <img
                                            src={brainwaveSymbol}
                                            height={48}
                                            alt="brainwave"
                                        />
                                    </div>
                                </div>
                            </div>

                            <ul>
                                {collabApps.map((app, index) => (
                                    <li
                                        key={app.id}
                                        ref={el => iconsRefs.current[index] = el}
                                        className={`absolute top-0 left-1/2 h-1/2
                                        -ml-[1.6rem] origin-bottom 
                                        rotate-${index * 45}`}
                                    >
                                        <div className={`relative -top-[1.6rem] flex 
                                        w-[3.2rem] h-[3.2rem] bg-n-7
                                        border border-n-1/15 rounded-xl
                                        -rotate-${index * 45}`}
                                        >
                                            <img
                                                className={"m-auto"}
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <LeftCurve />
                            <RightCurve />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
