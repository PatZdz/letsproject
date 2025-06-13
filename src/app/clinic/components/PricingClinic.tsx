"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PricingClinic() {
  const router = useRouter();

  const handlePackageSelect = (packageName: string) => {
    router.push(`/clinic?package=${encodeURIComponent(packageName)}#contact`);
  };

  const packages = [
    {
      name: "Niezbędne minimum",
      price: "1,999",
      description: "Dla gabinetów, które chcą szybko wystartować z nowoczesną stroną.",
      popular: false,
      features: [
        "Strona internetowa (mobilna, responsywna)",
        "Formularz kontaktowy",
        "Optymalizacja Google Moja Firma",
        "Darmowy hosting na zawsze",
        "Do 5 podstron",
        "Podstawowe SEO",
        "Certyfikat SSL",
        "Wsparcie techniczne 3 miesiące"
      ],
      notIncluded: [],
      deliveryTime: "7 dni",
    },
    {
      name: "Wyróżnij się lokalnie",
      price: "2,999",
      description: "Dla gabinetów, które chcą przyciągać pacjentów z okolicy i wyglądać profesjonalnie.",
      popular: false,
      features: [
        "Wszystko z pakietu „Niezbędne minimum”",
        "Profesjonalne logo i branding",
        "Zaawansowane SEO lokalne",
        "Do 10 podstron",
        "Szkolenie z obsługi strony",
        "Blog z CMS do edycji postów",
        "5 artykułów blogowych poprawiających lokalne pozycjonowanie",
        "Wsparcie techniczne 12 miesięcy"
      ],
      notIncluded: [],
      deliveryTime: "14 dni"
    },
    {
      name: "Strategiczny Rozwój",
      price: "3,499",
      description: "Dla nowoczesnych gabinetów, które chcą rozwijać marketing i komunikację.",
      popular: true,
      features: [
        "Wszystko z pakietu „Wyróżnij się lokalnie”",
        "Strategia content marketingu (Help / Hub / Hero)",
        "Plan kampanii reklamowej Google/META",
        "Do 15 podstron",
        "Szkolenie z wykorzystania AI w gabinecie (Mam ceryfikat Google AI)",
        "15 artykułów blogowych poprawiających lokalne pozycjonowanie",
        "Wsparcie techniczne 12 miesięcy"
      ],
      notIncluded: [],
      deliveryTime: "16 dni"
    }
  ];



  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Wybierz pakiet dla swojego gabinetu
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transparentne ceny, bez ukrytych kosztów. Wszystkie pakiety zawierają hosting, wsparcie i gwarancję
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg border border-gray-200 ${pkg.popular ? 'border-[#3498DB]' : ''
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#3498DB] text-white px-4 py-1 rounded-full text-xs font-medium">
                  NAJPOPULARNIEJSZY
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#1A1A1A] mb-2">
                    {pkg.price} <span className="text-lg text-gray-500">zł</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-[#1A1A1A] text-sm uppercase tracking-wide">
                    Co zawiera:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.notIncluded.length > 0 && (
                    <div className="pt-4">
                      <h4 className="font-semibold text-gray-400 text-sm uppercase tracking-wide mb-3">
                        Nie zawiera:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Package Details */}
                <div className="border-t pt-6 mb-6">
                  <div className="text-center text-sm">
                    <div>
                      <span className="text-gray-500">Czas realizacji:</span>
                      <div className="font-semibold text-[#1A1A1A]">{pkg.deliveryTime}</div>
                    </div>

                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePackageSelect(pkg.name)}
                  className={`w-full py-3 px-6 rounded-lg font-medium border transition-colors ${pkg.popular
                    ? 'bg-[#3498DB] text-white border-[#3498DB] hover:bg-[#2874A6] hover:border-[#2874A6] focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:ring-opacity-50'
                    : 'bg-white text-[#1A1A1A] border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50'
                    }`}
                >
                  Wybierz pakiet
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Elastyczne formy płatności: jednorazowo (5% rabatu) lub 50/50
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Wszystkie ceny zawierają VAT. Możliwość rozliczenia jako koszt działalności.
          </p>

          <a href="/clinic#contact" className="bg-[#3498DB] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2874A6] focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:ring-opacity-50 inline-block">
            Porozmawiajmy o szczegółach
          </a>
        </div>
      </div>
    </section>
  );
}