'use client'
import React from "react";
import { useEffect } from "react";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Narrow from "../Common/Narrow";
import Card from "../Common/Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const oswald = Oswald({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <Narrow>
      <div className="mt-16 max-lg:mt-5 max-lg:px-3">
        <img data-aos="zoom-in" src="/Images/harbour.png" className="mx-auto" alt="" />
        <div
        data-aos="fade-left"
          className={`text-[36px] ${oswald.className} text-[#00357B] text-center font-semibold mt-5`}
        >
          FEATURES & AMENITIES
        </div>
        <div
        data-aos="fade-right"
          className={`text-center text-[16px] w-7/12 max-lg:w-full mx-auto mt-5 leading-6 ${poppins.className}`}
        >
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </div>
        <div className='-mt-10'>
          <Card />
        </div>
        <div className={`mt-10 text-right px-14 text-[12px] max-lg:text-center max-lg:px-5 ${poppins.className}`}>
            *T&Cs apply | ** Based on similar branded projects in the last 2 years. <button><u>Source 1</u></button> | <button><u>Source 2</u></button>
        </div>
      </div>
    </Narrow>
  );
}
