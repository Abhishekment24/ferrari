import React, { useState, useEffect } from "react";
import Logo from "../../assest/ferrari.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
const Header = () => {
  const [showDropNav, setShowDropNav] = useState(false);
  const [navBgColor, setNavBgColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavBgColor("[#0C0D20]"); // set background color when scrolled
      } else {
        setNavBgColor(""); // reset background color when at the top
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleLink() {
    setShowDropNav(false);
  }
  return (
    <div>
      <>
        <div
          className={`bg-[#0C0D20] bg-opacity-[0.15] backdrop-blur-md shadow-[0_1px_0_rgba(137,198,255,0.1)]  fixed top-0 z-[60] h-75px w-full justify-between flex items-center text-white mx-auto p-5 flex justify-between items-center px-4 py-4 ${
            navBgColor && `bg-${navBgColor}`
          }`}
        >
          <Link href="/">
            <Image className="w-[56px] logos" src={Logo} alt="logo" />
          </Link>
          {!showDropNav ? (
            <div
              className="pies menu-icon"
              onClick={() => setShowDropNav(!showDropNav)}
            >
              <RxHamburgerMenu />
            </div>
          ) : (
            <div
              className="pies menu-icon"
              onClick={() => setShowDropNav(!showDropNav)}
            >
              <RxCross2 />
            </div>
          )}

          <div className="list md:flex items-center text-center font-normal text-16px text-white lg:gap-[3rem] gap-[10px]">
            <Link href="/"> Home</Link>
            <Link href="#join">Join</Link>
            <Link href="#contest">Contest</Link>
            <Link href="#roadmap">Roadmap</Link>

            {/* <button className=" items-center Buttons-color rounded px-4 py-2 text-white mt-4 w-full font-medium">
              Connect Wallet
          </button>*/}
          </div>
        </div>

        <div
          className={`
          bg-[#0C0D20] bg-opacity-[0.15] backdrop-blur-md shadow-[0_1px_0_rgba(137,198,255,0.1)]  z-[50] fixed w-full top-0 overflow-y-auto overflow-x-hidden  bottom-0 py-24 
        duration-500 ${showDropNav ? "right-0" : "right-[-100%]"}
        `}
        >
          <div className=" flex items-start px-5  flex-col text-sm font-normal leading-6 text-white">
            <div className="py-4">
              <Link href="/" onClick={handleLink}>
                {" "}
                Home
              </Link>
            </div>

            <div className="">
              <Link href="#join" onClick={handleLink}>
                Join
              </Link>
            </div>
            <div className="py-4">
              <Link href="#contest" onClick={handleLink}>
                Contest
              </Link>
            </div>
            <div className="">
              <Link href="#roadmap" onClick={handleLink}>
                Roadmap
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
