import React from "react";
import cn from "classnames";
import { oxaniumClass } from "@/app/font-class-names";

import styles from "./hero-section-counter-item.module.scss";

export default function HeroSectionCounterItem({
    count,
    label,
}: {
    count: string;
    label: string;
}) {
    return (
        <li className={styles["hero-section-counter-item"]}>
            <h3 className={cn(oxaniumClass)}>{count}</h3>
            <span className={styles["counter-label"]}>{label}</span>
        </li>
    );
}
