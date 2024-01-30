"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], adjustFontFallback: true });

const Hero = () => {
    return (
        <header
            className="
                flex 
                flex-col 
                h-[100vh] 
                items-center 
                justify-center 
                overflow-hidden
            "
        >
            <motion.small
                className="
                    text-sm 
                    text-neutral-400 
                    opacity-75
                    -translate-x-28
                    tracking-widest
                "
                animate={{ opacity: [0, 1] }}
                transition={{
                    delay: 0.5,
                    duration: 2,
                }}
            >
                I AM
            </motion.small>
            <motion.h1
                className={cn(
                    `relative 
                    text-[150pt] 
                    font-black 
                    leading-none 
                    select-none 
                    hover:text-white 
                    transition-colors
                    duration-500 
                    before:inset-0
                    before:top-1/3 
                    before:absolute 
                    before:bg-black
                    before:rounded-3xl
                    before:-z-10
                    before:blur-2xl
                    before:opacity-50`,
                    montserrat.className
                )}
                animate={{ opacity: [0, 0.75, 1], scale: [0.75, 1.1, 1] }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                }}
            >
                ROY
            </motion.h1>
            <motion.small
                className="
                    text-sm 
                    text-neutral-400 
                    opacity-75
                    translate-x-28 
                    leading-7 
                    mt-4 
                    tracking-widest
                "
                animate={{ opacity: [0, 1] }}
                transition={{
                    delay: 1,
                    duration: 2,
                }}
            >
                A FREELANCE <br /> WEB DEVELOPER
            </motion.small>
        </header>
    );
};

export default Hero;
