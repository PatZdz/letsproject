"use client";

import React from "react";
import Image from "next/image";
export default function WhyChooseUs() {
  const features = [
    {
      title: "Full-Service Agency",
      description:
        "Our approach combines user-centred methodologies with analytics to create experiences that convert. From eye-catching visuals to seamless interactions, every detail is fine-tuned to improve the bottom line. We'll do everything for you from start to finish with the same set price that won't change.",
      icon: "/images/whychooseus_1.png",
    },
    {
      title: "Data-Driven Design",
      description:
        "Our approach combines user-centered methodologies with analytics to create experiences that convert. From eye-catching visuals to seamless interactions, every detail is crafted to improve your bottom line.",
      icon: "/images/whychooseus_2.png",
    },
    {
      title: "Cutting-Edge Tech",
      description:
        "We stay on top of the latest industry trends to ensure your digital presence meets your customers' expectations. Whether we're coding a Flutter mobile app or customizing an eCommerce platform, we prioritize performance and scalability.",
      icon: "/images/whychooseus_3.png",
    },
  ];

  return (
    <section id="why-choose-us" className="py-8 md:py-16 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <h2 className="text-2xl md:text-[36px] font-extrabold text-center text-[#1A1A1A] mb-6 md:mb-8">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="bg-[#F0EEEC] rounded-lg p-6 md:p-[30px] flex flex-col h-full">
              <div className="flex gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full bg-[#E9E3DD] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={features[0].icon}
                    alt={features[0].title}
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-semibold text-xl md:text-[30px] text-[#1A1A1A]">
                    {features[0].title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{features[0].description}</p>
              <button className="btn-primary mt-auto self-center">
                LET'S TALK ABOUT YOUR PROJECT
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-rows-2 gap-4">
              {features.slice(1).map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#F0EEEC] rounded-lg p-6 md:p-[30px] flex flex-col"
                >
                  <div className="flex gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full bg-[#E9E3DD] flex items-center justify-center flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={42}
                        height={42}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold text-xl md:text-[30px] text-[#1A1A1A]">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
