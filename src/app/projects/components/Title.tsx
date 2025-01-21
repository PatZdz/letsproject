"use client";

import React from "react";
import Image from "next/image";

export default function Title() {
  const services = [
    {
      title: "Website Development",
      icon: "/images/service_1.png",
    },
    {
      title: "Mobile App Development",
      icon: "/images/service_2.png",
    },
    {
      title: "Branding Design",
      icon: "/images/service_3.png",
    },
    {
      title: "UX/UI Design",
      icon: "/images/service_4.png",
    },
  ];

  return (
    <section className="w-full px-4 md:px-0 pt-32 pb-10 md:pt-48">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          Projects
        </h2>
        <p className="text-lg md:text-xl text-[#4b5563] text-center mb-8">
          We offer these services
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F0EEEC] rounded-lg p-4 flex flex-col items-center"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-[#E9E3DD] flex items-center justify-center mb-3">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-sm font-semibold text-[#1A1A1A] text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
