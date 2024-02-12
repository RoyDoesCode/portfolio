"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React, { CSSProperties, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface AnimatedSeparatorProps extends HTMLMotionProps<"div"> {
    orientation: "vertical" | "horizontal";
    thickness?: CSSProperties["width"];
    spacing?: CSSProperties["gap"];
    dashLength?: CSSProperties["width"];
    dashClass?: string;
    animationTime?: number;
    delay?: number;
    reversed?: boolean;
}

export const AnimatedSeparator: React.FC<AnimatedSeparatorProps> = ({
    orientation,
    thickness = 1,
    spacing = 10,
    dashLength = 10,
    dashClass,
    animationTime = 2,
    delay = 0,
    reversed,
    style,
    ...props
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
                    (parseInt(spacing.toString()) +
                        parseInt(dashLength.toString()))
            );

            setDashCount(dashCount);
        }
    }, [dashLength, orientation, spacing]);

    const containerStyle: CSSProperties =
        orientation === "vertical"
            ? {
                  height: "100%",
                  width: thickness,
                  flexDirection: reversed ? "column" : "column-reverse",
              }
            : {
                  width: "100%",
                  height: thickness,
                  flexDirection: reversed ? "row" : "row-reverse",
              };

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
                        delayChildren: delay,
                        staggerChildren: animationTime / dashCount,
                    },
                },
            }}
            style={{
                gap: spacing,
                ...containerStyle,
                ...style,
            }}
            {...props}
        >
            {Array.from({ length: dashCount }, (_, index) => (
                <motion.span
                    className={cn("bg-primary", dashClass)}
                    key={index}
                    style={dashStyle}
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
