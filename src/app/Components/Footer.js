import React from "react";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Narrow from "../Common/Narrow";

const oswald = Oswald({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Footer() {
  return (
    <div className="bg-[#091D41] mt-10 py-10">
      <Narrow>
        <div className={`text-[14px] ${poppins.className} text-center text-white`}>
          © DAMAC Copyright 2024 All rights reserved.
        </div>
      </Narrow>
    </div>
  );
}
