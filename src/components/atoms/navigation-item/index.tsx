import React from "react";
import Link from "next/link";

import styles from "./navigation-item.module.scss";

export default function NavigationItem({
    label,
    link,
}: {
    label: string;
    link: string;
}) {
    return (
        <Link
            className={styles.link}
            href={link}
        >
            {label}
        </Link>
    );
}
