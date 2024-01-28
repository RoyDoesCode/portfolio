"use client";

import useCursor from "@/hooks/use-cursor";
import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";

export const Cursor = () => {
    const { position, setPosition, show, setShow, radius } = useCursor(
        (state) => state
    );

    useMouseOn("document", {
        onEnter: () => setShow(true),
        onMove: (event) => {
            const { clientX: x, clientY: y } = event;
            setPosition({ x, y });
        },
        onLeave: () => setShow(false),
    });

    return (
        <span
            className={cn(
                "fixed border border-white rounded-full",
                !show && "hidden"
            )}
            style={{
                top: position.y,
                left: position.x,
                width: radius,
                height: radius,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
};
