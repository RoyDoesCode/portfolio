import { AnimatedSeparator } from "@/components/ui/animated-separator";

const AboutMe = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="h-[70vh] aspect-[16/9] flex">
                <div className="flex-1 w-1/3">
                    <div className="flex-1 h-2/3 mb-px"></div>
                    <AnimatedSeparator
                        thickness={0.5}
                        orientation="horizontal"
                        reversed
                        animationTime={1}
                    />
                    <div className="flex-1 h-1/3 p-4 text-neutral-400">
                        I'm a web developer who's not your typical tech geek.
                        Spent some time in the army, worked with a bunch of
                        different clients, and I'm all about creating websites
                        that people actually enjoy using. From making things
                        look good to sorting out the techy bits, I've got it
                        covered.
                    </div>
                </div>

                <AnimatedSeparator orientation="vertical" reversed />

                <div className="flex-1 w-1/3">
                    <div className="flex-1 h-1/3"></div>
                    <AnimatedSeparator orientation="horizontal" />
                    <div className="flex-1 h-1/3"></div>
                    <AnimatedSeparator
                        thickness={0.5}
                        orientation="horizontal"
                        reversed
                        animationTime={1}
                        delay={1}
                    />
                    <div className="flex flex-1 h-1/3 flex-row">
                        <div className="flex-1 w-1/2"></div>
                        <AnimatedSeparator orientation="vertical" />
                        <div className="flex-1 w-1/2"></div>
                    </div>
                </div>

                <AnimatedSeparator orientation="vertical" reversed />

                <div className="flex-1 w-1/3">
                    <div className="flex flex-row flex-1 h-2/3 mb-px">
                        <div className="flex-1 w-1/2"></div>
                        <AnimatedSeparator orientation="vertical" reversed />
                        <div className="flex-1 w-1/2">
                            <div className="flex-1 h-1/2"></div>
                            <AnimatedSeparator orientation="horizontal" />
                            <div className="flex-1 h-1/2"></div>
                        </div>
                    </div>
                    <AnimatedSeparator
                        thickness={0.5}
                        orientation="horizontal"
                        reversed
                        animationTime={1}
                        delay={2}
                    />
                    <div className="flex-1 h-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
