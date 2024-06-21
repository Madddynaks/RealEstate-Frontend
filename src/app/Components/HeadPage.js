"use client";
import React, { useState } from "react";
import { useClient } from "next/client";
import { Poppins } from "next/font/google";
import { Oswald } from "next/font/google";
import Narrow from "../Common/Narrow";
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const oswald = Oswald({ subsets: ["latin"] });

export default function HeadPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="background max-lg:bg-center ">
      <Narrow>
        <div className="pt-14 pb-20 max-lg:pb-10">
          <div className="flex justify-between max-lg:px-3">
            <img
              src="/Images/Navigation_bar.png"
              className="w-[200px] h-[50%] max-lg:w-[120px] my-auto"
              alt=""
            />
            {window.innerWidth < 1240 ? (
              <button
                onClick={toggleMenu}
                className={`text-[#17ABFF] hover:bg-[#17ABFF] hover:text-white transition-all duration-500 ease-in-out rounded-lg my-auto px-3 py-3 ${poppins.className}`}
              >
                <svg
                  height={30}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                  />
                </svg>
              </button>
            ) : (
              // ENQUIRE NOW button for larger screens
              <button
                onClick={toggleMenu}
                className={`text-[#17ABFF] hover:bg-[#17ABFF] hover:text-white transition-all duration-500 ease-in-out border-2 font-bold border-[#17ABFF] rounded-lg my-auto px-9 py-3 ${poppins.className}`}
              >
                ENQUIRE NOW
              </button>
            )}
          </div>

          <div className="flex max-lg:flex-col justify-between mt-32 max-lg:mt-5">
            <div className="max-lg:px-3">
              <h1
                data-aos="fade-left"
                className={`text-[48px] max-lg:text-[37px] font-semibold text-white ${oswald.className}`}
              >
                HARBOUR LIGHTS <br /> DE{" "}
                <span className="text-[#17ABFF]">GRESONGO</span>
              </h1>
              <h2
                data-aos="fade-left"
                className="text-[25px] max-lg:text-[14px] text-white font-semibold"
              >
                1, 2 & 3 Bedrooms Seaside Apartments in <br /> Dubai Maritime
                City
              </h2>

              <div data-aos="fade-up">
                <div className="mt-16 max-lg:mt-5">
                  <div
                    className={`text-[14px] max-lg:text-[12px] ${poppins.className} text-white bg-[rgba(0,0,0,0.30)] border-l-4 border-[#17ABFF] w-7/12 py-3 px-3 max-lg:w-10/12 hover:shadow-xl hover:border-[#00357B] transition-all duration-500 ease-in-out`}
                  >
                    Rental Returns of{" "}
                    <span className="font-bold">UPTO 11%**</span>
                  </div>
                </div>
                <div className="mt-5">
                  <div
                    className={`text-[14px] max-lg:text-[12px] ${poppins.className} text-white bg-[rgba(0,0,0,0.30)] border-l-4 border-[#17ABFF] w-7/12 py-3 px-3 max-lg:w-10/12 hover:shadow-xl hover:border-[#00357B] transition-all duration-500 ease-in-out`}
                  >
                    Capital Appreciation of{" "}
                    <span className="font-bold">UPTO 32%**</span>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="max-lg:px-3 max-lg:mt-5">
              <div className=" backdrop-blur-md p-10 text-left small border-b border-gray-900">
                <div
                  className={`text-white ${poppins.className} text-[13px] font-extralight widest`}
                >
                  PRICING STARTS FROM
                </div>
                <div
                  className={`text-white font-bold text-[48px] ${oswald.className}`}
                >
                  $ 425,000
                </div>
                <div className={`text-white text-[24px] ${oswald.className}`}>
                  AED 1.3 Million
                </div>
                <div>
                  <button
                    className={`bg-[#17ABFF] wide hover:bg-[#00357B] transition-all duration-500 ease-in-out text-white text-[13px] px-16 w-full max-lg:text-[11px] rounded-lg py-4 mt-7 font-semibold ${poppins.className}`}
                  >
                    GET A PRESENTATION
                  </button>
                </div>
              </div>
              <div className=" backdrop-blur-xl px-10 py-3">
                <div
                  className={`${poppins.className} text-[#98C5E8] text-[13px] font-light`}
                >
                  Get an Expert’s Presentation of Real <br /> Estate in Dubai
                  for Life and investment
                </div>
              </div>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
