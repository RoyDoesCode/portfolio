import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function scrollTowards(id: string) {
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
}
