"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { HTMLAttributes, useRef } from "react";

import { montserrat } from "@/app/(index)/layout";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    title: string;
    parallaxDistance: number;
}

export const Section: React.FC<SectionProps> = ({
    children,
    title,
    parallaxDistance,
    ...props
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [parallaxDistance, -parallaxDistance]
    );

    return (
        <section className="relative" {...props}>
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
                    {/* {title} */}
                </motion.h2>
            </div>
            <div ref={ref} className="z-10">
                {children}
            </div>
        </section>
    );
};
