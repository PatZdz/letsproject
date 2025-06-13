"use client";

import React from "react";
import {
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  AcademicCapIcon,
  HeartIcon,
  ChartBarSquareIcon
} from "@heroicons/react/24/outline";

export default function ServicesClinic() {
  const services = [
    {
      icon: (
        <ComputerDesktopIcon className="w-8 h-8" />
      ),
      title: "Strony internetowe",
      description: "Szybka, mobilna i czytelna strona, która buduje zaufanie pacjentów i zwiększa liczbę zapisów."
    },
    {
      icon: (
        <MagnifyingGlassIcon className="w-8 h-8" />
      ),
      title: "Lokalne pozycjonowanie",
      description: "Pacjenci bez problemu znajdą Twój gabinet w Google dzięki optymalizacji wizytówki i lokalnemu SEO."
    },
    {
      icon: (
        <SparklesIcon className="w-8 h-8" />
      ),
      title: "AI w gabinecie",
      description: "Pokażę Ci, jak wykorzystać AI do automatyzacji, lepszej obsługi pacjentów i oszczędności czasu. Certyfikowany przez Google (AI in Business)"
    },
    {
      icon: (
        <AcademicCapIcon className="w-8 h-8" />
      ),
      title: "Szkolenia dla gabinetu",
      description: "Nauczę Cię, jak samodzielnie korzystać z social mediów i narzędzi AI w codziennej pracy."
    },
    {
      icon: (
        <HeartIcon className="w-8 h-8" />
      ),
      title: "Logo i branding",
      description: "Nowoczesna identyfikacja wizualna, która wyróżni Twój gabinet i zrobi świetne pierwsze wrażenie."
    },
    {
      icon: (
        <ChartBarSquareIcon className="w-8 h-8" />
      ),
      title: "Reklamy gabinetowe",
      description: "Skuteczne kampanie Google i Facebook Ads przyciągające lokalnych pacjentów bez przepalania budżetu."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6 leading-tight">
            Kompleksowe usługi digital dla Twojego gabinetu
          </h2>
          <p className="text-xl text-[#5A6C7D] max-w-4xl mx-auto leading-relaxed">
            Pomagam właścicielom gabinetów medycznych przyciągać więcej pacjentów i budować profesjonalny wizerunek w internecie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-left"
            >
              <div className="w-16 h-16 bg-[#E8F5E8] rounded-xl flex items-center justify-center mb-6">
                <div className="text-[#4CAF50] w-8 h-8">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                {service.title}
              </h3>
              <p className="text-[#5A6C7D] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-[#2C3E50] font-medium mb-6">
            Potrzebujesz więcej informacji?
          </p>
          <a href="/clinic#contact" className="bg-[#3498DB] hover:bg-[#2980B9] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 inline-block">
            POROZMAWIAJMY O TWOICH POTRZEBACH
          </a>
        </div>
      </div>
    </section>
  );
}