import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navigation from "@/components/moleculs/navigation";

import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src="/nft-logo.svg"
                    alt="nft-logo"
                    width={66}
                    height={66}
                />
            </Link>
            <Navigation />
            <button className={styles["connect-wallet-button"]}>
                connect wallet
            </button>
            <button className={styles["burger-button"]}>
                <Image
                    src="/burger.svg"
                    alt="burger-icon"
                    width={32}
                    height={32}
                />
            </button>
        </header>
    );
}
