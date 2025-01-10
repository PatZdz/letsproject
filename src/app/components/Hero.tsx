"use client";

import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero bg-[#F6F4F1] pt-64 pb-48 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[281px] h-[221px] md:w-[381px] md:h-[301px] pointer-events-none">
        <Image
          src="/star_hero.svg"
          alt=""
          fill
          className="object-contain opacity-50"
          priority
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <p className="text-gray-500 text-2xl font-medium mb-8">
          Design & Development Agency
        </p>
        <h1 className="text-8xl font-extrabold text-gray-900 leading-tight mb-12">
          Digital Solutions <br /> for Ambitious Brands
        </h1>
        <p className="text-2xl text-gray-700 mb-16 max-w-2xl mx-auto">
          Empower your business with Branding, Websites, Mobile Applications,
          eCommerce, and Innovative SaaS products.
        </p>
        <div className="flex justify-center space-x-12">
          <button className="btn-primary">BOOK A CALL</button>
          <a href="#projects" className="btn-secondary">
            Check Projects <ArrowRightIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
