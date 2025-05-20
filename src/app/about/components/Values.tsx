"use client";

import React from "react";

export default function Values() {
  const values = [
    {
      title: "Innowacja",
      description: "Wykorzystujemy nowe technologie i metodologie, aby dostarczać nowoczesne rozwiązania.",
      emoji: "💡"
    },
    {
      title: "Transparentność",
      description: "Jasna komunikacja i szczera informacja zwrotna są podstawą naszych relacji.",
      emoji: "🔍"
    },
    {
      title: "Doskonałość",
      description: "Dążymy do doskonałości w każdym projekcie, niezależnie od jego wielkości.",
      emoji: "⭐"
    },
    {
      title: "Współpraca",
      description: "Wspólna praca z naszymi klientami zapewnia najlepsze możliwe rezultaty.",
      emoji: "🤝"
    }
  ];

  return (
    <section className="w-full px-4 md:px-0 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          Nasze Wartości
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#F6F4F1] p-6 rounded-lg text-center md:text-left">
              <div className="w-16 h-16 mb-6 bg-[#E9E3DD] rounded-full flex items-center justify-center text-4xl mx-auto md:mx-0">
                {value.emoji}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
