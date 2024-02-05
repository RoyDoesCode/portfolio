"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

import useCursor from "@/hooks/use-cursor";
import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";

export const Cursor = () => {
    const controls = useAnimationControls();
    const borderControls = useAnimationControls();
    const cursor = useCursor();

    useMouseOn("document", {
        onEnter: () => cursor.setShow(true),
        onMove: (event) => {
            if (!cursor.controlled) {
                const { clientY: top, clientX: left } = event;
                controls.set({
                    top,
                    left,
                    width: 56,
                    height: 56,
                    translateX: "-50%",
                    translateY: "-50%",
                });
            }
        },
        onLeave: () => cursor.setShow(false),
    });

    useEffect(() => {
        cursor.setControls(controls);

        cursor.setOnAnimation(() => {
            borderControls.start({
                borderTop: [
                    "1px solid white",
                    "4px solid white",
                    "1px solid white",
                ],
                borderRight: [
                    "1px solid white",
                    "2px solid white",
                    "1px solid white",
                ],
                borderBottom: [
                    "1px solid white",
                    "0px solid white",
                    "1px solid white",
                ],
                borderLeft: [
                    "1px solid white",
                    "2px solid white",
                    "1px solid white",
                ],
                rotate: ["0turn", "1turn", "2turn"],
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                },
            });
        });

        controls.set({
            left: -150,
            top: -150,
            width: 56,
            height: 56,
            translateX: "-50%",
            translateY: "-50%",
        });

        borderControls.set({
            borderTop: "1px solid white",
            borderRight: "1px solid white",
            borderBottom: "1px solid white",
            borderLeft: "1px solid white",
            rotate: "0turn",
        });
    }, []);

    return (
        <motion.span
            className={cn(
                "fixed rounded-full z-[100] pointer-events-none",
                !cursor.show && "hidden"
            )}
            animate={controls}
        >
            <motion.div
                className="w-full h-full rounded-full"
                animate={borderControls}
            />
        </motion.span>
    );
};
