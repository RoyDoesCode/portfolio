"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

import { Interactable } from "@/components/interactable";
import { cn } from "@/lib/utils";

interface SocialIconsProps {
    orientation?: "vertical" | "horizontal";
    size?: string | number;
    className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
    orientation = "vertical",
    size,
    className,
}) => {
    const socialIcons: { href: string; icon: IconType }[] = [
        {
            href: "#1",
            icon: FaTiktok,
        },
        {
            href: "#2",
            icon: FaYoutube,
        },
        {
            href: "#3",
            icon: TiSocialInstagram,
        },
    ];

    return (
        <motion.div
            className={cn(
                "flex text-neutral-400 gap-2 pointer-events-auto",
                orientation === "vertical" ? "flex-col" : "flex-row",
                className
            )}
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        delayChildren: 1,
                        staggerChildren: 0.1,
                    },
                },
            }}
        >
            {socialIcons.map((socialIcon) => (
                <motion.span
                    key={socialIcon.href}
                    variants={{
                        hidden: {
                            translateY: 50,
                            scale: 0.5,
                            opacity: 0,
                        },
                        visible: {
                            translateY: 0,
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.5 },
                        },
                    }}
                >
                    <Link
                        href={socialIcon.href}
                        className="
                            text-neutral-400 
                            hover:text-primary 
                            transition-colors
                        "
                    >
                        <Interactable className="p-2" resetOnClick>
                            <socialIcon.icon size={size} />
                        </Interactable>
                    </Link>
                </motion.span>
            ))}
        </motion.div>
    );
};
