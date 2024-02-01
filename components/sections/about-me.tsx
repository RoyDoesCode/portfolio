"use client";

import { Header } from "@/components/ui/header";
import { AnimatedSeparator } from "@/components/ui/animated-separator";
import { motion } from "framer-motion";
import useIsMounted from "@/hooks/useIsMounted";

const AboutMe = () => {
    const lines = [
        "I'm a web developer who's not your typical tech geek.",
        "Spent some time in the army, worked with a bunch of",
        "different clients, and I'm all about creating websites",
        "that people actually enjoy using. From making things",
        "look good to sorting out the techy bits, I've got it",
        "covered.",
    ];

    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex justify-center items-center">
            <div
                className=" 
                    transparent-box
                    w-[65vw] 
                    flex
                    flex-row
                    gap-5
                    p-32
                "
            >
                <div className="flex-1"></div>
                <div className="flex flex-1 flex-col gap-8">
                    <AnimatedSeparator
                        orientation="horizontal"
                        style={{ width: "30%" }}
                        dashClass="bg-neutral-400"
                        reversed
                    />
                    <Header title="Roy Barzilay" description="WEB MAKER" />
                    <p>
                        {lines.map((line, index) => (
                            <div key={line}>
                                <motion.span
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={{
                                        hidden: { opacity: 1 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                delayChildren: 0.1 * index,
                                                staggerChildren: 0.03,
                                            },
                                        },
                                    }}
                                >
                                    {line.split("").map((char, index) => (
                                        <motion.span
                                            key={`${char}-${index}`}
                                            variants={{
                                                hidden: { opacity: 0, y: 50 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.span>
                                <br />
                            </div>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
