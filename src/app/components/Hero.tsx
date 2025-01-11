"use client";

import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero bg-[#F6F4F1] pt-32 md:pt-64 pb-24 md:pb-48 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[281px] h-[221px] md:w-[381px] md:h-[301px] pointer-events-none">
        <Image
          src="/star_hero.svg"
          alt=""
          fill
          className="object-contain opacity-50"
          priority
        />
      </div>
      <div className="container mx-auto text-center relative z-10 px-4 md:px-6">
        <p className="text-xl md:text-2xl font-medium mb-4 md:mb-8 text-gray-500">
          Design & Development Agency
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-900 leading-tight mb-6 md:mb-12">
          Digital Solutions <br /> for Ambitious Brands
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8 md:mb-16 max-w-2xl mx-auto">
          Empower your business with Branding, Websites, Mobile Applications,
          eCommerce, and Innovative SaaS products.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <button className="btn-primary">BOOK A CALL</button>
          <a href="#projects" className="btn-secondary">
            Check Projects <ArrowRightIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
