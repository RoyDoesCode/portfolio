import React from "react";

import { Navbar } from "@/components/navbar";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="fixed top-0 w-full">
                <Navbar />
            </div>
            <main className="p-48 h-full">{children}</main>
            <div className="fixed bottom-0">Footer</div>
        </>
    );
}
