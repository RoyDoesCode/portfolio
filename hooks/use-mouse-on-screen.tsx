import { useEffect, useState } from "react";

const useMouseOnScreen = () => {
    const [isMouseOnScreen, setIsMouseOnScreen] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOnScreen(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOnScreen(false);
    };

    useEffect(() => {
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mousemove", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mousemove", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return isMouseOnScreen;
};

export default useMouseOnScreen;
