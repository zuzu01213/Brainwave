import React, { useEffect } from "react";
import { setupAnimations } from "./animation.js";
import {setupAnimationsSecond} from "./animationSecond.js";
import { Section } from "../Parts/Section.jsx";
import { Gradient } from "../design/Services.jsx";
import { ServiceCard1 } from "./ServiceCard1.jsx";
import { ServiceCards2 } from "./ServiceCards2.jsx";
import {setupAnimationsThird} from "./animationThird.js";

export const Services = () => {
    useEffect(() => {
        setupAnimations();
        setupAnimationsSecond();
        setupAnimationsThird();

    }, []);

    return (
        <Section id="how-to-use">
            <div className="container">
                <div className="relative">
                    <ServiceCard1 />
                    <ServiceCards2 />
                </div>
                <Gradient />
            </div>
        </Section>
    );
};
