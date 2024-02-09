"use client";

import AboutMe from "@/app/(index)/(routes)/components/about-me";
import Hero from "@/app/(index)/(routes)/components/hero";
import Projects from "@/app/(index)/(routes)/components/projects";
import { Section } from "@/app/(index)/(routes)/components/section";

const Home = () => {
    return (
        <div className="flex flex-col gap-[40vh] pt-[35vh]">
            <Section id="home" title="WELCOME" parallaxDistance={300}>
                <Hero />
            </Section>
            <Section id="about-me" title="ABOUT ME" parallaxDistance={500}>
                <AboutMe />
            </Section>
            <Section id="projects" title="PROJECTS" parallaxDistance={300}>
                <Projects />
            </Section>
        </div>
    );
};

export default Home;
