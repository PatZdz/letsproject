"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FitwiseProject() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0 my-4">
      <div className="bg-[#F0EEEC] rounded-lg overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-2/5 flex items-center">
            <div className="p-8">
              <Image
                src="/vectors/client_logo_2.svg"
                alt="FitWise Logo"
                width={120}
                height={40}
              />
              <h2 className="text-2xl md:text-[32px] font-semibold text-[#1A1A1A] mb-2">
                Fitness management SaaS
              </h2>
              <p className="text-lg md:text-xl text-[#4b5563] mb-6">
                for sports facilities and personal trainers.
              </p>
              <p className="text-[#4b5563] mb-8">
                FitWise combines an intuitive interface with advanced features
                to deliver a tool that supports the growth and efficiency of
                managing any sports facility - from gyms to dance schools to
                fitness clubs. It is ideal for modern managers who want to focus
                on growing their business rather than on formalities.
              </p>
              <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                <button
                  onClick={() => router.push("/projects/fitwise")}
                  className="btn-secondary flex items-center whitespace-nowrap"
                >
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 aspect-[4/3]">
            <div className="relative w-full h-full">
              <Image
                src="/images/project_1.jpg"
                alt="FitWise Project"
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
