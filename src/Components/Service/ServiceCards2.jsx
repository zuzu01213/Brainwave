import {service2, service3} from "../../assets/index.js";
import Button from "../Parts/Button.jsx";
import {ScrollParallax} from "react-just-parallax";
import {PhotChatMessage, VideoBar, VideoChatMessage} from "../design/Services.jsx";
import {brainwaveServicesIcons} from "../../Constants/index.js";
import React from "react";

export const ServiceCards2 = () => {
    return (
        <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-5">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={service2}
                        className="h-full w-full object-cover image-animation-2 opacity-0"
                        width={630}
                        height={750}
                        alt="robot"
                    />
                </div>
                <div
                    className="absolute inset-0 flex justify-end flex-col p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                    <h4 className="h4 mb-4 text-title-2">Photo Editing</h4>
                    <p className="body-2 mb-[3rem] text-n-3 text-title-2">
                        Automatically enhance your photos using our AI app's photos editing feature.
                    </p>
                    <Button>
                        Try it now!
                    </Button>
                </div>

                <div className="image-animation-2">
                    <ScrollParallax isAbsolutelyPositioned>
                        <PhotChatMessage/>
                    </ScrollParallax>
                </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                    <h4 className="h4 mb-4 text fade-title opacity-0">Video Generation</h4>
                    <p className="body-2 mb-[2rem] text-n-3 g_fadeIn opacity-0">
                        The world's most powerful AI photo and video
                        art generation engine.
                        What will you create?
                    </p>

                    <ul className="flex items-center justify-between g_fadeIn-icon opacity-0">
                        {brainwaveServicesIcons.map((item, index) => (
                            <li
                                key={index}
                                className={`rounded-2xl flex items-center justify-center ${
                                    index === 2
                                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                                }`}
                            >
                                <div
                                    className={index === 2 ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]" : ""}>
                                    <img src={item} width={34} height={34} alt={item}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative h-[25rem] bg-n-8 rounded-xl overflow-hidden">
                    <img
                        src={service3}
                        className="w-full h-full object-cover image-animation-3"
                        alt="scary"
                        width={520}
                        height={600}
                    />

                    <ScrollParallax isAbsolutelyPositioned>
                        <VideoChatMessage/>
                    </ScrollParallax>

                    <div className="text-title-2">
                        <VideoBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}