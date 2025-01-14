"use client";

import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <section className="w-full px-4 md:px-0 pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          Mission
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/about_2.jpg"
                alt="CEO & Founder"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-[#1A1A1A] text-center lg:text-left">
              Aesthetics and functionality count
            </h3>
            <p className="text-gray-600 mb-8">
              At LetsProject, we believe that every brand deserves unique and functional digital solutions. Our mission is to create websites, mobile applications, and branding strategies that not only stand out with their aesthetics but also support the growth of our clients&apos; businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
