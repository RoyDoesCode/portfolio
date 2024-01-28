import { MouseEventHandler, useEffect, useState } from "react";

const useMouseOn = (
    element: HTMLElement | null | "document",
    options?: {
        onEnter?: (event: MouseEvent) => void;
        onLeave?: (event: MouseEvent) => void;
        onMove?: (event: MouseEvent) => void;
    }
) => {
    const [isMouseOnScreen, setIsMouseOnScreen] = useState(false);

    const handleMouseEnter: EventListener = (event) => {
        setIsMouseOnScreen(true);
        options?.onEnter?.(event as MouseEvent);
    };

    const handleMouseMove: EventListener = (event) => {
        setIsMouseOnScreen(true);
        options?.onMove?.(event as MouseEvent);
    };

    const handleMouseLeave: EventListener = (event) => {
        setIsMouseOnScreen(false);
        options?.onLeave?.(event as MouseEvent);
    };

    useEffect(() => {
        const target = element === "document" ? document : element;

        target?.addEventListener("mouseenter", handleMouseEnter);
        target?.addEventListener("mousemove", handleMouseMove);
        target?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            target?.removeEventListener("mouseenter", handleMouseEnter);
            target?.removeEventListener("mousemove", handleMouseMove);
            target?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [element]);

    return isMouseOnScreen;
};

export default useMouseOn;
