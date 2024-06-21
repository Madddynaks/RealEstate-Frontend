"use client";
import React, { useState, useEffect } from "react";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Narrow from "../Common/Narrow";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const oswald = Oswald({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Architecture() {
  const [tab, setTab] = useState("Exterior");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    "/Images/main1.jpg",
    "/Images/main2.jpg",
    "/Images/main3.jpg",
    "/Images/main4.jpg",
    "/Images/main5.jpg",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Narrow>
      <div className="mt-10 px-12 max-lg:px-3">
        <div data-aos="fade-left" className="flex gap-5 items-end justify-end">
          <button
            className={`${
              tab === "Exterior"
                ? "bg-[#00357B] text-white"
                : "text-[#00357B] border border-[#00357B]"
            } px-7 rounded-lg py-3 text-[13px] font-semibold ${
              poppins.className
            } transition-all duration-500 ease-in-out`}
            onClick={() => setTab("Exterior")}
          >
            EXTERIORS
          </button>
          <button
            className={`${
              tab === "Interior"
                ? "bg-[#00357B] text-white"
                : "text-[#00357B] border border-[#00357B]"
            } px-7 rounded-lg py-3 text-[13px] font-semibold ${
              poppins.className
            } transition-all duration-500 ease-in-out`}
            onClick={() => setTab("Interior")}
          >
            INTERIORS
          </button>
        </div>
        <div data-aos="zoom-in" className="mt-8">
          <img
            src="/Images/main1.jpg"
            className="w-full cursor-pointer"
            alt="Main Image"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:gap-1 justify-between mt-5 max-lg:mt-1">
          {images.slice(1).map((src, index) => (
            <div key={index} data-aos="zoom-in">
              <img
                src={src}
                className="w-full cursor-pointer"
                alt={`Image ${index + 2}`}
                onClick={() => {
                  setLightboxIndex(index + 1);
                  setLightboxOpen(true);
                }}
              />
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <Lightbox
            mainSrc={images[lightboxIndex]}
            nextSrc={images[(lightboxIndex + 1) % images.length]}
            prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() =>
              setLightboxIndex(
                (lightboxIndex + images.length - 1) % images.length
              )
            }
            onMoveNextRequest={() =>
              setLightboxIndex((lightboxIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </Narrow>
  );
}
