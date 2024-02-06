"use client";

import { useEffect, useState } from "react";

const useScrollProgress = () => {
    const [scrollProgressPercent, setScrollProgressPercent] = useState(0);
    const [scrollProgressAmount, setScrollProgressAmount] = useState(0);

    const handleScroll = () => {
        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const percent = (window.scrollY / totalHeight) * 100;

        setScrollProgressPercent(percent);
        setScrollProgressAmount(window.scrollY);
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        amount: scrollProgressAmount,
        percent: scrollProgressPercent,
    };
};

export default useScrollProgress;
