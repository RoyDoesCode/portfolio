import { Montserrat } from "next/font/google";
import React from "react";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
    subsets: ["latin"],
    adjustFontFallback: false,
});

interface HeaderProps {
    title: string;
    description?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-2">
            <div
                className={cn(
                    "font-black text-primary text-7xl uppercase",
                    montserrat.className
                )}
            >
                {title}
            </div>
            <div
                className={cn(
                    "text-neutral-400 text-2xl tracking-wide opacity-50",
                    montserrat.className
                )}
            >
                {description}
            </div>
        </div>
    );
};
