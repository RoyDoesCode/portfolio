"use client";

import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import { Section } from "./components/section";

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
            <Section id="contact" title="CONTACT" parallaxDistance={300}>
                <Contact />
            </Section>
        </div>
    );
};

export default Home;
