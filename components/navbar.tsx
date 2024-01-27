"use client";

import { usePathname, useRouter } from "next/navigation";

import { Logo } from "@/components/logo";
import Link from "next/link";
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
        <div className="flex items-center justify-between p-16">
            <Logo
                width={60}
                height={60}
                onClick={() => router.push("/")}
                className="cursor-pointer"
            />
            <nav className="flex items-center gap-12">
                {routes.map((route) => (
                    <Link
                        key={route.path}
                        href={route.path}
                        className={cn(
                            `uppercase 
                            p-4 
                            tracking-widest 
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
