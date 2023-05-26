import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import SmartObject from "../../../assest/header.png";
import styles from "./index.module.css";

const Discover = () => {
  return (
    <>
      <section className={`${styles.headerbg}`}>
        <div className="container mx-auto px-5">
          <div className="max-[991px]:py-8 flex min-[992px]:flex-row flex-col items-center justify-between max-[991px]:text-left  min-[992px]:py-12">
            <div className="min-[992px]:w-1/2 w-full">
              <div className="">
                <p className="font-normal text-base text-white py-4">
                  Contest FOR YOUR CHANCE to
                </p>

                <h1 className=" heads min-[1350px]:text-9xl  min-[1199px]:text-8xl disc text-4xl text-white">
                  WIN BIG
                </h1>
                <p className="text-xl font-black text-white py-4">
                  0xFf0A0B38b9ECc6D1EEc7f
                  <br className="pis" />
                  dAC2d192AD30ca67e70
                </p>
                <p className="font-normal text-base text-white">
                  Ferrari Coin Giveaways is a new and very exciting Crytpo
                  competition site, where you can WIN amazing cars and other
                  prizes When we Reach our given milestone where Winners will be
                  chosen Live through our Telegram channel...So why not join us
                  on our journey and get in the mix to WIN wonderful Ferrari
                </p>
              </div>
            </div>
            <div className="min-[992px]:w-1/2 w-full pies py-4">
              <div className="">
                <Image src={SmartObject} className="  " alt={""}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
