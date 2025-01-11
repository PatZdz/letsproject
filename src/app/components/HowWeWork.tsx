"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Ideate",
      description: "Identify, shape and validate your product idea.",
      image: "/images/howwework_1.png",
    },
    {
      number: "02",
      title: "Design",
      description: "Craft user-friendly designs and wireframes.",
      image: "/images/howwework_2.png",
    },
    {
      number: "03",
      title: "Develop",
      description: "Bring products to life with world-class engineering.",
      image: "/images/howwework_3.png",
    },
    {
      number: "04",
      title: "Maintain",
      description: "Ensure everything runs smoothly after launch.",
      image: "/images/howwework_4.png",
    },
    {
      number: "0 5",
      title: "Scale",
      description: "Expand your product to reach new heights.",
      image: "/images/howwework_5.png",
    },
  ];

  return (
    <section id="how-we-work" className="py-16 md:py-32 bg-[#1A1A1A] text-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <h2 className="text-2xl md:text-[36px] font-extrabold text-center text-white mb-12 md:mb-24">
          How We Work?
        </h2>
        
        {/* Mobile View */}
        <div className="md:hidden w-full overflow-x-scroll">
          <div className="flex gap-4 min-w-max px-4">
            {steps.map((step) => (
              <div 
                key={step.number}
                className="w-[280px] bg-[#2A2A2A] p-8 rounded-lg text-center flex flex-col items-center"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#3257A5] text-xl font-bold">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-semibold">
                    {step.title}
                  </h3>
                </div>
                <Image 
                  src={step.image}
                  alt={step.title}
                  width={84}
                  height={84}
                  className="mb-6"
                />
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-row gap-8 justify-center max-w-[900px] mx-auto">
          <div className="flex-1 space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "text-[#3257A5]" : "text-gray-400"
                }`}
              >
                <div className="flex items-center gap-8 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#3257A5] text-2xl font-bold min-w-[40px]">
                    {step.number}
                  </span>
                  <h3 className="text-3xl font-semibold hover:text-[#3257A5] transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-[#2A2A2A] p-12 rounded-lg shadow-lg text-center w-full">
              <Image 
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                width={120}
                height={120}
                className="mx-auto mb-8"
              />
              <h3 className="text-4xl font-bold mb-4">{steps[activeStep].title}</h3>
              <p className="text-xl text-gray-400">{steps[activeStep].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
