"use client";

import { motion } from "framer-motion";

import { SocialIcons } from "@/components/social-icons";

export const Footer = () => {
    return (
        <div className="flex items-center justify-between p-16">
            <SocialIcons orientation="vertical" size={20} className="p-4" />
            <motion.div
                className="
                    group
                    flex 
                    items-center 
                    justify-end
                    w-48
                    gap-4 
                    rotate-90
                    p-4
                    pointer-events-auto
                "
                animate={{
                    opacity: [0, 1],
                    transition: {
                        duration: 1,
                        delay: 0.5,
                    },
                }}
            >
                <span
                    className="
                        tracking-widest 
                        text-neutral-400 
                        group-hover:text-primary
                    "
                >
                    SCROLL
                </span>
                <hr
                    className="
                        w-20 
                        border-neutral-400 
                        transition-all
                        duration-300
                        group-hover:w-6 
                        group-hover:border-primary 
                    "
                />
            </motion.div>
        </div>
    );
};
