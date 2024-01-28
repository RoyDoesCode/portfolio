import { MutableRefObject, useEffect, useState } from "react";

const useMouseOn = (
    element: HTMLElement | null | "document",
    options?: {
        onEnter?: () => void;
        onLeave?: () => void;
        onMove?: () => void;
    }
) => {
    const [isMouseOnScreen, setIsMouseOnScreen] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOnScreen(true);
        options?.onEnter?.();
    };

    const handleMouseMove = () => {
        setIsMouseOnScreen(true);
        options?.onMove?.();
    };

    const handleMouseLeave = () => {
        setIsMouseOnScreen(false);
        options?.onLeave?.();
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
