import React, { useState, useEffect } from "react";
import Seller from "../Seller";
import Createnft from "./Createnft";
import Discover from "./Discover";
import Famecollection from "./Famecollect";
import Mass from "./Mass";



const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Discover />
      <Mass />
      <Createnft />
      <Seller />
      <Famecollection />
      
      
    </div>
  );
};

export default Home;
