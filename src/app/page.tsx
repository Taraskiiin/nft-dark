import Image from "next/image";
import Header from "@/components/organism/header";
import HeroSection from "@/components/organism/hero-section";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <HeroSection />
            <section className={styles["partners-section"]}>
                <ul className={styles["partners-list"]}>
                    <li
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Image
                            src="/assets/partners/coinbase-logo.svg"
                            alt="partner-logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </li>
                    <li
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Image
                            src="/assets/partners/blockchain-logo.svg"
                            alt="partner-logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </li>
                    <li
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Image
                            src="/assets/partners/binance-logo.svg"
                            alt="partner-logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </li>
                    <li
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Image
                            src="/assets/partners/bitmax-logo.svg"
                            alt="partner-logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </li>
                </ul>
            </section>
        </main>
    );
}
