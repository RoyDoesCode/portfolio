"use client";

import React, { useEffect, useState } from "react";

import useMouseOnScreen from "@/hooks/use-mouse-on-screen";
import { cn } from "@/lib/utils";

export const Cursor = () => {
    const isMouseOnScreen = useMouseOnScreen();

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = (event: MouseEvent) => {
        const { clientX: x, clientY: y } = event;
        setPosition({ x, y });
    };

    useEffect(() => {
        document.addEventListener("mousemove", updatePosition);

        return () => {
            document.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return (
        <span
            className={cn(
                "fixed border border-primary rounded-full w-12 h-12",
                !isMouseOnScreen && "hidden"
            )}
            style={{
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
};
