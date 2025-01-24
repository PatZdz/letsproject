"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

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
      
      if (isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen, setIsDrawerOpen]);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
  }, [isDrawerOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-transparent mt-4 px-4 md:px-0 ${
        showNavbar ? "translate-y-0" : "translate-y-[-150%]"
      } transition-transform duration-300`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-[22px] py-4 bg-[#1D1E22] shadow-md rounded-lg relative z-20">
        <nav className="flex items-center relative">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/vectors//letsproject_logo_beige.svg"
                alt="LetsProject Logo"
                width={108}
                height={36}
                className="w-auto h-[36px]"
                priority
              />
            </Link>
          </div>

          <ul className="hidden md:flex gap-6 items-center absolute left-1/2 transform -translate-x-1/2">
            <li>
              <Link href="/projects" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5]">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5]">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5]">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/career" className="text-[12px] font-semibold text-[#F6F4F1] hover:text-[#3257A5]">
                CAREER
              </Link>
            </li>
          </ul>
          <Link href="/contact" className="hidden md:block btn-primary ml-auto">
            CONTACT US
          </Link>

          <button
            className="md:hidden ml-auto text-[#F6F4F1]"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      <div className={`fixed left-0 right-0 px-4 z-10 ${!isDrawerOpen ? 'pointer-events-none' : ''}`}>
        <div
          className={`w-full max-w-[1200px] mx-auto bg-[#1D1E22] shadow-md rounded-lg mt-2 transition-all duration-300 origin-top ${
            isDrawerOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
        >
          <nav className="py-16 flex flex-col items-center space-y-8">
            <Link 
              href="/projects" 
              className="text-[16px] font-semibold text-[#F6F4F1]"
              onClick={() => setIsDrawerOpen(false)}
            >
              PROJECTS
            </Link>
            <Link 
              href="/#services" 
              className="text-[16px] font-semibold text-[#F6F4F1]"
              onClick={() => setIsDrawerOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              href="/about" 
              className="text-[16px] font-semibold text-[#F6F4F1]"
              onClick={() => setIsDrawerOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/career" 
              className="text-[16px] font-semibold text-[#F6F4F1]"
              onClick={() => setIsDrawerOpen(false)}
            >
              CAREER
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary mt-8"
              onClick={() => setIsDrawerOpen(false)}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
