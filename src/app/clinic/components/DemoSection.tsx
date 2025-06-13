"use client";

"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

export default function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: "Gabinet Stomatologiczny",
      category: "Stomatologia",
      features: [
        "Formularz umówienia wizyty",
        "Galeria zabiegów",
        "Cennik usług",
        "Opinie pacjentów",
        "Mapa dojazdu"
      ],
      mockup: {
        desktopImage: "/images/clinic/orto_clinic_d.webp",
        mobileImage: "/images/clinic/orto_clinic_m.webp"
      }
    },
    {
      title: "Gabinet Ortodontyczny",
      category: "Ortodoncja",
      features: [
        "Konsultacje ortodontyczne",
        "Plan leczenia",
        "Galeria efektów",
        "Aparaty ortodontyczne",
        "Kontrole postępów"
      ],
      mockup: {
        desktopImage: "/images/clinic/orto_clinic_d.webp",
        mobileImage: "/images/clinic/orto_clinic_m.webp"
      }
    },
    {
      title: "Gabinet Medycyny Estetycznej",
      category: "Medycyna estetyczna",
      features: [
        "Konsultacje online",
        "Galeria efektów",
        "Kalkulator kosztów",
        "Blog o urodzie",
        "Certyfikaty jakości"
      ],
      mockup: {
        desktopImage: "/images/clinic/orto_clinic_d.webp",
        mobileImage: "/images/clinic/orto_clinic_m.webp"
      }
    }
  ];

  return (
    <section id="demo" className="py-16 md:py-24 bg-[#F6F4F1] clinic-page">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6">
            Zobacz przykładowe strony
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sprawdź, jak może wyglądać profesjonalna strona dla Twojego gabinetu
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${activeDemo === index
                ? 'bg-white text-[#3498DB] border-2 border-[#3498DB]'
                : 'bg-white text-gray-700 border border-gray-300'
                }`}
            >
              {demo.category}
            </button>
          ))}
        </div>

        {/* Demo Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Mockup */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              {/* Browser Frame */}
              <div className="bg-gray-200 rounded-t-lg p-2 md:p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-white rounded ml-3 md:ml-4 px-2 md:px-3 py-1 text-xs text-gray-500 text-center">
                    www.{demos[activeDemo].category.toLowerCase().replace(' ', '')}.pl
                  </div>
                </div>
              </div>

              {/* Website Content - 4:3 Aspect Ratio */}
              <div className="bg-white rounded-b-lg shadow-xl overflow-hidden">
                {/* Content Preview - 4:3 Aspect Ratio */}
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={demos[activeDemo].mockup.desktopImage}
                    alt={demos[activeDemo].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* iPhone Mockup - Responsive for all screens */}
              <div className="absolute -bottom-0 -right-2 sm:-bottom-6 sm:-right-3 md:-bottom-8 md:-right-4">
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="bg-black rounded-[0.8rem] sm:rounded-[1rem] md:rounded-[1.2rem] p-0.5 shadow-2xl">
                    {/* Screen */}
                    <div className="w-24 h-[220px] sm:w-[120px] sm:h-[250px] md:w-[150px] md:h-[315px] bg-white rounded-[0.6rem] sm:rounded-[0.8rem] md:rounded-[1rem] overflow-hidden relative">
                      {/* Mobile Content Area */}
                      <div className="h-full relative">
                        <Image
                          src={demos[activeDemo].mockup.mobileImage}
                          alt={`${demos[activeDemo].title} - widok mobilny`}
                          fill
                          className="object-cover"
                        />
                        {/* Dynamic Island (iPhone 16 camera cutout) - over the image */}
                        <div className="absolute top-0.5 sm:top-1 md:top-1.5 left-1/2 transform -translate-x-1/2 bg-black rounded-full z-10 w-6 h-2 sm:w-7 sm:h-2.5 md:w-9 md:h-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center lg:text-left">
              {demos[activeDemo].title}
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed mx-auto lg:mx-0">
              Profesjonalna strona internetowa zaprojektowana specjalnie dla gabinetów {demos[activeDemo].category.toLowerCase()}.
              Zawiera wszystkie niezbędne funkcjonalności do skutecznego przyciągania i obsługi pacjentów.
            </p>

            <div className="space-y-4 mb-8 text-left">
              <h4 className="font-semibold text-[#1A1A1A]">Kluczowe funkcjonalności:</h4>
              <ul className="space-y-3 mx-auto lg:mx-0">
                {demos[activeDemo].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-[#3498DB] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center md:justify-center lg:justify-start">
              <button className="btn-primary w-full md:w-auto">
                ZOBACZ TEN PRZYKŁAD
              </button>
              <a href="/clinic#contact" className="btn-secondary flex items-center gap-2">
                Zamów podobną stronę <ArrowRightIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}