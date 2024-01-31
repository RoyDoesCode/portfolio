"use client";

import AboutMe from "@/components/sections/about-me";
import Hero from "@/components/sections/hero";
import { Section } from "@/components/sections/section";

const Home = () => {
    return (
        <div className="flex flex-col gap-[60vh] pt-[35vh]">
            <Section title="WELCOME" parallaxDistance={300}>
                <Hero />
            </Section>
            <Section title="ABOUT ME" parallaxDistance={500}>
                <AboutMe />
            </Section>
            <Section title="PROJECTS" parallaxDistance={300}>
                <Hero />
            </Section>
        </div>
    );
};

export default Home;
