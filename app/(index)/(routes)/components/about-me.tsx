"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { SocialIcons } from "@/components/social-icons";
import { AnimatedSeparator } from "@/components/ui/animated-separator";
import { Header } from "@/components/ui/header";
import useIsMounted from "@/hooks/useIsMounted";

const line = `I'm a web developer who's not your typical tech geek. 
    Spent some time in the army, worked with a bunch of different clients, 
    and I'm all about creating websites that people actually enjoy using. 
    From making things look good to sorting out the techy bits, 
    I've got it covered.`;

const AboutMe = () => {
    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="relative flex justify-center items-center m-48">
            <div
                className=" 
                    transparent-box
                    flex
                    flex-row
                    gap-28
                    p-32
                    pb-16
                "
            >
                <div className="relative w-1/2 scale-125 translate-y-12">
                    <div
                        className="
                                absolute 
                                bg-black 
                                rounded-3xl
                                blur-xl
                                opacity-50
                                -inset-6
                                top-8
                                -z-10
                            "
                    />
                    <Image
                        src="/Me2.png"
                        alt="Profile Image"
                        width={1920}
                        height={2742}
                    />
                </div>
                <div className="flex w-1/2 flex-col gap-8">
                    <AnimatedSeparator
                        orientation="horizontal"
                        style={{ width: "30%" }}
                        dashClass="bg-neutral-400"
                        spacing={7}
                        dashLength={7}
                        reversed
                    />
                    <Header title="Roy Barzilay" description="WEB MAKER" />
                    <motion.p
                        className="text-sm"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.01,
                                },
                            },
                        }}
                    >
                        {line.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                    <span
                        className="text-6xl"
                        style={{ fontFamily: "Creattion Demo" }}
                    >
                        Roybarzilay
                    </span>
                    <SocialIcons orientation="horizontal" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
