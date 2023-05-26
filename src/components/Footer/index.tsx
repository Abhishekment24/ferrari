import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { FaTelegramPlane, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillYoutube, AiOutlineArrowRight } from "react-icons/ai";

import Logo from "../../assest/ferrari.png";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
export default function Footer() {
  return (
    <section>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 min-[992px]:pt-12 max-[991px]:py-8 mx-auto">
          <div className="flex flex-wrap justify-center flex-col max-[991px]:flex-col items-center max-[991px]:text-center max-[991px]:justify-center order-first">
            <div className=" max-[991px]:justify-center max-[991px]:text-center">
              <Image
                className="max-[991px]:mx-auto w-[102px] "
                src={Logo}
                alt="logo"
              />

              {/* <div className="flex max-[991px]:justify-center flex-wrap  gap-5 mb-5 mt-5 max-[991px]:text-left text-white max-[992px]:justify-left">
                  <Link href="/"> Home</Link>
                  <Link href="#product"> Products </Link>
                  <Link href="#team">Team</Link>
                  <Link href="#roadmap"> RoadMap </Link>
                  <Link href="#">Contact Us</Link>
                </div> */}
            </div>
            <div>
              <div className="flex flex-wrap gap-5 mb-5 mt-5 max-[991px]:text-left  max-[992px]:justify-left">
                <div className="footer-links w-full">
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-between w-full">
                    <a className="text-2xl text-[#e9933d]" href="https://t.me/FerrariCoinErc">
                      <FaTelegramPlane />
                    </a>
                    <a
                      className="ml-3 text-2xl text-[#e9933d]"
                      href="https://twitter.com/Ferrari_Coin"
                    >
                      <FaTwitter />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <p className="w-full text-xs text-center  font-normal text-white py-5 copyright-p">
              Copyright © {new Date().getUTCFullYear()} Ferrari Coin, All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
