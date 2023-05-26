import Head from "next/head";
import { Inter } from "next/font/google";

import Home from "../components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function myapp() {
  return (
    <>
      <Head>
        <title>Ferrari Coin</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Home />
    </>
  );
}
