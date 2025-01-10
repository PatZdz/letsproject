"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setShowNavbar(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);
  return (
    <header
      className={`fixed w-full top-0 z-50 bg-transparent mt-4 ${
        showNavbar ? "translate-y-0" : "translate-y-[-150%]"
      } transition-transform duration-300`}
    >
      <div className="w-full max-w-[1200px] mx-auto pl-[22px] pr-[22px] py-4 bg-[#1D1E22] shadow-md rounded-lg">
        <nav className="flex items-center relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/letsproject_logo_beige.svg"
                alt="LetsProject Logo"
                width={108}
                height={36}
                className="w-auto h-[36px]"
                priority
              />
            </Link>
          </div>

          {/* Navigation - now absolutely centered */}
          <ul className="hidden md:flex gap-6 items-center absolute left-1/2 transform -translate-x-1/2">
            <li>
              <Link href="#projects" className="text-[12px] text-[#F6F4F1] hover:text-primary">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-[12px] text-[#F6F4F1] hover:text-primary">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-[12px] text-[#F6F4F1] hover:text-primary">
                PRICING
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-[12px] text-[#F6F4F1] hover:text-primary">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#resources" className="text-[12px] text-[#F6F4F1] hover:text-primary">
                CAREER
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <button
            className="hidden md:block px-10 py-4 bg-[#3257A5] text-[#F6F4F1] text-[12px] rounded-lg hover:bg-[#2A4A8E] transition-colors duration-200 ml-auto"
            onClick={() => alert("Contact us clicked")}
          >
            CONTACT US
          </button>
        </nav>
      </div>
    </header>
  );
}
