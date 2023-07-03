import React from "react";
import cn from "classnames";
import { oxanium } from "@/app/layout";
import HeroSectionCounterItem from "@/components/atoms/hero-section-counter-item";

import styles from "./hero-section.module.scss";
import HeroBlur from "@/components/atoms/hero-blur";

const mainTitleClass = styles["main-title"];
const oxaniumClass = oxanium.className;
const heroButtonClass = styles["hero-button"];
const exploreButtonClass = styles["explore-button"];
const createButtonClass = styles["create-button"];

const counterList = [
    { count: "32k+", label: "Artworks" },
    { count: "20k+", label: "Auctions" },
    { count: "12k+", label: "Creators" },
];

export default function HeroSection() {
    return (
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
                    <button className={cn(heroButtonClass, exploreButtonClass)}>
                        explore
                    </button>
                    <button className={cn(heroButtonClass, createButtonClass)}>
                        create
                    </button>
                </div>
                <ul className={styles["hero-section-counter"]}>
                    {counterList.map((el) => (
                        <HeroSectionCounterItem
                            key={el.label}
                            count={el.count}
                            label={el.label}
                        />
                    ))}
                </ul>
            </div>
            <HeroBlur />
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
                            <span className={cn(oxaniumClass)}>Ends in</span>
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
    );
}
