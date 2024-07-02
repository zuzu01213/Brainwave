    import React, { useEffect } from 'react';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { Section } from "../Parts/Section.jsx";
    import { Tagline } from "../Parts/Tagline.jsx";
    import { roadmap } from "../../Constants/index.js";
    import { check2, grid, loading1 } from "../../assets/index.js";
    import Button from "../Parts/Button.jsx";

    export const Roadmap = () => {
        useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            roadmap.forEach((item, index) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: `#animation-${index + 1}`,
                        start: 'top bottom-=100',

                    },
                });

                // Animation for each element using fromTo
                  tl.fromTo(
                    `#animation-${index + 1}`,
                    { opacity: 0, y: 100, scale: 0.8 },
                    { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
                );
                tl.fromTo(
                    `#animation-${index + 1} img`,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1 },
                    '<'
                );
                tl.fromTo(
                    `#animation-${index + 1} .tagline`,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.5 },
                    '<0.5'
                );
                tl.fromTo(
                    `#animation-${index + 1} h4`,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.5 },
                    '<0.5'
                );
                tl.fromTo(
                    `#animation-${index + 1} p`,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.5 },
                    '<0.5'
                );

            });
            gsap.fromTo(
            ".animation-8",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1.8, // Adjust delay as needed
                scrollTrigger: {
                    trigger: ".animation-8",
                    start: 'top bottom-=100', // Adjust start position

                }
            }
        );
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
                    <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] mt-10">
                        {roadmap.map((item, index) => {
                            const status = item.status === "done" ? "Done" : "In progress";

                            return (
                                <div
                                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                                        item.colorful ? "bg-conic-gradient" : "bg-n-6"
                                    }`}
                                    key={item.id}
                                    id={`animation-${index + 1}`}
                                >
                                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                        <div className="absolute top-0 left-0 max-w-full">
                                            <img
                                                className="w-full"
                                                src={grid}
                                                width={550}
                                                height={550}
                                                alt="Grid"
                                            />
                                        </div>
                                        <div className="relative z-1">
                                            <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                                <Tagline>{item.date}</Tagline>
                                                <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                                    <img
                                                        className="mr-2.5"
                                                        src={item.status === "done" ? check2 : loading1}
                                                        width={16}
                                                        height={16}
                                                        alt={status}
                                                    />
                                                    <div className="tagline">{status}</div>
                                                </div>
                                            </div>
                                            <div className="mb-10 -my-10 -mx-15">
                                                <img
                                                    className="w-full"
                                                    src={item.imageUrl}
                                                    width={628}
                                                    height={426}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <h4 className="h4 mb-4">{item.title}</h4>
                                            <p className="body-2 text-n-4">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-12 md:mt-0 xl:mt-0 ">
                        <Button className={"animation-8"} href="/roadmap">Our roadmap</Button>
                    </div>
                </div>
            </Section>
        );
    };
