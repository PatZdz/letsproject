"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroClinic() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F6F4F1]"></div>

      <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 pt-40 md:pt-24 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-6 leading-tight">
              Więcej pacjentów. Lepszy wizerunek. Bez stresu.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Strona, która wygląda profesjonalnie, dobrze działa na telefonie i zwiększa zaufanie pacjentów.            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-6 mt-8 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
              <button
                onClick={() => router.push('/clinic#contact')}
                className="btn-primary"
              >
                ZAMÓW BEZPŁATNY AUDYT SWOJEJ STRONY
              </button>
              <button
                onClick={() => router.push('/clinic#demo')}
                className="btn-secondary"
              >
                Zobacz przykładową realizację
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>




          </div>

          {/* Right Content - Clinic Image */}
          <div className="w-full lg:w-3/5 max-w-2xl lg:mx-0">
            <div className="relative">
              {/* Browser Frame */}
              <div className="bg-gray-200 rounded-t-lg p-2 md:p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-white rounded ml-3 md:ml-4 px-2 md:px-3 py-1 text-xs text-gray-500 text-center">
                    www.twojgabinet.pl
                  </div>
                </div>
              </div>

              {/* Website Content - 4:3 Aspect Ratio */}
              <div className="bg-white rounded-b-lg shadow-xl overflow-hidden">
                {/* Content Preview - 4:3 Aspect Ratio */}
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src="/images/clinic/orto_clinic_d.webp"
                    alt="Nowoczesny gabinet stomatologiczny"
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
                          src="/images/clinic/orto_clinic_m.webp"
                          alt="Nowoczesny gabinet stomatologiczny - widok mobilny"
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

            {/* Benefits Section - Mobile Only */}
            <div className="mt-16 flex flex-row flex-wrap justify-center gap-x-4 gap-y-4 lg:hidden">
              <div className="flex items-center justify-start gap-3 text-gray-600">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Gotowe w 7 dni</span>
              </div>
              <div className="flex items-center justify-start gap-3 text-gray-600">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs font-medium">Wszystko kompleksowo</span>
              </div>
              <div className="flex items-center justify-start gap-3 text-gray-600">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs font-medium">0 ukrytych kosztów</span>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-24 hidden lg:flex flex-col gap-y-3 lg:flex-row lg:justify-between lg:items-center lg:w-full">
              <div className="flex items-start justify-start gap-3 text-gray-600">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Gotowe w 7 dni</span>
              </div>
              <div className="flex items-start justify-start gap-3 text-gray-600">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Wszystko kompleksowo</span>
              </div>
              <div className="flex items-start justify-start gap-3 text-gray-600">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">0 ukrytych kosztów</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}