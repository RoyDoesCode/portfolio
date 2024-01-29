"use client";

import { motion, useAnimationControls } from "framer-motion";
import React, { useRef, useState } from "react";

import useCursor from "@/hooks/use-cursor";
import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";

interface InteractableProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Interactable: React.FC<InteractableProps> = ({
    children,
    className,
    ...props
}) => {
    const cursor = useCursor();
    const ref = useRef<HTMLDivElement>(null);

    useMouseOn(ref.current, {
        onEnter: () => {
            if (!ref.current) return;

            const relativeParentRect = ref.current.getBoundingClientRect();

            cursor.setCOntrolled(true);

            cursor.controls?.start({
                top: relativeParentRect.top,
                left: relativeParentRect.left,
                width: relativeParentRect.width,
                height: relativeParentRect.width,
                transform: "translate(0%,0%)",
                transition: { duration: 0.1 },
            });
        },
        onLeave: (event) => {
            const { clientY: top, clientX: left } = event;

            cursor.controls
                ?.start({
                    top,
                    left,
                    width: 56,
                    height: 56,
                    transform: "translate(-50%,-50%)",
                    transition: { duration: 0.02 },
                })
                .finally(() => {
                    cursor.setCOntrolled(false);
                });
        },
    });

    return (
        <div ref={ref} className={cn("group relative", className)} {...props}>
            {children}
        </div>
    );
};
