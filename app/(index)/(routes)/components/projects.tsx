"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

import { Interactable } from "@/components/interactable";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
    subsets: ["latin"],
    adjustFontFallback: false,
});

const Projects = () => {
    const [active, setActive] = useState(1);

    const projects = [
        {
            src: "/Chat App.png",
            title: "Chat App",
            description:
                "My chat app website seamlessly emulates the familiar interface of WhatsApp or Facebook Messenger, offering users the convenience of both email and Google login systems. With real-time functionality at its core, users can engage in fluid conversations, enhancing their digital communication experience.",
            links: [
                {
                    url: "https://roy-messenger.vercel.app",
                    title: "VIEW PROJECT",
                },
            ],
            github: "https://github.com/RoyDoesCode/messenger",
        },
        {
            src: "/Ecommerce Admin.png",
            title: "Ecommerce Admin",
            description:
                "My ecommerce app comprises two distinct projects: an admin app and a store app. The admin app empowers users to create and manage ecommerce stores, customize billboards, add products with variations, set pricing, archive or feature items, and access via multiple login options including Google, GitHub, and email. Meanwhile, the store app dynamically reflects all changes made in the admin interface, ensuring seamless store management. Additionally, the store app boasts a fully functional payment system powered by Stripe, while the admin dashboard provides comprehensive insights into store statistics and order management.",
            links: [
                {
                    url: "https://roy-ecommerce-admin.vercel.app",
                    title: "VIEW ADMIN",
                },
                {
                    url: "https://roy-ecommerce-store.vercel.app",
                    title: "VIEW STORE",
                },
            ],
            github: "https://github.com/RoyDoesCode/ecommerce",
        },
        {
            src: "/3D Shirts.png",
            title: "3D Shirt Customization",
            description:
                "My 3D shirt customization website app revolutionizes the way users personalize their apparel, offering real-time editing capabilities to change colors, add logos, or modify textures on a dynamic 3D shirt model. Seamlessly updating live on screen, users can preview their creations before exporting the customized model to an image for further use or sharing.",
            links: [
                {
                    url: "https://roy-3d-shirts.vercel.app",
                    title: "VIEW PROJECT",
                },
            ],
            github: "https://github.com/RoyDoesCode/3d-shirts",
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center lg:p-32 xl:p-48">
            <div
                className="flex transition-transform gap-4 md:gap-0"
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
                    text-5xl
                    sm:text-6xl
                    lg:text-8xl 
                    text-center
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
            <div className="text-center w-2/3">
                {projects[active].description}
            </div>
            <div className="flex gap-4 mt-20 items-center">
                <Link
                    href={projects[active].github}
                    target="_blank"
                    className="
                        text-neutral-400 
                        hover:text-primary 
                        transition-colors
                    "
                >
                    <Interactable className="p-2" resetOnClick>
                        <BsGithub size={20} />
                    </Interactable>
                </Link>
                {projects[active].links.map((link) => (
                    <Interactable key={link.url}>
                        <Link
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
                        </Link>
                    </Interactable>
                ))}
            </div>
        </div>
    );
};

export default Projects;
