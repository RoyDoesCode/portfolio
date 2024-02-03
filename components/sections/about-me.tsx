"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";

import { SocialIcons } from "@/components/social-icons";
import { AnimatedSeparator } from "@/components/ui/animated-separator";
import { Header } from "@/components/ui/header";
import useIsMounted from "@/hooks/useIsMounted";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CreattionDemo = localFont({
    src: "../../fonts/Creattion Demo.otf",
});

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
        <div className="flex justify-center items-center">
            <div
                className=" 
                    transparent-box
                    w-[65vw] 
                    flex
                    flex-row
                    gap-20
                    p-32
                    pb-16
                "
            >
                <div className="relative flex-1">
                    <div className="absolute -top-10">
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
                </div>
                <div className="flex flex-1 flex-col gap-8">
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
                    <span className={cn("text-6xl", CreattionDemo.className)}>
                        Roybarzilay
                    </span>
                    <SocialIcons orientation="horizontal" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
