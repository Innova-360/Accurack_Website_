import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() = Merge Tailwind + conditional classes easily
 * Example: cn("px-2", isActive && "bg-blue-500")
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
