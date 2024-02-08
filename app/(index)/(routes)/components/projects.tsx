"use client";

import Image from "next/image";
import { useState } from "react";

import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";
import { montserrat } from "@/app/(index)/layout";

const Projects = () => {
    const [active, setActive] = useState(1);

    const projects = [
        {
            src: "/Chat App.png",
            title: "Chat App",
        },
        {
            src: "/Ecommerce Admin.png",
            title: "Ecommerce Admin",
        },
        {
            src: "/3D Shirts.png",
            title: "3D Shirt Customization",
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center p-48">
            <div
                className="flex transition-transform"
                style={{
                    transform: `translateX(${-33.33 * (active - 1)}%)`,
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex flex-col transition-all -mx-4",
                            active !== index && "scale-75 blur-sm"
                        )}
                    >
                        <div onClick={() => setActive(index)}>
                            <Image
                                src={project.src}
                                alt="Project Image"
                                width="1000"
                                height="1000"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div
                            className={cn(
                                "absolute top-full h-full transition-opacity",
                                active === index && "opacity-0"
                            )}
                        >
                            <Image
                                src={project.src}
                                alt="Project Image"
                                width="1000"
                                height="1000"
                                className="w-full h-full object-cover rotate-180 project-img"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={cn(
                    `relative 
                    font-black 
                    text-primary 
                    text-8xl 
                    uppercase 
                    -translate-y-1/2 
                    before:inset-0 
                    before:top-6
                    before:bg-black 
                    before:absolute
                    before:-z-10
                    before:rounded-full
                    before:blur-xl
                    before:opacity-50`,
                    montserrat.className
                )}
            >
                {projects[active].title}
            </div>
        </div>
    );
};

export default Projects;
