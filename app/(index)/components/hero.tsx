import React from "react";

const Hero = () => {
    return (
        <header className="flex flex-col h-full items-center justify-center">
            <small
                className="
                    text-sm 
                    text-neutral-400 
                    -translate-x-28 
                    tracking-widest
                "
            >
                I AM
            </small>
            <h1 className="text-[150pt] font-black leading-none">ROY</h1>
            <small
                className="
                    text-sm 
                    text-neutral-400 
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
