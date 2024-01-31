import { AnimatedSeparator } from "@/components/ui/animated-separator";

const AboutMe = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-3/4 h-[700px] flex">
                <div className="flex-1"></div>
                <AnimatedSeparator orientation="vertical" />
                <div className="flex flex-1 flex-col">
                    <div className="flex-1"></div>
                    <AnimatedSeparator orientation="horizontal" />
                    <div className="flex-1"></div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
