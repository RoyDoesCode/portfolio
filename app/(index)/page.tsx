"use client";

import AboutMe from "@/components/sections/about-me";
import Hero from "@/components/sections/hero";
import { Section } from "@/components/sections/section";

const Home = () => {
    return (
        <div className="flex flex-col gap-[60vh] pt-[35vh]">
            <Section id="home" title="WELCOME" parallaxDistance={300}>
                <Hero />
            </Section>
            <Section id="about-me" title="ABOUT ME" parallaxDistance={600}>
                <AboutMe />
            </Section>
            <Section id="projects" title="PROJECTS" parallaxDistance={300}>
                <Hero />
            </Section>
        </div>
    );
};

export default Home;
