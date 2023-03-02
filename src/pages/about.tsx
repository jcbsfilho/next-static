import Image from "next/image";
import styles from "@/styles/About.module.css";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Template Azion - About</title>
        <meta name="description" content="Next.js Template Azion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image className={styles.logoAzion} src="/azion-logo.png" alt="Azion Logo" width={600} height={125} priority />
        </div>

        <div className={styles.description}>
          Our mission is to power the hyper-connected economy From the beginning, our goal has been to create
          technologies that unlock new possibilities.
        </div>

        <div className={styles.aboutLink}>
          <Link href="https://www.azion.com/en/about-us/" target="_blank">About us</Link>
        </div>

        <div className={styles.center}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
