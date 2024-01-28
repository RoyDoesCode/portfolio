"use client";

import React, { useEffect, useState } from "react";

import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const isMouseOnScreen = useMouseOn("document", {
        onMove: (event) => {
            const { clientX: x, clientY: y } = event;
            setPosition({ x, y });
        },
    });

    return (
        <span
            className={cn(
                "fixed border border-white rounded-full w-14 h-14",
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
