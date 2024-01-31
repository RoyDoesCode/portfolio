"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedSeparatorProps {
    orientation: "vertical" | "horizontal";
    color?: CSSProperties["backgroundColor"];
    thickness?: CSSProperties["width"];
    gap?: CSSProperties["gap"];
    dashLength?: CSSProperties["width"];
    animationTime?: number;
}

export const AnimatedSeparator: React.FC<AnimatedSeparatorProps> = ({
    orientation,
    color = "white",
    thickness = 1,
    gap = 10,
    dashLength = 10,
    animationTime = 1,
}) => {
    const [dashCount, setDashCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const boundingRect = ref.current.getBoundingClientRect();
            const targetLength =
                orientation === "vertical"
                    ? boundingRect.height
                    : boundingRect.width;

            const dashCount = Math.ceil(
                targetLength /
                    (parseInt(gap.toString()) + parseInt(dashLength.toString()))
            );

            setDashCount(dashCount);
        }
    }, [ref.current]);

    const containerStyle: CSSProperties =
        orientation === "vertical"
            ? { height: "100%", width: thickness, flexDirection: "column" }
            : { width: "100%", height: thickness, flexDirection: "row" };

    const dashStyle: CSSProperties =
        orientation === "vertical"
            ? { height: dashLength }
            : { width: dashLength };

    return (
        <motion.div
            ref={ref}
            className="flex overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: animationTime / dashCount,
                    },
                },
            }}
            style={{
                gap,
                ...containerStyle,
            }}
        >
            {Array.from({ length: dashCount }, (_, index) => (
                <motion.span
                    key={index}
                    style={{ background: color, ...dashStyle }}
                    variants={{
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 1,
                            transition: { duration: 1 },
                        },
                    }}
                />
            ))}
        </motion.div>
    );
};
