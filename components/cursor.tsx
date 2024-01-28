"use client";

import React, { useEffect, useState } from "react";

import useMouseOn from "@/hooks/use-mouse-on";
import { cn } from "@/lib/utils";
import useCursor from "@/hooks/use-cursor";

export const Cursor = () => {
    const { position, setPosition, show, setShow } = useCursor();

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
                "fixed border border-white rounded-full w-14 h-14",
                !show && "hidden"
            )}
            style={{
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
};
