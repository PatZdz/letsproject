"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HidoProject() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0 my-4">
      <div className="bg-[#F0EEEC] rounded-lg overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Left Column - Content */}
          <div className="md:w-2/5 flex items-center">
            <div className="p-8 md:pt-0">
              <Image
                src="/vectors/client_logo_4_P.svg"
                alt="Hido Logo"
                width={120}
                height={40}
              />
              <h2 className="text-2xl md:text-[32px] font-semibold text-[#1A1A1A] mb-2">
                Furniture E-commerce
              </h2>
              <p className="text-lg md:text-xl text-[#4b5563] mb-6">
                for homes and offices
              </p>
              <p className="text-[#4b5563] mb-8">
                Hido is a modern e-commerce platform specializing in furniture for both residential and commercial spaces. The platform offers a seamless shopping experience with advanced filtering options, 3D visualization tools, and integrated delivery tracking. Perfect for customers looking to furnish their spaces with style and convenience.
              </p>
              <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                <button
                  onClick={() => router.push("/contact")}
                  className="btn-secondary flex items-center whitespace-nowrap"
                >
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-3/5 aspect-[4/3]">
            <div className="relative w-full h-full">
              <Image
                src="/images/project_2.jpg"
                alt="Hido Project"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
