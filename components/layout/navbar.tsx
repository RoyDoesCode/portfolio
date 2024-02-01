"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Interactable } from "@/components/interactable";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const routes = [
        {
            name: "About me",
            path: "/#about-me",
        },
        {
            name: "Projects",
            path: "/#projects",
        },
        {
            name: "Contact",
            path: "/#contact",
        },
    ];

    return (
        <div className="flex items-center justify-between p-10">
            <motion.span
                animate={{
                    opacity: [0, 1],
                    transition: {
                        duration: 1,
                        delay: 0.5,
                    },
                }}
            >
                <Interactable marginX={40} marginY={40}>
                    <Logo
                        width={60}
                        height={60}
                        onClick={() => router.push("/")}
                        className="
                            fill-neutral-400 
                            hover:fill-primary 
                            transition-colors
                        "
                    />
                </Interactable>
            </motion.span>
            <motion.nav
                className="flex items-center gap-12"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            delayChildren: 1,
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {routes.map((route) => (
                    <motion.span
                        key={route.path}
                        variants={{
                            hidden: { translateY: -100 },
                            visible: {
                                translateY: 0,
                                transition: { duration: 1 },
                            },
                        }}
                    >
                        <Interactable>
                            <Link
                                href={route.path}
                                className={cn(
                                    `uppercase 
                                    tracking-widest 
                                    p-4 
                                    text-neutral-400 
                                    hover:text-primary
                                    transition-colors`,
                                    route.path === pathname
                                        ? "text-primary"
                                        : "text-neutral-400"
                                )}
                            >
                                {route.name}
                            </Link>
                        </Interactable>
                    </motion.span>
                ))}
            </motion.nav>
        </div>
    );
};
