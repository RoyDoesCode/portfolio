"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

import { Interactable } from "@/components/interactable";
import { Logo } from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useIsMounted from "@/hooks/useIsMounted";
import { scrollTowards } from "@/lib/utils";

export const Navbar = () => {
    const isMounted = useIsMounted();
    const router = useRouter();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const routes = [
        {
            name: "About me",
            id: "about-me",
        },
        {
            name: "Projects",
            id: "projects",
        },
        {
            name: "Contact",
            id: "contact",
        },
    ];

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex items-center justify-between p-10">
            <motion.span
                className="pointer-events-auto"
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
                className="items-center gap-12 pointer-events-auto hidden md:flex"
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
                        key={route.id}
                        variants={{
                            hidden: { translateY: -100 },
                            visible: {
                                translateY: 0,
                                transition: { duration: 1 },
                            },
                        }}
                    >
                        <Interactable>
                            <a
                                onClick={() => scrollTowards(route.id)}
                                className="
                                    uppercase 
                                    tracking-widest 
                                    p-4 
                                    text-neutral-400 
                                    hover:text-primary
                                    transition-colors
                                "
                            >
                                {route.name}
                            </a>
                        </Interactable>
                    </motion.span>
                ))}
            </motion.nav>
            <Sheet
                open={sidebarOpen}
                onOpenChange={(open) => setSidebarOpen(open)}
            >
                <SheetTrigger
                    className="
                        pointer-events-auto 
                        block 
                        md:hidden 
                        text-neutral-400 
                        hover:text-primary 
                        transition-colors
                    "
                >
                    <Interactable className="p-2" resetOnClick>
                        <CgMenuGridO size={30} />
                    </Interactable>
                </SheetTrigger>
                <SheetContent>
                    <nav className="flex flex-col items-center gap-2 pt-8">
                        {routes.map((route) => (
                            <a
                                key={route.id}
                                onClick={() => {
                                    setSidebarOpen(false);
                                    scrollTowards(route.id);
                                }}
                                className="
                                    uppercase 
                                    tracking-widest 
                                    p-4 
                                    text-neutral-400 
                                    hover:text-primary
                                    transition-colors
                                "
                            >
                                {route.name}
                            </a>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};
