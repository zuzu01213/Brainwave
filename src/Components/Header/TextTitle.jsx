import {curve} from "../../assets/index.js";
import Button from "../Parts/Button.jsx";
import {useRef} from "react";

export const TextTitle = () => {

     const titleRef = useRef(null);
     const descriptionRef = useRef(null);

     return (
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
                Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat
                app.
            </p>
            <Button href="/pricing" white>
                Get started
            </Button>
        </div>
    )
}