import AboutMe from "./components/about-me";
import Hero from "./components/hero";

const Home = () => {
    return (
        <div className="relative flex flex-col gap-[40vh]">
            <Hero />
            <AboutMe />
        </div>
    );
};

export default Home;
