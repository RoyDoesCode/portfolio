"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import useMouseOn from "@/hooks/use-mouse-on";
import useCursor from "@/hooks/use-cursor";

interface InteractableProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Interactable: React.FC<InteractableProps> = ({
    children,
    className,
    ...props
}) => {
    const { setShow: setShowCursor } = useCursor();

    const ref = useRef<HTMLDivElement>(null);

    const isMouseOn = useMouseOn(ref.current, {
        onEnter: () => setShowCursor(false),
        onLeave: () => setShowCursor(true),
    });

    return (
        <div ref={ref} className={cn("relative", className)} {...props}>
            <span
                className="
                    absolute 
                    top-0
                    left-0
                    w-full
                    h-full 
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
