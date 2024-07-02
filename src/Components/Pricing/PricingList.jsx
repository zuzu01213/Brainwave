import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pricing } from "../../Constants/index.js";
import Button from "../Parts/Button.jsx";
import { check } from "../../assets/index.js";
import { animateCard } from "./animationList.js"; // Import animation function

gsap.registerPlugin(ScrollTrigger);

export const PricingList = () => {
    const pricingRefs = useRef([]);

    useEffect(() => {
        pricingRefs.current.forEach((el, index) => {
            animateCard(el, index); // Call the animation function
        });
    }, []);

    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item, index) => (
                <div
                    key={item.id}
                    ref={el => pricingRefs.current[index] = el}
                    className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8
                    border border-n-6 rounded-[2rem] lg:w-auto
                    even:py-14 odd:py-8 [&>h4]:first:text-color-2
                    [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                >
                    <h4 className="mb-4 h4">
                        {item.title}
                    </h4>

                    <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                        {item.description}
                    </p>

                    <div className="flex items-center h-[5.5rem] mb-6">
                        {item.price && (
                            <>
                                <div className="h3">$</div>
                                <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                            </>
                        )}
                    </div>

                    <Button
                        href={item.price ? '/pricing' : "mailto:info@Brainwaves.com"}
                        className="w-full my-6"
                        white={!!item.price}
                    >
                        {item.price ? 'Get started' : "Contact us"}
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start py-5 border-t border-n-6"
                            >
                                <img
                                    src={check}
                                    width={24}
                                    height={24}
                                    alt="check"
                                />
                                <p className="body-2 ml-4">
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
