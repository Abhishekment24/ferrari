import React, { useEffect, useRef, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import cicles2 from "../../assest/iphone3.png";

import contest_2 from "../../assest/bike.png";
import contest_3 from "../../assest/iphone-4.png";
import contest_4 from "../../assest/ferrari-1.png";
import contest_5 from "../../assest/tesla.06d634b7.png";
import contest_6 from "../../assest/ferrari-10.png";
const Seller = () => {
  return (
    <div>
      <section className="" id="contest">
        <div className="container mx-auto min-[992px]:py-12  max-[991px]:py-8 px-5">
          <div className="flex flex-col">
            <div className="">
              <p className="text-white"> Try your chance at winning</p>
              <h1 className="blockse heads  text-white text-4xl py-4">
                Current Contest
              </h1>

              <p className="text-white">
                Participants buy Ferrari coin and lots are Drawn to Determine
                the winners
              </p>
            </div>
          </div>
          <ul className="cards pt-5">
            <li className=" boxes ">
              <div className="text-center ">
                <div>
                  <div className="">
                    <div className="flex justify-center items-center py-5">
                      <Image
                        src={cicles2}
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
                        alt={""}
                      ></Image>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      @ 200K MC
                    </h1>
                  </div>

                  <p className="text-white"> 1 IPhone</p>
                </div>
              </div>
            </li>
            <li className=" boxes">
              <div className="text-center ">
                <div>
                  <div className="">
                    <div className="flex justify-center items-center py-5">
                      <Image
                        src={contest_2}
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
                        alt={""}
                      ></Image>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      @ 1M MC
                    </h1>
                  </div>

                  <p className="text-white"> 1 Harley Bike</p>
                </div>
              </div>
            </li>
            <li className=" boxes">
              <div className="text-center ">
                <div>
                  <div className="">
                    <div className="flex justify-center items-center py-5">
                      <Image
                        src={contest_3}
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
                        alt={""}
                      ></Image>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      @ 500K MC
                    </h1>
                  </div>

                  <p className="text-white"> 3 IPhone</p>
                </div>
              </div>
            </li>
            <li className=" boxes">
              <div className="text-center ">
                <div>
                  <div className="">
                    <div className="flex justify-center items-center py-5">
                      <Image
                        src={contest_4}
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
                        alt={""}
                      ></Image>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      @ 10M MC
                    </h1>
                  </div>

                  <p className="text-white"> 1 Ferrari Car</p>
                </div>
              </div>
            </li>
            <li className=" boxes">
              <div className="text-center ">
                <div>
                  <div className="">
                    <div className="flex justify-center items-center py-5">
                      <Image
                        src={contest_5}
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
                        alt={""}
                      ></Image>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      @ 5M MC
                    </h1>
                  </div>

                  <p className="text-white"> 1 Tesla Car</p>
                </div>
              </div>
            </li>
            <li className=" boxes">
              <div className="text-center ">
                <div>
                  <div className="">
                    <div className="flex justify-center items-center py-5">
                      <Image
                        src={contest_6}
                        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ..."
                        alt={""}
                      ></Image>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h1 className="min-[1024px]:text-[26px]  min-[1280px]:text-[32px] text-white text-2xl ">
                      @ 100M MC
                    </h1>
                  </div>

                  <p className="text-white"> 10 Ferrari Car</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Seller;
