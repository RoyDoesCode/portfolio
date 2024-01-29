"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

import useCursor from "@/hooks/use-cursor";
import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";

export const Cursor = () => {
    const controls = useAnimationControls();
    const cursor = useCursor();

    useMouseOn("document", {
        onEnter: () => cursor.setShow(true),
        onMove: (event) => {
            if (!cursor.controlled) {
                const { clientY: top, clientX: left } = event;
                controls.set({
                    top,
                    left,
                });
            }
        },
        onLeave: () => cursor.setShow(false),
    });

    useEffect(() => {
        cursor.setControls(controls);

        controls.set({
            left: -100,
            top: -100,
            width: 56,
            height: 56,
            transform: "translate(-50%,-50%)",
        });
    }, []);

    return (
        <motion.span
            className={cn(
                "fixed border border-white rounded-full",
                !cursor.show && "hidden"
            )}
            animate={controls}
        />
    );
};
