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
                });
            }
        },
        onLeave: () => cursor.setShow(false),
    });

    useEffect(() => {
        cursor.setControls(controls);

        cursor.setOnAnimation(async () => {
            await borderControls.start({
                borderTop: "4px solid white",
                borderRight: "2px solid white",
                borderBottom: "0px solid white",
                borderLeft: "2px solid white",
                rotate: "1turn",
                transition: {
                    duration: 0.25,
                    ease: "easeIn",
                },
            });
            await borderControls.start({
                borderTop: "1px solid white",
                borderRight: "1px solid white",
                borderBottom: "1px solid white",
                borderLeft: "1px solid white",
                rotate: "2turn",
                transition: {
                    duration: 0.25,
                    ease: "easeOut",
                },
            });
            borderControls.set({ rotate: "0turn" });
        });

        controls.set({
            left: -150,
            top: -150,
            width: 56,
            height: 56,
            transform: "translate(-50%,-50%)",
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
                "fixed rounded-full z-50 pointer-events-none",
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
