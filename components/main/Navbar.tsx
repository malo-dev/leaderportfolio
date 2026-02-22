"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/components/sub/LanguageContext";

const Navbar = () => {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            {lang === "fr" ? "IA • Web • Mobile • Cybersécurité" : "AI • Web • Mobile • Cybersecurity"}
          </span>
        </a>

        <div className="hidden lg:flex w-full max-w-[1100px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[25px] py-[12px] rounded-full text-gray-200 gap-6 overflow-x-auto whitespace-nowrap">
            <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
              {lang === "fr" ? "À propos" : "About"}
            </a>
            <a href="#skills" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
              {lang === "fr" ? "Compétences" : "Skills"}
            </a>
            <a href="#experience" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
              {lang === "fr" ? "Expérience" : "Experience"}
            </a>
            {/* Liens Zoho retirés */}
            {/* <a href="#zoho-journey" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
              {lang === "fr" ? "Parcours Zoho" : "Zoho Journey"}
            </a>
            <a href="#zoho-projects" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
              {lang === "fr" ? "Projets Zoho" : "Zoho Projects"}
            </a> */}
            <a href="#projects" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
              {lang === "fr" ? "Autres Projets" : "Other Projects"}
            </a>
            {/* Section contact temporairement masquée */}
            {/* <a href="#contact" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
              {lang === "fr" ? "Contact" : "Contact"}
            </a> */}
            <a href="https://dev.to/malodev_38/parlons-un-peu-du-tdd-2jkh" className="cursor-pointer hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap" target="_blank" rel="noopener noreferrer">
              {lang === "fr" ? "Blog" : "Blog"}
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <button
            onClick={toggleLanguage}
            aria-label={lang === "fr" ? "Basculer en anglais" : "Switch to French"}
            className="px-3 py-1 text-xs font-semibold rounded-full border border-[#7042f861] text-gray-200 hover:text-white hover:border-purple-400"
          >
            {lang === "fr" ? "FR" : "EN"}
          </button>
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
