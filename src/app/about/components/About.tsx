"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function AboutUs() {
  const router = useRouter();

  return (
    <section className="w-full px-4 md:px-0 pt-32 md:pt-48">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">
              We Create Digital Products That People Love to Use
            </h3>
            <p className="text-gray-600 mb-6">
              LetsProject is a team of passionate designers and developers dedicated to creating exceptional digital experiences. We combine creativity with technical expertise to deliver solutions that drive business growth.
            </p>
            <p className="text-gray-600 mb-8">
              Our approach is rooted in understanding your business goals and user needs. We don&apos;t just build products; we create experiences that resonate with your audience and deliver measurable results.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={() => router.push('/contact')} 
                className="btn-primary"
              >
                START YOUR PROJECT
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/about_3.jpg"
                alt="About LetsProject"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
