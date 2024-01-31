"use client";

import Hero from "@/components/sections/hero";
import { Section } from "@/components/sections/section";

const Home = () => {
    return (
        <div className="flex flex-col gap-[60vh] pt-[35vh]">
            <Section title="WELCOME">
                <Hero />
            </Section>
            <Section title="ABOUT ME">
                <Hero />
            </Section>
            <Section title="PROJECTS">
                <Hero />
            </Section>
        </div>
    );
};

export default Home;
