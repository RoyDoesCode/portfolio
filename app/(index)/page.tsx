"use client";

import Hero from "./components/hero";
import { Section } from "@/components/section";

const Home = () => {
    return (
        <div className="flex flex-col gap-[60vh] pt-[35vh]">
            <Section title="WELCOME">
                <Hero />
            </Section>
            <Section title="ABOUT ME">
                <Hero />
            </Section>
            <Section title="PROJECT">
                <Hero />
            </Section>
        </div>
    );
};

export default Home;
