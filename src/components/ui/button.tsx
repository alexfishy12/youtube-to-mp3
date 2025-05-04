'use client';

import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
    className: string; // custom styling of the button
    link?: string; // optional link, which changes the button component to a Link component
    onClick?: () => void; // optional onClick function
    children?: React.ReactNode;
}

export default function Button({children, className, link, onClick}: ButtonProps) {
    if (link) {
        return (
            <Link href={link} className={clsx("rounded px-4 py-2", className)}>
                {children}
            </Link>
        );
    }
    return (
        <button
            className={clsx("rounded px-4 py-2 cursor-pointer", className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
}