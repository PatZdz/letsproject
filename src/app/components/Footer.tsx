"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent px-4 md:px-0 py-8">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-[42px] bg-[#1D1E22] rounded-lg h-auto md:h-[320px]">
        <div className="flex flex-col md:flex-row h-full py-8 md:py-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-8 md:w-2/5">
            <Link href="/">
              <Image
                src="/letsproject_logo_beige.svg"
                alt="LetsProject Logo"
                width={160}
                height={54}
                className="w-auto h-[54px]"
                priority
              />
            </Link>
            <div className="text-[#F6F4F1] space-y-2">
              <p className="text-sm font-semibold">LetsProject Sp. z o.o.</p>
              <div className="text-sm opacity-80 space-y-1">
                <p>123 Tech Street</p>
                <p>00-001 Warsaw, Poland</p>
                <p>+48 123 456 789</p>
                <p>contact@letsproject.com</p>
              </div>
            </div>
          </div>

          {/* Right side navigation columns */}
          <div className="flex justify-end mt-8 md:mt-0 md:w-3/5 gap-16">
            {/* Navigation Column */}
            <div>
              <h3 className="text-[#F6F4F1] text-sm font-semibold mb-4">Navigation</h3>
              <nav className="flex flex-col gap-3">
                <Link href="#projects" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  PROJECTS
                </Link>
                <Link href="#services" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  SERVICES
                </Link>
                <Link href="#pricing" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  PRICING
                </Link>
                <Link href="#about" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  ABOUT
                </Link>
                <Link href="#resources" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  CAREER
                </Link>
              </nav>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-[#F6F4F1] text-sm font-semibold mb-4">Legal</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/privacy" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  PRIVACY POLICY
                </Link>
                <Link href="/terms" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  TERMS OF SERVICE
                </Link>
                <Link href="/cookies" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5] transition-colors">
                  COOKIES POLICY
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
