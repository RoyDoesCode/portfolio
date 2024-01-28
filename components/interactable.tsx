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
    const controls = useAnimationControls();
    const cursor = useCursor();

    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useMouseOn(ref.current, {
        onEnter: () => {
            if (!ref.current) return;

            const relativeParentRect = ref.current.getBoundingClientRect();

            cursor.setShow(false);
            setShow(true);

            controls.set({
                left: Number(cursor.position.x) - relativeParentRect.left,
                top: Number(cursor.position.y) - relativeParentRect.top,
                width: cursor.radius,
                height: cursor.radius,
                transform: "translate(-50%,-50%)",
            });

            controls.start({
                top: 0,
                left: 0,
                width: relativeParentRect.width,
                height: relativeParentRect.width,
                transform: "translate(0%,0%)",
                transition: { duration: 0.1 },
            });
        },
        onLeave: () => {
            if (!ref.current) return;

            const relativeParentRect = ref.current.getBoundingClientRect();

            controls.set({
                top: 0,
                left: 0,
                width: relativeParentRect.width,
                height: relativeParentRect.width,
                transform: "translate(0%,0%)",
            });

            controls
                .start({
                    left: Number(cursor.position.x) - relativeParentRect.left,
                    top: Number(cursor.position.y) - relativeParentRect.top,
                    width: cursor.radius,
                    height: cursor.radius,
                    transform: "translate(-50%,-50%)",
                    transition: { duration: 0.05 },
                })
                .finally(() => {
                    cursor.setShow(true);
                    setShow(false);
                });
        },
    });

    return (
        <div
            ref={ref}
            className={cn("group relative p-2", className)}
            {...props}
        >
            <motion.span
                className="
                    absolute 
                    rounded-full 
                    border 
                    border-white 
                    pointer-events-none
                "
                style={{
                    width: "100%",
                    height: "100%",
                    display: show ? "block" : "none",
                }}
                animate={controls}
            />
            {children}
        </div>
    );
};
