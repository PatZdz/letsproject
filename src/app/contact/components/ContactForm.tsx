"use client";

import React, { useState, useRef } from "react";
import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "LetsProject przekształcił naszą markę, tworząc oszałamiającą nową identyfikację wizualną i stronę internetową, która doskonale odzwierciedla naszą wizję. Ich dbałość o szczegóły i kreatywność sprawiły, że cały proces przebiegł niezwykle sprawnie.",
    author: "Daniel Semerjyan",
    position: "Współzałożyciel",
    company: "FitWise",
    stars: 5,
  },
  {
    quote:
      "Dzięki LetsProject nasza nowa strona internetowa jest nie tylko wizualnie oszałamiająca, ale także niesamowicie szybka i responsywna. Nasi klienci uwielbiają płynne doświadczenie, a my zauważyliśmy znaczny wzrost zaangażowania.",
    author: "Marcin Zaremski",
    position: "Założyciel",
    company: "GPX Overlay",
    stars: 5,
  },
  {
    quote:
      "Aplikacja mobilna opracowana przez LetsProject przekroczyła wszystkie nasze oczekiwania. Jest przyjazna dla użytkownika, pięknie zaprojektowana i działa bezbłędnie. Otrzymaliśmy niesamowite opinie od naszych użytkowników!",
    author: "Piotr Kluk",
    position: "Współzałożyciel",
    company: "Hido",
    stars: 5,
  },
];



export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [budget, setBudget] = useState(500);
  const [currency, setCurrency] = useState<'EUR' | 'USD' | 'PLN'>('PLN');
  const [selectedExpectations, setSelectedExpectations] = useState<string[]>([]);
  const [buttonState, setButtonState] = useState<'default' | 'sending' | 'success'>('default');

  const currencySymbols = {
    EUR: '€',
    USD: '$',
    PLN: 'zł'
  };

  const currencyRanges = {
    EUR: { min: 200, max: 50000 },
    USD: { min: 200, max: 50000 },
    PLN: { min: 500, max: 150000 }
  };

  const handleExpectationsChange = (value: string) => {
    if (buttonState === 'success') return;
    setSelectedExpectations(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (buttonState === 'success') return;

    setButtonState('sending');
    const formData = new FormData(e.currentTarget);

    const googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfY96o87er0yj4HweiVZ5SShJlqho5HQA42ggWOSuixe2ySDw/formResponse';

    const params = new URLSearchParams({
      'entry.1814990160': formData.get('fullName') as string,        // Name
      'entry.733501683': formData.get('company') as string,          // Company
      'entry.771848371': formData.get('email') as string,            // Email
      'entry.2016454461': JSON.stringify(selectedExpectations),      // Expectations
      'entry.614675999': budget.toString(),                          // Budget
      'entry.1468628125': currency,                                  // Currency
      'entry.1887043213': formData.get('howWeCanHelp') as string,   // How can we help
      'entry.469706325': formData.get('howDidYouHear') as string,   // How did you hear
      'entry.615425382': formData.get('nda') ? '1' : '0'            // NDA
    });



    try {
      await fetch(`${googleFormsURL}?${params.toString()}`, {
        method: 'POST',
        mode: 'no-cors'
      });

      setButtonState('success');
      formRef.current?.reset();
      setSelectedExpectations([]);
      setBudget(currencyRanges[currency].min);
    } catch (error) {
      console.error('Error:', error);
      setButtonState('default');
    }
  };

  return (
    <section className="w-full px-4 md:px-0 py-32 md:py-48 relative">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          Kontakt
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:basis-2/5 flex flex-col gap-6 order-2 lg:order-1">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] text-white rounded-lg p-6 md:p-10 flex flex-col gap-4"
              >
                <p className="text-sm italic">&quot;{item.quote}&quot;</p>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="font-semibold text-base">
                      {item.author}, {item.position}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs opacity-80">
                  <span>{item.company}</span>
                  <div className="flex">
                    {Array.from({ length: item.stars }).map((_, starIndex) => (
                      <StarIcon key={starIndex} className="w-3.5 h-3.5 text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:basis-3/5 order-1 lg:order-2">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full bg-white p-6 md:p-10 rounded-lg flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="fullName" className="text-sm font-semibold block mb-1">
                    Imię i nazwisko
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md p-4 text-sm"
                    placeholder="Twoje imię i nazwisko"
                    disabled={buttonState === 'success'}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="company" className="text-sm font-semibold block mb-1">
                    Twoja firma
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md p-4 text-sm"
                    placeholder="Nazwa Twojej firmy"
                    disabled={buttonState === 'success'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold block mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md p-4 text-sm"
                  placeholder="Twój adres e-mail"
                  disabled={buttonState === 'success'}
                />
              </div>

              <div>
                <label className="text-sm font-semibold block mb-1">
                  Czego od nas oczekujesz?
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Strona internetowa", "Aplikacja mobilna", "Branding", "E-commerce", "Audyt UX/UI", "Inne"].map((option, index) => (
                    <label
                      key={index}
                      className={`cursor-pointer ${buttonState === 'success' ? 'pointer-events-none opacity-50' : ''}`}
                    >
                      <input
                        type="checkbox"
                        name="expectations"
                        value={option}
                        checked={selectedExpectations.includes(option)}
                        onChange={() => handleExpectationsChange(option)}
                        className="peer hidden"
                        disabled={buttonState === 'success'}
                      />
                      <span className="inline-block px-4 py-2 text-sm border border-gray-300 rounded-md hover:border-[#3257A5] hover:text-[#3257A5] peer-checked:bg-[#3257A5] peer-checked:text-white peer-checked:border-[#3257A5] transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>


              <div>
                <label className="text-sm font-semibold block mb-3">
                  Jaki masz budżet?
                </label>
                <div className="flex gap-2 mb-4">
                  {['PLN', 'EUR', 'USD'].map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => {
                        if (buttonState === 'success') return;
                        setCurrency(curr as 'EUR' | 'USD' | 'PLN');
                        setBudget(currencyRanges[curr as keyof typeof currencyRanges].min);
                      }}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${currency === curr
                        ? 'bg-[#3257A5] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        } ${buttonState === 'success' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={buttonState === 'success'}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min={currencyRanges[currency].min}
                  max={currencyRanges[currency].max}
                  step={currency === 'PLN' ? 100 : 100}
                  value={budget}
                  onChange={(e) => {
                    if (buttonState === 'success') return;
                    setBudget(parseInt(e.target.value));
                  }}
                  className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3257A5] ${buttonState === 'success' ? 'opacity-50' : ''
                    }`}
                  disabled={buttonState === 'success'}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{currencyRanges[currency].min.toLocaleString()}{currencySymbols[currency]}</span>
                  <span className="font-bold text-[#1A1A1A]">{budget.toLocaleString()}{currencySymbols[currency]}</span>
                  <span>{currencyRanges[currency].max.toLocaleString()}{currencySymbols[currency]}+</span>
                </div>
              </div>

              <div>
                <label htmlFor="howWeCanHelp" className="text-sm font-semibold block mb-1">
                  Jak możemy Ci pomóc?
                </label>
                <textarea
                  id="howWeCanHelp"
                  name="howWeCanHelp"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  placeholder="Opowiedz nam o swoim produkcie i najbliższych planach dotyczących projektu"
                  rows={6}
                  disabled={buttonState === 'success'}
                ></textarea>
              </div>

              <div className="relative">
                <label htmlFor="howDidYouHear" className="text-sm font-semibold block mb-1">
                  Skąd dowiedziałeś się o nas?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  className="w-full border border-gray-300 rounded-md p-4 pr-10 text-sm appearance-none"
                  disabled={buttonState === 'success'}
                >
                  <option value="-">-</option>
                  <option value="Google">Google</option>
                  <option value="YouTube">YouTube</option>
                  <option value="TikTok">TikTok</option>
                  <option value="ChatGPT">ChatGPT</option>
                  <option value="Perplexity">Perplexity</option>
                  <option value="Blog">Blog</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Reddit">Reddit</option>
                  <option value="Friends">Znajomi</option>
                  <option value="Other">Inne</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6">
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="nda"
                  name="nda"
                  className="mt-1"
                  disabled={buttonState === 'success'}
                />
                <label htmlFor="nda" className="text-sm text-gray-600">
                  Ta wiadomość ma być objęta umową o zachowaniu poufności (NDA).
                </label>
              </div>

              <button
                type="submit"
                disabled={buttonState === 'sending' || buttonState === 'success'}
                className={`btn-primary mt-4 w-full ${buttonState === 'success' ? '!bg-green-600' : ''
                  } ${(buttonState === 'sending' || buttonState === 'success') ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {buttonState === 'sending' && 'WYSYŁANIE...'}
                {buttonState === 'success' && 'WYSŁANO POMYŚLNIE 👍'}
                {buttonState === 'default' && 'WYŚLIJ'}
              </button>



              <p className="text-xs text-gray-600 mt-2">
                Klikając przycisk, wyrażasz zgodę na przetwarzanie danych osobowych
                i akceptujesz Politykę Prywatności strony.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}