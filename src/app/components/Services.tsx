"use client";

import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();
  
  const services = [
    {
      title: "Website Development",
      description:
        "We build high-performing, responsive websites and online stores with clean code and intuitive architecture. Whether you need a promotional landing page or a fully featured corporate site, our team ensures fast load times and outstanding user experiences.",
      tags: ["web design", "web apps", "custom solutions", "ecommerce"],
      icon: "/images/service_1.png",
    },
    {
      title: "Mobile App Development",
      description:
        "Reach users on the go with cross-platform apps built in Flutter. We transform your vision into a dynamic mobile experience—complete with push notifications, in-app purchases, and seamless integration with your existing systems.",
      tags: ["cross-platform apps", "app development", "custom solutions"],
      icon: "/images/service_2.png",
    },
    {
      title: "Branding Design",
      description:
        "Stand out from the competition with a memorable brand identity. We craft your logo, define color palettes, select typography, and develop brand guidelines that communicate your core values effectively. Great logo is your first impression.",
      tags: ["brand strategy", "logo design", "social media", "brand guidelines"],
      icon: "/images/service_3.png",
    },
    {
      title: "UX/UI Audits & Design",
      description:
        "Our UX/UI audits pinpoint pain points and optimize user flows, reducing friction and boosting engagement. Get a sleek, user-friendly interface that keeps customers coming back. Boost your conversion and earn more money.",
      tags: ["user experience", "user interface", "boosted conversion"],
      icon: "/images/service_4.png",
    },
  ];

  return (
    <section id="services" className="py-8 md:py-16 bg-[#F6F4F1]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
        <h2 className="text-2xl md:text-[36px] font-extrabold text-center mb-6 md:mb-8 text-[#1A1A1A]">
          What we can do for you boss
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F0EEEC] rounded-lg p-6 md:p-[30px] flex flex-col"
            >
              <div className="flex gap-4 md:gap-6 mb-2 md:mb-6">
                <div className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] rounded-full bg-[#E9E3DD] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={42}
                    height={42}
                  />
                </div>
                <div className="h-[60px] md:h-[76px] flex flex-col justify-center md:justify-between">
                  <h3 className="font-semibold text-2xl md:text-[30px] text-[#1A1A1A]">
                    {service.title}
                  </h3>
                  <div className="hidden md:flex md:flex-wrap md:gap-[4px]">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-[11px] font-normal bg-[#E9E3DD] text-[#9D958B] rounded-full border border-[#9D958B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#4b5563] mb-4">{service.description}</p>
              <button 
                onClick={() => alert("I'm pressed")} 
                className="btn-secondary self-end cursor-pointer"
              >
                I NEED THIS! <ArrowRightIcon className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <p className="text-xl md:text-[24px] font-semibold text-[#1D1E22] mb-4">
            Do you need a project that includes multiple services?
          </p>
          <button 
            onClick={() => router.push('/contact')} 
            className="btn-primary"
          >
            GET A FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
