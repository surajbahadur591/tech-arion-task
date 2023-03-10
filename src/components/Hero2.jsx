import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/food logo.png";
import brand from "../assets/logo.png";
const Hero2 = () => {
  return (
    <div className="h-[709px] grid grid-cols-2 py-[100px]  text-[#737373] bg-white">
      <div className="max-w-[600px] my-auto mx-auto">
        <h1 className="font-gabriela  text-3xl font-light ">
          Experience culinary excellence at our restaurant. Book your table
          today and get ready to indulge in a delightful dining experience!!
        </h1>
      </div>

      <div className="mx-auto	">
        <motion.img animate= {{rotate:360 }} transition={{ repeat: Infinity, duration: 5, ease : "linear" }} className="scale-120" src={brand} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Hero2;
