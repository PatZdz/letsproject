"use client";

import React, { useState } from "react";
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
      "LetsProject has transformed our brand with a stunning new identity and a website that perfectly reflects our vision. Their attention to detail and creativity made the entire process a breeze.",
    author: "Daniel Semerjyan",
    position: "Co-Founder",
    company: "FitWise",
    stars: 5,
  },
  {
    quote:
      "Thanks to LetsProject, our new website is not only visually stunning but also incredibly fast and responsive. Our customers love the seamless experience, and we&apos;ve seen a noticeable increase in engagement.",
    author: "Marcin Zaremski",
    position: "Founder",
    company: "GPX Overlay",
    stars: 5,
  },
  {
    quote:
      "The mobile app developed by LetsProject exceeded all our expectations. It&apos;s user-friendly, beautifully designed, and runs flawlessly. We&apos;ve received amazing feedback from our users!",
    author: "Piotr Kluk",
    position: "Co-Founder",
    company: "Hido",
    stars: 5,
  },
];

export default function ContactForm() {
  const [budget, setBudget] = useState(1000);
  const [currency, setCurrency] = useState<'EUR' | 'USD' | 'PLN'>('EUR');

  const currencySymbols = {
    EUR: '€',
    USD: '$',
    PLN: 'zł'
  };

  const currencyRanges = {
    EUR: { min: 1000, max: 50000 },
    USD: { min: 1000, max: 50000 },
    PLN: { min: 2000, max: 200000 }
  };

  return (
    <section className="w-full px-4 md:px-0 py-32 md:py-48">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[36px] font-extrabold text-center text-[#1A1A1A] mb-12">
          Contact
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
            <form className="w-full bg-white p-6 md:p-10 rounded-lg flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold block mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-4 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="company"
                    className="text-sm font-semibold block mb-1"
                  >
                    Your company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-4 text-sm"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold block mb-1"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-4 text-sm"
                  placeholder="Your e-mail"
                />
              </div>

              <div>
                <label className="text-sm font-semibold block mb-1">
                  What do you expect from us?
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Website", "Mobile App", "Branding", "Ecommerce", "UXUI Audit"].map((option, index) => (
                    <label
                      key={index}
                      className="cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="expectations"
                        value={option}
                        className="peer hidden"
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
                  What budget do you have?
                </label>
                <div className="flex gap-2 mb-4">
                  {['EUR', 'USD', 'PLN'].map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => {
                        setCurrency(curr as 'EUR' | 'USD' | 'PLN');
                        setBudget(currencyRanges[curr as keyof typeof currencyRanges].min);
                      }}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        currency === curr 
                          ? 'bg-[#3257A5] text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min={currencyRanges[currency].min}
                  max={currencyRanges[currency].max}
                  step={currency === 'PLN' ? 2000 : 1000}
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3257A5]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{currencyRanges[currency].min.toLocaleString()}{currencySymbols[currency]}</span>
                  <span className="font-bold text-[#1A1A1A]">{budget.toLocaleString()}{currencySymbols[currency]}</span>
                  <span>{currencyRanges[currency].max.toLocaleString()}{currencySymbols[currency]}+</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="howWeCanHelp"
                  className="text-sm font-semibold block mb-1"
                >
                  How can we help you?
                </label>
                <textarea
                  id="howWeCanHelp"
                  name="howWeCanHelp"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  placeholder="Tell us about your product and your nearest plans on the design engagement"
                  rows={6}
                ></textarea>
              </div>

              <div className="relative">
                <label
                  htmlFor="howDidYouHear"
                  className="text-sm font-semibold block mb-1"
                >
                  How did you hear about us?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  className="w-full border border-gray-300 rounded-md p-4 pr-10 text-sm appearance-none"
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
                  <option value="Friends">Friends</option>
                  <option value="Other">Other</option>
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
                />
                <label htmlFor="nda" className="text-sm text-gray-600">
                  This message is to be covered by a Non-Disclosure Agreement (NDA).
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary mt-4 w-full"
              >
                SEND
              </button>
              <p className="text-xs text-gray-600 mt-2">
                By clicking on the button, you consent to the processing of
                personal data and agree to the site&apos;s Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
