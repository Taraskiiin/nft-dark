import cn from "classnames";
import Header from "@/components/organism/header";
import styles from "./page.module.scss";

import { oxanium } from "./layout";

const mainTitleClass = styles["main-title"];
const oxaniumClass = oxanium.className;

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles["hero-section"]}>
                <div className={styles["left-part"]}>
                    <h1 className={cn(mainTitleClass, oxaniumClass)}>
                        Explore, Buy and
                        <br /> Sell the{" "}
                        <span className={styles["main-title-gold"]}>
                            Best
                            <br /> NFTs!
                        </span>
                    </h1>
                    <div className={styles["buttons-block"]}>
                        <button
                            className={styles["hero-button explore-button"]}
                        >
                            explore
                        </button>
                        <button className={styles["hero-button create-button"]}>
                            create
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
