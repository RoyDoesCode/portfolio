"use client";

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
            name: "Projects",
            path: "/projects",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];

    return (
        <div className="flex items-center justify-between p-10">
            <Interactable>
                <Logo
                    width={80}
                    height={80}
                    onClick={() => router.push("/")}
                    className="fill-neutral-400 hover:fill-primary transition-colors p-2"
                />
            </Interactable>
            <nav className="flex items-center gap-12">
                {routes.map((route) => (
                    <Link
                        key={route.path}
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
                ))}
            </nav>
        </div>
    );
};
