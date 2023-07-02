import "./globals.scss";

import { Work_Sans, Oxanium } from "next/font/google";

export const oxanium = Oxanium({
    weight: ["700", "500", "600"],
    subsets: ["latin"],
});
const workSans = Work_Sans({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={workSans.className}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    );
}
