"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Projects() {
    const router = useRouter();

    const projects = [
        {
            title: "FitWise",
            subtitle: "Aplikacja do zarządzania studiami fitness",
            image: "/images/project_1.webp",
            logo: "/vectors/client_logo_2.svg",
            logoWidth: 120,
            logoHeight: 40,
            link: "/projects/fitwise",
        },
        {
            title: "Hido",
            subtitle: "Sklep internetowy oraz branding dla startupu meblarskiego",
            image: "/images/project_2.webp",
            logo: "/vectors/client_logo_4.svg",
            logoWidth: 120,
            logoHeight: 40,
            link: "/projects/hido",
        },
        {
            title: "Kukka Kukka",
            subtitle: "Fińska aplikacja mobilna do zamiawiania kwiatów",
            image: "/images/project_3.jpg",
            logo: "/vectors/client_logo_1.svg",
            logoWidth: 120,
            logoHeight: 40,
            link: "/projects/lens",
        },
        {
            title: "AutoSwift",
            subtitle: "System zarządzania wypożyczalności samochodów",
            image: "/images/project_4.jpg",
            logo: "/vectors/client_logo_4.svg",
            logoWidth: 120,
            logoHeight: 40,
            link: "/projects/ecotrack",
        },
    ];

    return (
        <section id="projects" className="py-12 md:py-20 bg-[#F6F4F1]">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0">
                <h2 className="text-2xl md:text-[36px] font-extrabold text-center text-[#1A1A1A] mb-8 md:mb-12">
                    Projekty
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-[#F0EEEC] rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
                            onClick={() => router.push(project.link)}
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Project`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="p-6 text-center">
                                <Image
                                    src={project.logo}
                                    alt={`${project.title} Logo`}
                                    width={project.logoWidth}
                                    height={project.logoHeight}
                                    className="mx-auto mb-4 transition-opacity duration-300 group-hover:opacity-80"
                                />
                                <h3 className="text-lg text-[#4b5563] transition-colors duration-300 group-hover:text-[#3257A5]">
                                    {project.subtitle}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}