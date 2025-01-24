"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent px-4 md:px-0 py-8 mt-12 md:mt-0">
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-[72px] bg-[#1D1E22] rounded-lg">
        <div className="flex flex-col md:flex-row justify-between py-12 md:py-16">
          <div className="flex flex-row md:flex-row md:items-center gap-12">
            <Link href="/">
              <Image
                src="/vectors/letsproject_logo_beige.svg"
                alt="LetsProject Logo"
                width={200}
                height={68}
                className="w-auto h-[68px]"
                priority
              />
            </Link>
            <div className="text-[#F6F4F1] space-y-1">
              <p className="text-xs font-semibold opacity-60">LetsProject</p>
              <div className="text-xs opacity-40 space-y-0.5">
                <p>Kokoszki</p>
                <p>62-330 Nekla, Poland</p>
                <p>+48 884 884 942</p>
                <p>contact@letsproject.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <div className="mb-6 md:mb-8">
              <h3 className="text-[#F6F4F1] text-xs font-semibold mb-2 opacity-60">Navigation</h3>
              <nav className="flex gap-4 md:gap-6">
                <Link href="/projects" className="text-[10px] font-semibold text-[#F6F4F1] opacity-40 hover:text-[#3257A5] hover:opacity-100 transition-all">
                  PROJECTS
                </Link>
                <Link href="/#services" className="text-[10px] font-semibold text-[#F6F4F1] opacity-40 hover:text-[#3257A5] hover:opacity-100 transition-all">
                  SERVICES
                </Link>
                <Link href="/about" className="text-[10px] font-semibold text-[#F6F4F1] opacity-40 hover:text-[#3257A5] hover:opacity-100 transition-all">
                  ABOUT
                </Link>
                <Link href="/career" className="text-[10px] font-semibold text-[#F6F4F1] opacity-40 hover:text-[#3257A5] hover:opacity-100 transition-all">
                  CAREER
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-[#F6F4F1] text-xs font-semibold mb-2 opacity-60">Policies</h3>
              <nav className="flex gap-4 md:gap-6">
                <Link href="/policies/privacy_policy" className="text-[10px] font-semibold text-[#F6F4F1] opacity-40 hover:text-[#3257A5] hover:opacity-100 transition-all">
                  PRIVACY POLICY
                </Link>
                <Link href="/policies/terms_of_service" className="text-[10px] font-semibold text-[#F6F4F1] opacity-40 hover:text-[#3257A5] hover:opacity-100 transition-all">
                  TERMS OF SERVICE
                </Link>
                <Link href="/policies/cookies_policy" className="text-[10px] font-semibold text-[#F6F4F1] opacity-40 hover:text-[#3257A5] hover:opacity-100 transition-all">
                  COOKIES POLICY
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 pb-8">
          <p className="text-[#F6F4F1] text-xs opacity-40">
            ©{currentYear} LetsProject. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
