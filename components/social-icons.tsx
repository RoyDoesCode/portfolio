import Link from "next/link";
import React from "react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

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
    return (
        <div
            className={cn(
                "flex text-neutral-400 p-4",
                direction === "vertical" ? "flex-col" : "flex-row",
                className
            )}
        >
            <Link
                href="#"
                className="p-4 text-neutral-400 hover:text-primary transition-colors"
            >
                <FaTiktok size={size} />
            </Link>
            <Link
                href="#"
                className="p-4 text-neutral-400 hover:text-primary transition-colors"
            >
                <FaYoutube size={size} />
            </Link>
            <Link
                href="#"
                className="p-4 text-neutral-400 hover:text-primary transition-colors"
            >
                <TiSocialInstagram size={size} />
            </Link>
        </div>
    );
};
