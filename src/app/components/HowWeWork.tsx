"use client";

import React from "react";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Consultancy",
      description:
        "You and us together discuss project guidelines and choose the most suitable cooperation model.",
    },
    {
      number: "02",
      title: "Roadmap",
      description:
        "Our experts prepare details of the entire project. This allows us to keep the working pace and stick to our goal.",
    },
    {
      number: "03",
      title: "Tests",
      description:
        "While fulfilling the order, we check various scenarios to make sure the final system is error-free.",
    },
    {
      number: "04",
      title: "Scope and quote",
      description:
        "We draw up a working schedule that is consulted with you on an ongoing basis. We evaluate the project and wait for your approval.",
    },
    {
      number: "05",
      title: "Development",
      description:
        "We get down to work and keep you updated on the work progress at all stages of the task.",
    },
    {
      number: "06",
      title: "Implementation",
      description:
        "We hand the final solution over to you. We implement the ready-made project in your business.",
    },
  ];

  return (
    <section id="how-we-work" className="py-16 bg-[#F6F4F1]">
      <div className="container mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          How we work
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#E9E3DD] transform -translate-x-1/2" />
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-end' : ''}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                  <div className="bg-[#F0EEEC] rounded-lg p-8">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      <span className="text-[24px] font-bold text-[#3257A5] bg-[#E9E3DD] w-[48px] h-[48px] flex items-center justify-center rounded-full">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-semibold text-[#1A1A1A]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
