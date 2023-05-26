import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import News from "../../../assest/img/multichain.png";
import token from "../../../assest/img/98-testimonial.png";
import cicles1 from "../../../assest/img/Vector-sparkles.png";
import { AiTwotoneStar } from "react-icons/ai";
const Famecollection = () => {
  return (
    <section className="roadmaps" id="roadmap">
      <div className="container mx-auto min-[992px]:py-12  max-[991px]:py-8 px-5">
        <div className="flex flex-col">
          <div className="">
            <h1 className="blockse heads  text-white text-4xl py-4">Roadmap</h1>

            <p className="py-4 ">
              All jokes aside, here is a rough sketch of Ferrari Car ahead. We
              do not want to give everything away on day 1, Expect surprises
              along the way
            </p>
          </div>
        </div>

        <div className="cards-road pt-5">
          <div className="anumber">
            <h2>Phase 1</h2>
            <ul className="ULS">
              <li>Socials Creation</li>
              <li>Stealth Launch</li>
              <li>CMC and CG</li>
              <li>Global Marketing Campaign</li>
              <li>Social Media Ads Campaign</li>
            </ul>
          </div>

          <div className="anumber">
            <h2>Phase 2</h2>
            <ul className="ULS">
              <li>Twitter Campaign Trending</li>

              <li>
                Beta phase in the platform, with staking, yield farming,
                DAOgovernance
              </li>
              <li>Copytrader Statistical Analysis</li>
              <li>Test phase of the Dapp</li>
              <li>Cex Listings </li>
            </ul>
          </div>

          <div className="anumber">
            <h2>Phase 3</h2>
            <ul className="ULS">
              <li>Press Releases and Billboard </li>
              <li>Partnerships with VC</li>
              <li>LunarCrush Listing</li>
              <li>T1 Cex Listing </li>
              <li>Reach 10,000 Holders </li>
            </ul>
          </div>

          <div className="anumber">
            <h2>Phase 4</h2>
            <ul className="ULS">
              <li>Sponsorship and Partnership Worldwide</li>
              <li>Ferrari Car</li>
              <li>p2e Game development </li>
              <li>Paid Marketing and Media Campaign</li>
              <li>All features released</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Famecollection;
