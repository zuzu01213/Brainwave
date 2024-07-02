import {heroBackground, robot} from "../../assets/index.js";
import {Generating} from "../Parts/Generating.jsx";
import {ScrollParallax} from "react-just-parallax";
import {heroIcons} from "../../Constants/index.js";
import {Notification} from "../Parts/Notification.jsx";
import {BackgroundCircles, Gradient} from "../design/Hero.jsx";
import {useRef} from "react";

export const TextContent = () => {
     const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    return (
        <div className="relative max-w-[62rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"/>
                    <div
                        className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
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

                <Gradient/>
            </div>

            <div
                className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:top-[46%] md:w-[138%] lg:-top-[104%]">
                <img
                    src={heroBackground}
                    className="w-full"
                    alt="hero"
                    width={1440}
                    height={1800}
                />
            </div>

            <ScrollParallax isAbsolutelyPositioned>
                <BackgroundCircles/>
            </ScrollParallax>
        </div>
    )
}