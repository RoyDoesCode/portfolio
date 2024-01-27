"use client";

import React from "react";
import { Logo } from "@/components/logo";

export const Navbar = () => {
    return (
        <div className="flex items-center p-16">
            <Logo
                width={60}
                height={60}
                onClick={() => {}}
                className="cursor-pointer"
            />
        </div>
    );
};
