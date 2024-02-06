import React from "react";

import { montserrat } from "@/app/(index)/layout";
import { cn } from "@/lib/utils";

interface HeaderProps {
    title: string;
    description?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-2">
            <div
                className={cn(
                    "font-black text-primary text-5xl uppercase",
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
