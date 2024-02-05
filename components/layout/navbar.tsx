"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Interactable } from "@/components/interactable";
import { Logo } from "@/components/logo";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
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
            <Sheet>
                <SheetTrigger className="pointer-events-auto block md:hidden">
                    Open
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};
