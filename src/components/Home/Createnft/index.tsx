import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import sales from "../../../assest/img/giphy.gif";
import cicles from "../../../assest/img/ygyhy.png";
import cicles1 from "../../../assest/duj53nwc1.png";
const Nft = () => {
  return (
    <>
      <section className="" id="scalability-and-performance">
        <div className="container mx-auto min-[992px]:py-12  max-[991px]:py-8 px-5 ">
          <div className="flex scalab flex-col flex items-center justify-between max-[991px]:text-left">
            <div className="scalabilit w-full ">
              <div className="">
                <Image src={cicles1} className="  " alt={""}></Image>
              </div>
            </div>

            <div className="scalabilit w-full texts min-[1024px]:ml-6">
              <h1 className="blockse    text-white text-4xl heads max-[991px]:pt-5">
                Let the number speak for us
              </h1>

              {/*} <div className="relative">
                <div className="absolute top-[-44px] max-[991px]:right-[0] right-[20%] 2xl:right-[20%]">
                  <Image
                    src={cicles1}
                    className="  w-[50px] h-[50px]"
                    alt={""}
                  ></Image>
                </div>
              </div>*/}
              <div className="card-team py-5">
                <div className="cards-box-team p-5">
                  <div className="relative py-5">
                    <h1 className="text-white text-4xl">8</h1>
                  </div>

                  <p className="text-xl font-bold">tax</p>
                </div>
                <div className="cards-box-team p-5">
                  <div className="relative py-5">
                    <h1 className=" text-white text-4xl ">8</h1>
                  </div>

                  <p className="text-xl font-bold">Buy / Sell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nft;
