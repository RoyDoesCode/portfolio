import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

const Hero = () => {
    return (
        <header className="flex flex-col h-full items-center justify-center">
            <small
                className="
                    text-sm 
                    text-neutral-400 
                    opacity-75
                    -translate-x-28 
                    tracking-widest
                "
            >
                I AM
            </small>
            <h1
                className={cn(
                    "text-[150pt] font-black leading-none select-none",
                    montserrat.className
                )}
            >
                ROY
            </h1>
            <small
                className="
                    text-sm 
                    text-neutral-400 
                    opacity-75
                    translate-x-28 
                    leading-7 
                    mt-4 
                    tracking-widest
                "
            >
                A FREELANCE <br /> WEB DEVELOPER
            </small>
        </header>
    );
};

export default Hero;
