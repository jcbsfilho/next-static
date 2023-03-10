import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Template Azion</title>
        <meta name="description" content="Next.js Template Azion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image className={styles.logoAzion} src="/azion-logo.png" alt="Azion Logo" width={600} height={125} priority />
        </div>

        <div className={styles.description}>
          <p>
            Azion is a full-stack edge platform that simplifies how you build better applications, faster. Take
            advantage of our 100+ global edge locations, or use Azion to orchestrate your own multi-cloud, on-premise or
            remote-device deployment.
          </p>
        </div>

        <div className={styles.aboutLink}>
          <Link href="/about">About</Link>
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
