'use client'
import React,{useEffect} from 'react'
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Narrow from "../Common/Narrow";
import AOS from 'aos';
import 'aos/dist/aos.css';

const oswald = Oswald({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Properties() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-blue-50 pt-10 pb-10 max-lg:px-3">
        <Narrow>
      <div className="grid grid-cols-4 max-lg:grid-cols-2">
        <div data-aos="fade-up" className="hover:bg-[#00357B] max-lg:hidden group py-5 rounded-xl hover:shadow-xl transition-all duration-500 ease-in-out">
            <img src="/Images/icon1.svg" className="mx-auto group-hover:bg-white" alt="" />
            <div className={`text-center text-[16px] ${poppins.className} text-[#00357B] mt-1 group-hover:text-white`}>BOOK WITH</div>
            <div className={`text-center font-semibold text-[30px] text-[#00357B] ${oswald.className} group-hover:text-white`}>ONLY 20%</div>
            <hr className="w-3/12 border-4 rounded-full border-gray-300 mx-auto mt-1"/>
        </div>
        <div data-aos="fade-up" className="hover:bg-[#00357B] group py-5 rounded-xl hover:shadow-xl transition-all duration-500 ease-in-out">
            <img src="/Images/icon2.svg" className="mx-auto group-hover:bg-white" alt="" />
            <div className={`text-center text-[16px] ${poppins.className} text-[#00357B] mt-1 group-hover:text-white`}>PAYMENT PLAN</div>
            <div className={`text-center font-semibold text-[30px] text-[#00357B] ${oswald.className} group-hover:text-white`}>EASY 70/30</div>
            <hr className="w-3/12 max-lg:w-5/12 border-4 rounded-full border-gray-300 mx-auto mt-1"/>
        </div>
        <div data-aos="fade-up" className="hover:bg-[#00357B] group py-5 rounded-xl hover:shadow-xl transition-all duration-500 ease-in-out">
            <img src="/Images/icon3.svg" className="mx-auto group-hover:bg-white" alt="" />
            <div className={`text-center text-[16px] ${poppins.className} text-[#00357B] mt-1 group-hover:text-white`}>HANDOVER ON</div>
            <div className={`text-center font-semibold text-[30px] text-[#00357B] ${oswald.className} group-hover:text-white`}>Q2 2027</div>
            <hr className="w-3/12 max-lg:w-5/12 border-4 rounded-full border-gray-300 mx-auto mt-1"/>
        </div>
        <div data-aos="fade-up" className="hover:bg-[#00357B] max-lg:hidden group py-5 rounded-xl hover:shadow-xl transition-all duration-500 ease-in-out">
            <img src="/Images/icon4.svg" className="mx-auto group-hover:bg-white" alt="" />
            <div className={`text-center text-[16px] ${poppins.className} text-[#00357B] mt-1 group-hover:text-white`}>AREA STARTS FROM</div>
            <div className={`text-center font-semibold text-[30px] text-[#00357B] ${oswald.className} group-hover:text-white`}>700 SQMT</div>
            <hr className="w-3/12 border-4 rounded-full border-gray-300 mx-auto mt-1"/>
        </div>
      </div>
    </Narrow>
    </div>
  )
}
