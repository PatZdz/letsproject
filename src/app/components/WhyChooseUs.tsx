"use client";

import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Full-Service Agency",
      description:
        "Our approach combines user-centered methodologies with analytics to create experiences that convert.",
    },
    {
      title: "Data-Driven Design",
      description:
        "We use the latest industry trends to deliver cutting-edge solutions.",
    },
    {
      title: "Cutting-Edge Tech",
      description:
        "We prioritize performance and scalability with the best tools.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why choose us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}