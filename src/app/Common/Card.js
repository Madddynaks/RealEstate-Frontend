
import React from "react";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Narrow from "../Common/Narrow";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 gap-y-0">
      <div data-aos="zoom-in-right">
        <img src="/Images/image1.jpg" className="relative top-[85px] mx-auto" alt="" />
        <div className={`px-10 max-lg:px-5 pt-24 text-[14px] pb-5 shadow-2xl rounded-xl text-center w-8/12 max-lg:w-full mx-auto ${poppins.className} text-[#00357B] font-semibold`}>
          Floating <br /> Pools
        </div>
      </div>
      <div data-aos="zoom-in-right">
        <img src="/Images/image2.jpg" className="relative top-[85px] mx-auto" alt="" />
        <div className={`px-10 max-lg:px-2 pt-24 text-[14px] pb-5 shadow-2xl rounded-xl text-center w-8/12 max-lg:w-full mx-auto ${poppins.className} text-[#00357B] font-semibold`}>
          Spacious Cabins <br /> Like Rooms
        </div>
      </div>
      <div data-aos="zoom-in-left">
        <img src="/Images/image3.jpg" className="relative top-[85px] mx-auto" alt="" />
        <div className={`px-10 max-lg:px-5 pt-24 text-[14px] pb-5 shadow-2xl rounded-xl text-center w-8/12 max-lg:w-full mx-auto ${poppins.className} text-[#00357B] font-semibold`}>
          Sea Facing <br /> Swimming Pools
        </div>
      </div>
      <div data-aos="zoom-in-left">
        <img src="/Images/image4.jpg" className="relative top-[85px] mx-auto" alt="" />
        <div className={`px-10 max-lg:px-5 pt-24 text-[14px] pb-5 shadow-2xl rounded-xl text-center w-8/12 max-lg:w-full mx-auto ${poppins.className} text-[#00357B] font-semibold`}>
          Gymnasium <br /> & Fitness
        </div>
      </div>
    </div>
  );
};

export default Card;
