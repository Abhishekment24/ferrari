import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SmartObject from "../../../assest/img/Rectangle_1_copy copy.png";
import styles from "./index.module.css";
import cicles1 from "../../../assest/1.b721a773.png";
import cicles3 from "../../../assest/2.a5af4f0d.png";
import cicles2 from "../../../assest/3.1a14f4e6.png";
import Link from "next/link";

const Mass = () => {
  return (
    <div>
      <section className="" id="join">
        <div className="container mx-auto min-[992px]:py-12  max-[991px]:py-8 px-5">
          <div className="flex flex-col">
            <div className="">
              <p> Need to know about</p>
              <h1 className="blockse heads  text-white text-4xl py-4">
                How To Play
              </h1>

              <p className=" ">Follow these 3 easy steps!</p>
            </div>
          </div>
          <ul className="cards py-5">
            <li className=" cards-box">
              <div className="text-center ">
                <div>
                  <div className="play-card__icon">
                    <div className="flex justify-center items-center py-5">
                      <Image src={cicles2} className="" alt={""}></Image>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      Create a Wallet
                    </h1>
                  </div>

                  <p className="">
                    download metamask or your wallet of choice from the app
                    store or google play store for free. Desktop users, download
                    the google chrome extension by going to metamask.io.
                  </p>
                </div>
              </div>
            </li>
            <li className=" cards-box">
              <div className=" text-center">
                <div>
                  <div className="play-card__icon">
                    <div className="flex justify-center items-center py-5">
                      <Image src={cicles3} className="" alt={""}></Image>
                    </div>
                  </div>
                  <div className="relative py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      Get Some ETH
                    </h1>
                  </div>

                  <p className="">
                    have ETH in your wallet to switch to Ferrari Coin. If you do
                    not have any ETH, you can buy directly on metamask, transfer
                    from another wallet, or buy on another exchange and send it
                    to your wallet.
                  </p>
                </div>
              </div>
            </li>
            <li className=" cards-box">
              <div className=" text-center">
                <div>
                  <div className="play-card__icon ">
                    <div className="flex justify-center items-center py-5">
                      <Image src={cicles1} className="" alt={""}></Image>
                    </div>
                  </div>
                  <div className="">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl pt-5">
                      Go to Uniswap
                    </h1>
                  </div>

                  <p className="pt-5">
                    Go to app.uniswap.org in google chrome or on the browser
                    inside your Metamask app. Connect your wallet. Paste the
                    Ferrari Coin token address into pancakeswap, select Pepe,
                    and confirm.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Mass;
