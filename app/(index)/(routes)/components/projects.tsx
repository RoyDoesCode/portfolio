"use client";

import Image from "next/image";
import { useState } from "react";

import { montserrat } from "@/app/(index)/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Interactable } from "@/components/interactable";

const Projects = () => {
    const [active, setActive] = useState(1);

    const projects = [
        {
            src: "/Chat App.png",
            title: "Chat App",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed reprehenderit laudantium nobis accusamus consectetur cum aperiam provident sequi quas eos harum minima non similique expedita, quos maiores quasi eveniet quis!",
            links: [
                {
                    url: "https://roy-messenger.vercel.app",
                    title: "VIEW PROJECT",
                },
            ],
        },
        {
            src: "/Ecommerce Admin.png",
            title: "Ecommerce Admin",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed reprehenderit laudantium nobis accusamus consectetur cum aperiam provident sequi quas eos harum minima non similique expedita, quos maiores quasi eveniet quis!",
            links: [
                {
                    url: "https://roy-ecommerce-store.vercel.app",
                    title: "VIEW STORE",
                },
                {
                    url: "https://roy-ecommerce-admin.vercel.app",
                    title: "VIEW ADMIN",
                },
            ],
        },
        {
            src: "/3D Shirts.png",
            title: "3D Shirt Customization",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed reprehenderit laudantium nobis accusamus consectetur cum aperiam provident sequi quas eos harum minima non similique expedita, quos maiores quasi eveniet quis!",
            links: [
                {
                    url: "https://roy-3d-shirts.vercel.app",
                    title: "VIEW PROJECT",
                },
            ],
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
                            active !== index && "scale-75 blur-[2px]"
                        )}
                    >
                        <div
                            onClick={() => setActive(index)}
                            className={cn(
                                "shadow-2xl hover:shadow-white",
                                active === index && "shadow-white"
                            )}
                        >
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
                                className="w-full h-full object-cover -scale-y-100 project-img"
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
            <div className="text-center w-3/4">
                {projects[active].description}
            </div>
            <div className="flex gap-4">
                {projects[active].links.map((link) => (
                    <Interactable className="mt-20">
                        <a
                            href={link.url}
                            target="_blank"
                            className="
                                text-lg
                                uppercase 
                                tracking-widest 
                                p-4 
                                text-neutral-400 
                                hover:text-primary
                                transition-colors
                            "
                        >
                            {link.title}
                        </a>
                    </Interactable>
                ))}
            </div>
        </div>
    );
};

export default Projects;
