import { useEffect, useState } from "react";

const useMouseOn = (
    element: HTMLElement | null | "document",
    options?: {
        onEnter?: (event: MouseEvent) => void;
        onLeave?: (event: MouseEvent) => void;
        onMove?: (event: MouseEvent) => void;
        onClick?: (event: MouseEvent) => void;
    },
    dependenices: any[] = []
) => {
    const [isMouseOnElement, setIsMouseOnElement] = useState(false);

    const handleMouseEnter: EventListener = (event) => {
        setIsMouseOnElement(true);
        options?.onEnter?.(event as MouseEvent);
    };

    const handleMouseMove: EventListener = (event) => {
        setIsMouseOnElement(true);
        options?.onMove?.(event as MouseEvent);
    };

    const handleMouseLeave: EventListener = (event) => {
        setIsMouseOnElement(false);
        options?.onLeave?.(event as MouseEvent);
    };

    const handleMouseClick: EventListener = (event) => {
        options?.onClick?.(event as MouseEvent);
    };

    useEffect(() => {
        const target = element === "document" ? document : element;

        target?.addEventListener("mouseenter", handleMouseEnter);
        target?.addEventListener("mousemove", handleMouseMove);
        target?.addEventListener("mouseleave", handleMouseLeave);
        target?.addEventListener("click", handleMouseClick);

        return () => {
            target?.removeEventListener("mouseenter", handleMouseEnter);
            target?.removeEventListener("mousemove", handleMouseMove);
            target?.removeEventListener("mouseleave", handleMouseLeave);
            target?.removeEventListener("click", handleMouseClick);
        };
    }, [
        element,
        options?.onEnter,
        options?.onLeave,
        options?.onMove,
        options?.onClick,
        ...dependenices,
    ]);

    return isMouseOnElement;
};

export default useMouseOn;
