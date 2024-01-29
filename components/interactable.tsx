"use client";

import React, { useRef } from "react";

import useCursor from "@/hooks/use-cursor";
import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";
import { AnimationDefinition } from "framer-motion";

interface InteractableProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: "circle" | "fade";
    margin?: number;
    children: React.ReactNode;
}

export const Interactable: React.FC<InteractableProps> = ({
    type = "circle",
    margin = 0,
    children,
    className,
    ...props
}) => {
    const cursor = useCursor();
    const ref = useRef<HTMLDivElement>(null);

    const animationDefinition = (rect: DOMRect): AnimationDefinition => {
        switch (type) {
            case "circle":
                return {
                    top: rect.top - margin / 2,
                    left: rect.left - margin / 2,
                    width: rect.width + margin,
                    height: rect.width + margin,
                    transform: "translate(0%,0%)",
                    transition: { duration: 0.1 },
                };
            case "fade":
                return {
                    top: rect.top - margin / 2,
                    left: rect.left - margin / 2,
                    width: rect.width + margin,
                    height: rect.width + margin,
                    transform: "translate(0%,0%)",
                    opacity: 0,
                    transition: { duration: 0.1 },
                };
            default:
                return {};
        }
    };

    useMouseOn(ref.current, {
        onEnter: () => {
            if (!ref.current) return;

            const relativeParentRect = ref.current.getBoundingClientRect();

            cursor.setCOntrolled(true);

            cursor.controls?.start(animationDefinition(relativeParentRect));
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
                    opacity: 1,
                    transition: { duration: 0.02 },
                })
                .finally(() => cursor.setCOntrolled(false));
        },
    });

    return (
        <div ref={ref} className={cn("group relative", className)} {...props}>
            {children}
        </div>
    );
};
