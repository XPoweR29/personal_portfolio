"use client"

import { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
}

export const MainContent = ({className, children}: Props) => {
    return (
        <main className={className}>
            {children}
        </main>
    );
}
