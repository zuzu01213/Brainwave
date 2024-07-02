import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from "../Parts/Section.jsx";
import { Tagline } from "../Parts/Tagline.jsx";
import Button from "../Parts/Button.jsx";
import { setupAnimations } from './animation.js'
import {RoadmapContent} from "./RoadmapContent.jsx";
import {setupAnimationsSecond} from "./animationSecond.js";

export const Roadmap = () => {


     useEffect(() => {
        setupAnimations();
        setupAnimationsSecond();
    }, []);


    return (
        <Section className="overflow-hidden" id="roadmap">
            <div className="container md:pb-10">
                <Tagline>
                    Get ready to get started
                </Tagline>
                <h1 className="h2 md:h1 justify-center flex">
                    What we're working on
                </h1>


                <RoadmapContent/>


                <div className="flex justify-center mt-12 md:mt-0 xl:mt-0">
                    <Button className={"animation-8"} href="/roadmap">Our roadmap</Button>
                </div>
            </div>
        </Section>
    );
};
