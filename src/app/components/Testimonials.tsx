"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
    author: string;
    company: string;
    text: string;
    logo: string;
    rating: number;
}

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            author: 'Daniel Semerjyan',
            company: 'FitWise',
            text: 'LetsProject przekształcił naszą markę dzięki oszałamiającej nowej tożsamości i stronie internetowej. Ich profesjonalne podejście i dbałość o szczegóły sprawiły, że projekt został zrealizowany bezbłędnie, dokładnie według naszej wizji.',
            logo: '/vectors/client_logo_2.svg',
            rating: 5
        },
        {
            author: 'Marcin Zaremski',
            company: 'GPX Overlay',
            text: 'LetsProject stworzył dla nas nowoczesną i responsywną stronę internetową, która zachwyca użytkowników swoją estetyką. Dzięki ich pracy znacząco wzrosło zaangażowanie klientów i efektywność naszego biznesu online.',
            logo: '/vectors/client_logo_3.svg',
            rating: 5
        },
        {
            author: 'Piotr Kluk',
            company: 'Hido',
            text: 'LetsProject dostarczył nam aplikację mobilną, która przewyższyła nasze oczekiwania pod każdym względem. Intuicyjny interfejs i niezawodne działanie sprawiły, że nasi użytkownicy są zachwyceni finalnym produktem.',
            logo: '/vectors/client_logo_1.svg',
            rating: 5
        },
        {
            author: 'Anna Kowalska',
            company: 'TechCorp',
            text: 'LetsProject pomógł nam stworzyć aplikację, która idealnie odpowiada potrzebom naszych użytkowników. Profesjonalne podejście zespołu i doskonała komunikacja przyczyniły się do sukcesu projektu. To jest to czego szukasz!',
            logo: '/vectors/client_logo_4.svg',
            rating: 4
        },
        {
            author: 'Jan Nowak',
            company: 'InnovateX',
            text: 'LetsProject zrealizował nasz projekt zgodnie z najnowszymi trendami w designie i funkcjonalności. Ich kreatywne podejście i techniczna doskonałość pozwoliły nam osiągnąć wszystkie założone cele biznesowe.',
            logo: '/vectors/client_logo_5.svg',
            rating: 5
        },
    ];

    const renderStars = (rating: number) => {
        return Array(rating).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/about_3.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
            <div className="absolute inset-0 opacity-10 bg-pattern"></div>

            <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center gap-8 md:gap-12">
                    {/* Testimonial Content */}
                    <div className="w-full md:w-2/3">
                        <div className="p-8 md:p-10 min-h-[350px]">
                            <div className="flex items-center mb-6">
                                <Image
                                    src={testimonials[activeIndex].logo}
                                    alt={`${testimonials[activeIndex].company} logo`}
                                    width={120}
                                    height={40}
                                    className="mr-4 brightness-0 invert"
                                />
                                <div className="flex">
                                    {renderStars(testimonials[activeIndex].rating)}
                                </div>
                            </div>

                            <p className="text-[#F6F4F1] text-lg md:text-xl italic mb-6">
                                &quot;{testimonials[activeIndex].text}&quot;
                            </p>

                            <div className="text-[#F6F4F1]">
                                <p className="font-semibold">{testimonials[activeIndex].author}</p>
                                <p className="text-sm text-[#9CA3AF]">{testimonials[activeIndex].company}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
                        <div className="flex md:flex-row justify-start md:justify-center gap-4 md:gap-16 mt-8 min-w-max md:min-w-0 px-4 md:px-0">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`transition-all duration-300 px-6 py-3 md:px-4 md:py-2 min-w-[120px] md:min-w-[150px] rounded-lg flex items-center justify-center ${activeIndex === index ? 'bg-[#3257A5] scale-95' : 'hover:bg-[#3257A5]/20'}`}
                                >
                                    <Image
                                        src={testimonial.logo}
                                        alt={`${testimonial.company} logo`}
                                        width={60}
                                        height={24}
                                        className="brightness-0 invert transition-all duration-500 transform hover:scale-105"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}