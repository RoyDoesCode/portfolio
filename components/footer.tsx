import React from "react";
import { SocialIcons } from "@/components/social-icons";

export const Footer = () => {
    return (
        <div className="flex items-center justify-between p-16">
            <SocialIcons direction="vertical" size={20} />
            <div
                className="
                    group
                    flex 
                    items-center 
                    justify-end
                    w-48
                    gap-4 
                    rotate-90
                    p-4
                "
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
            </div>
        </div>
    );
};
