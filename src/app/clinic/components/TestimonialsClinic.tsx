"use client";

import React from "react";

export default function TestimonialsClinic() {
  const testimonials = [
    {
      name: "Dr. Anna Kowalska",
      title: "Gabinet Stomatologiczny",
      location: "Kraków",
      avatar: "AK",
      handle: "@gabinet_kowalska",
      time: "2 dni",
      content: "Nowa strona sprawiła, że pacjenci zaczęli dzwonić już w pierwszy tydzień! 📞 Formularz online ułatwił im umówienie wizyt, a ja oszczędzam czas na odbieraniu telefonów.",
      metrics: "127% wzrost nowych pacjentów"
    },
    {
      name: "Mgr Piotr Nowak",
      title: "Klinika Fizjoterapii",
      location: "Wrocław",
      avatar: "PN",
      handle: "@fizjo_nowak",
      time: "5 dni",
      content: "Dzięki AI chatbot nie tracę czasu na umawianie wizyt 🤖 Odpowiada na pytania pacjentów 24/7, a ja mogę skupić się na tym, co robię najlepiej - terapii!",
      metrics: "70% automatyzacja zapytań"
    },
    {
      name: "Dr. Magdalena Wiśniewska",
      title: "Medycyna Estetyczna",
      location: "Gdańsk",
      avatar: "MW",
      handle: "@estetykawisniewska",
      time: "1 tydzień",
      content: "Profesjonalna strona zmieniła postrzeganie mojego gabinetu ✨ Pacjenci mówią, że wygląda bardzo nowocześnie i budzi zaufanie. To przełożyło się na więcej zabiegów premium!",
      metrics: "Wzrost prestiżu gabinetu"
    },
    {
      name: "Mgr Tomasz Zieliński",
      title: "Gabinet Logopedyczny",
      location: "Poznań",
      avatar: "TZ",
      handle: "@logopeda_tomasz",
      time: "3 dni",
      content: "Strona pomogła mi dotrzeć do rodziców szukających pomocy dla swoich dzieci 👨‍👩‍👧‍👦 Sekcja z poradami i blog zwiększyły mój autorytet jako specjalisty.",
      metrics: "Pozycja eksperta w branży"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Co mówią nasi klienci
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prawdziwe opinie gabinetów, które zwiększyły liczbę pacjentów dzięki nowoczesnej stronie
          </p>
        </div>

        {/* Social Media Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              {/* Post Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3257A5] to-[#4A6BC7] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#1A1A1A] text-sm">{testimonial.name}</h3>
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-xs">{testimonial.handle}</p>
                  <p className="text-gray-400 text-xs">{testimonial.time}</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {testimonial.content}
                </p>
                <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  📈 {testimonial.metrics}
                </div>
              </div>

              {/* Location */}
              <div className="pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-400">
                  📍 {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Chcesz osiągnąć podobne rezultaty?
          </p>
          <button className="btn-primary">
            ZAMÓW BEZPŁATNY AUDYT
          </button>
        </div>
      </div>
    </section>
  );
}