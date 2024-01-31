"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import { montserrat } from "@/app/(index)/layout";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    title: string;
}

export const Section: React.FC<SectionProps> = ({ children, title }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [300, -300]);

    return (
        <section className="relative">
            <div
                className="
                    absolute 
                    top-1/4
                    left-1/2
                    text-[15vw]
                    font-black
                    -translate-x-1/2
                    -translate-y-1/2
                    pointer-events-none
                "
            >
                <motion.h2
                    className={cn("section-title", montserrat.className)}
                    style={{ y }}
                    animate={{
                        opacity: [0, 0.25],
                    }}
                    transition={{
                        duration: 3,
                    }}
                >
                    {title}
                </motion.h2>
            </div>
            <div ref={ref}>{children}</div>
        </section>
    );
};
