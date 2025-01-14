"use client";

import React from "react";
import { useRouter } from 'next/navigation';

export default function Experience() {
  const router = useRouter();
  
  const stats = [
    { number: "80+", label: "Completed Projects" },
    { number: "40+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="w-full px-4 md:px-0 py-16 md:py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center mb-16">
          Our Experience
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 text-[#3257A5]">
                {stat.number}
              </p>
              <p className="text-sm md:text-base opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Ready to start your next project with us? Let&apos;s create something amazing together.
          </p>
          <button 
            onClick={() => router.push('/contact')} 
            className="btn-primary"
          >
            START YOUR PROJECT
          </button>
        </div>
      </div>
    </section>
  );
}
