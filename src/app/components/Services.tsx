"use client";

import React from "react";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "We build high-performing, responsive websites and online stores with clean code and intuitive architecture.",
      icon: "/images/feature_1.png",
    },
    {
      title: "Mobile App Development",
      description:
        "Reach users on the go with cross-platform apps built in Flutter.",
      icon: "/images/feature_2.png",
    },
    {
      title: "Branding Design",
      description:
        "Stand out from the competition with a memorable brand identity.",
      icon: "/images/feature_3.png",
    },
    {
      title: "UX/UI Audits & Design",
      description:
        "Our UX/UI audits pinpoint pain points and optimize user flows.",
      icon: "/images/feature_4.png",
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          What we can do for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}