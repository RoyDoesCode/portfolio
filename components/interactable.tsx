"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import useMouseOn from "@/hooks/use-mouse-on";

interface InteractableProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Interactable: React.FC<InteractableProps> = ({
    children,
    className,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const isMouseOn = useMouseOn(ref.current, {
        onEnter: () => {},
        onLeave: () => {},
    });

    return (
        <div ref={ref} className={cn("relative", className)} {...props}>
            <span
                className="
                    absolute 
                    inset-0 
                    rounded-full 
                    border 
                    border-white 
                    pointer-events-none
                "
            />
            {children}
        </div>
    );
};
