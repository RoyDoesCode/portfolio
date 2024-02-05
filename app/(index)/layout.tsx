import { Montserrat } from "next/font/google";
import React from "react";

import { Footer } from "@/app/(index)/components/footer";
import { Navbar } from "@/app/(index)/components/navbar";

export const montserrat = Montserrat({
    subsets: ["latin"],
    adjustFontFallback: false,
});

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="fixed top-0 w-full z-50 pointer-events-none">
                <Navbar />
            </div>
            <main className="h-full">{children}</main>
            <div className="fixed bottom-0 w-full z-50 pointer-events-none">
                <Footer />
            </div>
        </>
    );
}
