"use client";

import { AnimationDefinition } from "framer-motion";
import React, { useRef } from "react";

import useCursor from "@/hooks/use-cursor";
import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";

interface InteractableProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: "circle" | "fade" | "underline";
    marginX?: number;
    marginY?: number;
    children: React.ReactNode;
}

export const Interactable: React.FC<InteractableProps> = ({
    type = "circle",
    marginX = 0,
    marginY = 0,
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
                    top:
                        rect.top - marginY / 2 - (rect.width - rect.height) / 2,
                    left: rect.left - marginX / 2,
                    width: rect.width + marginX,
                    height: rect.width + marginY,
                    translateX: "0%",
                    translateY: "0%",
                    transition: { duration: 0.1 },
                };
            case "fade":
                return {
                    top:
                        rect.top - marginY / 2 - (rect.width - rect.height) / 2,
                    left: rect.left - marginX / 2,
                    width: rect.width + marginX,
                    height: rect.width + marginY,
                    translateX: "0%",
                    translateY: "0%",
                    opacity: 0,
                    transition: { duration: 0.1 },
                };
            case "underline":
                return {
                    top: rect.bottom + marginY / 2,
                    left: rect.left - marginX / 2,
                    width: rect.width + marginX,
                    height: 0,
                    translateX: "0%",
                    translateY: "0%",
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

            cursor.controls?.start(animationDefinition(relativeParentRect));
            cursor.setControlled(true);

            if (type === "circle") cursor.onAnimation();
        },
        onLeave: (event) => {
            const { clientY: top, clientX: left } = event;

            cursor.controls?.set({
                top,
                left,
                width: 56,
                height: 56,
                translateX: "-50%",
                translateY: "-50%",
                opacity: 1,
            });
            cursor.setControlled(false);
        },
    });

    return (
        <div ref={ref} className={cn("group relative", className)} {...props}>
            {children}
        </div>
    );
};
