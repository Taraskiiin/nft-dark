import { Work_Sans, Oxanium } from "next/font/google";

export const oxanium = Oxanium({
    weight: ["700", "500", "600"],
    subsets: ["latin"],
});
const workSans = Work_Sans({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

export const oxaniumClass = oxanium.className;
export const workSansClass = workSans.className
