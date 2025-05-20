"use client";

import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  const services = [
    {
      subtitle: "Rozwiązania webowe",
      title: "Strony internetowe",
      description:
        "Tworzymy błyskawicznie działające strony internetowe i sklepy online, które skutecznie przyciągają klientów i znacząco zwiększają sprzedaż. Zapewniamy wyjątkowe doświadczenia użytkownika.",
      icon: "/images/project_1.jpg",
    },
    {
      subtitle: "Rozwój oprogramowania",
      title: "Aplikacje Mobilne",
      description:
        "Pomagamy zdobyć nowych klientów dzięki nowoczesnym aplikacjom mobilnym. Przekształcamy Twoją wizję w dynamiczne doświadczenie, które skutecznie zwiększa przychody Twojej firmy.",
      icon: "/images/project_2.jpg",
    },
    {
      subtitle: "Identyfikacja wizualna",
      title: "Branding i Marketing",
      description:
        "Pomagamy wyróżnić się na rynku dzięki zapadającej w pamięć marce. Tworzymy profesjonalne logo i identyfikację wizualną, która przyciąga klientów i buduje silne zaufanie.",
      icon: "/images/project_3.jpg",
    },
    {
      subtitle: "Optymalizacja konwersji",
      title: "Audyty UXUI",
      description:
        "Zwiększamy sprzedaż dzięki intuicyjnym interfejsom użytkownika. Eliminujemy problemy, które mogą odstraszać potencjalnych klientów i optymalizujemy ścieżki konwersji na Twojej stronie.",
      icon: "/images/project_4.jpg",
    },
  ];

  return (
    <section id="services" className="py-8 md:py-16 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <h2 className="text-2xl md:text-[36px] font-extrabold text-center mb-6 md:mb-12 text-[#1A1A1A]">
          Co możemy dla Ciebie zrobić?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F0EEEC] rounded-lg overflow-hidden shadow-sm"
            >
              <div className="flex flex-col-reverse md:flex-row h-full">
                {/* Lewa kolumna - Treść */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center h-full flex-grow">
                  <p className="text-[#3257A5] text-sm md:text-base font-medium mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="font-semibold text-xl md:text-2xl text-[#1A1A1A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#4b5563] text-sm md:text-base mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Prawa kolumna - Zdjęcie */}
                <div className="md:w-2/5">
                  <div className="relative w-full h-full">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl md:text-[24px] font-semibold text-[#1D1E22] mb-4">
            Potrzebujesz projektu, który łączy kilka usług?
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="btn-primary"
          >
            UMÓW DARMOWĄ KONSULTACJĘ
          </button>
        </div>
      </div>
    </section>
  );
}
