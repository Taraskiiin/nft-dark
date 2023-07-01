import React from "react";
import NavigationItem from "@/components/atoms/navigation-item";

import styles from "./navigation.module.scss";

const linksArr = [
    {
        label: "Explore",
        link: "#",
    },
    { label: "Creators", link: "#" },
    { label: "Community", link: "#" },
];

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            {linksArr.map((el) => (
                <NavigationItem
                    key={el.label}
                    label={el.label}
                    link={el.link}
                />
            ))}
        </nav>
    );
}
