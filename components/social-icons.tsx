import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

import { Interactable } from "@/components/interactable";
import { cn } from "@/lib/utils";

interface SocialIconsProps {
    direction?: "vertical" | "horizontal";
    size?: string | number;
    className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
    direction = "vertical",
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
        <div
            className={cn(
                "flex text-neutral-400 p-4",
                direction === "vertical" ? "flex-col" : "flex-row",
                className
            )}
        >
            {socialIcons.map((socialIcon) => (
                <Interactable key={socialIcon.href} className="m-2 p-2">
                    <Link
                        href={socialIcon.href}
                        className="text-neutral-400 hover:text-primary transition-colors"
                    >
                        <socialIcon.icon size={size} />
                    </Link>
                </Interactable>
            ))}
        </div>
    );
};
