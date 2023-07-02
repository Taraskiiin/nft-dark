import cn from "classnames";
import Header from "@/components/organism/header";
import styles from "./page.module.scss";

import { oxanium } from "./layout";

const mainTitleClass = styles["main-title"];
const oxaniumClass = oxanium.className;
const heroButtonClass = styles["hero-button"];
const exploreButtonClass = styles["explore-button"];
const createButtonClass = styles["create-button"];

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
                            className={cn(heroButtonClass, exploreButtonClass)}
                        >
                            explore
                        </button>
                        <button
                            className={cn(heroButtonClass, createButtonClass)}
                        >
                            create
                        </button>
                    </div>
                    <ul className={styles["hero-section-counter"]}>
                        <li className={styles["hero-section-counter-item"]}>
                            <h3 className={cn(oxaniumClass)}>32k+</h3>
                            <span className={styles["counter-label"]}>
                                Artworks
                            </span>
                        </li>
                        <li className={styles["hero-section-counter-item"]}>
                            <h3 className={cn(oxaniumClass)}>20k+</h3>
                            <span className={styles["counter-label"]}>
                                Auctions
                            </span>
                        </li>
                        <li className={styles["hero-section-counter-item"]}>
                            <h3 className={cn(oxaniumClass)}>12k+</h3>
                            <span className={styles["counter-label"]}>
                                Creators
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={styles["right-blur"]} />
                <div className={styles["right-part"]}>
                    <div className={styles["card-body"]}>
                        <ul className={styles["price-block"]}>
                            <li className={styles["price-block-item"]}>
                                <span className={cn(oxaniumClass)}>
                                    Current bid
                                </span>
                                <h3 className={cn(oxaniumClass)}>0.99 ETH</h3>
                            </li>
                            <li className={styles["price-block-item"]}>
                                <span className={cn(oxaniumClass)}>
                                    Ends in
                                </span>
                                <h3 className={cn(oxaniumClass)}>25 hrs</h3>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-footer"]}>
                        <div className={styles["user-info"]}>
                            <h3 className={cn(oxaniumClass)}>Artist</h3>
                            <p>@wzard</p>
                        </div>
                        <button className={styles["start-bid-btn"]}>
                            start bid
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
