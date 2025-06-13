"use client";

import React from "react";
import Image from "next/image";

export default function AuthoritySection() {
  return (
    <section id="authority" className="py-16 bg-[#F6F4F1]">
      <div className="w-full max-w-[1000px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">
            Kim jestem
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left - Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/clinic/authority.webp"
                alt="Patryk Zdziabek"
                width={256}
                height={256}
                objectFit="cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-1">
              Patryk Zdziabek
            </h3>
            <p className="text-lg text-[#3257A5] font-medium mb-4">
              Specjalista Digital Marketing
            </p>

            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certyfikat Google AI w Biznesie
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pomagam gabinetom medycznym przyciągać więcej pacjentów. Specjalizuję się w prostych, skutecznych rozwiązaniach, które działają bez skomplikowanych systemów i zbędnych opłat.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-[#1A1A1A]">8+</div>
                <div className="text-gray-600 text-sm">LAT DOŚWIADCZENIA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1A1A1A]">50+</div>
                <div className="text-gray-600 text-sm">KLIENTÓW</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1A1A1A]">100%</div>
                <div className="text-gray-600 text-sm">GWARANCJI WZROSTU WIZYT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}