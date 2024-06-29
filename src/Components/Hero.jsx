import { Section } from "./Section.jsx";
import {curve} from "../assets/index.js";

export const Hero = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                        <span className={"text-color-2"}>Explore</span>  the Possibilities of <span className={"text-color-6"}>AI Chatting</span>  with  BrainwaveCurve
                        <span className={"inline-block relative text-color-1"}>
                            Brainwave {''}
                            <img
                            src={curve}
                            alt={"line rainbow"}
                            className={"absolute top-full left-0 " +
                                "w-full xl:mt-2"}
                            width={224}
                            height={28}
                            />
                        </span>
                        <p>

                        </p>
                    </h1>
                </div>
            </div>
        </Section>
    );
};
