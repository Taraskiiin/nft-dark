import React from "react";
import cn from "classnames";
import { workSansClass } from "./font-class-names";
import "./globals.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={cn(workSansClass)}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    );
}
