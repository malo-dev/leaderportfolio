"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useLanguage } from "@/components/sub/LanguageContext";

const HeroContent = () => {
  const { lang } = useLanguage();
  const title = lang === "fr" ? "Portfolio IA • Web • Mobile • Cybersécurité" : "AI • Web • Mobile • Cybersecurity Portfolio";
  const heroIntroA = lang === "fr" ? "Je suis" : "I am";
  const heroName = "MUSHIO ATAULWA LEADER";
  const heroRole = lang === "fr" ? "Ingénieur Étude et Développement • IA • Web • Mobile • Cybersécurité" : "R&D Engineer • AI • Web • Mobile • Cybersecurity";
  const heroDesc = lang === "fr"
    ? "Ingénieur Étude et Développement avec 6 ans d'expérience: IA (LLMs, NLP, computer vision), Web (React, Next.js, Vue, TypeScript), Mobile (React Native), DevOps (Docker, Kubernetes), Sécurité (OWASP, Auth, CI/CD) et plateformes (Vercel, GitHub)."
    : "R&D Engineer with 6 years of experience: AI (LLMs, NLP, computer vision), Web (React, Next.js, Vue, TypeScript), Mobile (React Native), DevOps (Docker, Kubernetes), Security (OWASP, Auth, CI/CD) and platforms (Vercel, GitHub).";
  const moreBtn = lang === "fr" ? "En savoir plus" : "Learn more";
  const modalTitle = lang === "fr" ? "Mon Parcours" : "My Journey";
  const modalSubtitle = lang === "fr" ? "Focus: IA • Web • Mobile • Cybersécurité" : "Focus: AI • Web • Mobile • Cybersecurity";
  const modalSection1 = lang === "fr" ? "Parcours Professionnel" : "Professional Background";
  const modalSection2 = lang === "fr" ? "Compétences Techniques" : "Technical Skills";

  const skillLines = (lang === "fr"
    ? [
        'IA - LLMs, NLP, Computer Vision',
        'Backend - Node.js, Express, TypeScript',
        'Frontend - HTML, CSS, Tailwind, React, Next.js, Vue',
        'Mobile - React Native',
        'Sécurité - OWASP, Auth, CI/CD',
        'DevOps - Docker, Kubernetes',
        'Plateformes - Vercel, GitHub',
        'CMS & e-commerce - WordPress, Shopify'
      ]
    : [
        'AI - LLMs, NLP, Computer Vision',
        'Backend - Node.js, Express, TypeScript',
        'Frontend - HTML, CSS, Tailwind, React, Next.js, Vue',
        'Mobile - React Native',
        'Security - OWASP, Auth, CI/CD',
        'DevOps - Docker, Kubernetes',
        'Platforms - Vercel, GitHub',
        'CMS & e-commerce - WordPress, Shopify'
      ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 sm:mt-32 lg:mt-40 w-full z-[20] gap-8 lg:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {title}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            {heroIntroA}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {heroName}{" "}
            </span>
            {heroRole}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          {heroDesc}
        </motion.p>
        <motion.button
          variants={slideInFromLeft(1)}
          onClick={() => setIsModalOpen(true)}
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:scale-105 transition-transform duration-300 font-semibold"
        >
          {moreBtn}
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center order-first lg:order-last"
      >
        <Image
          src="/mainIconsdark.svg"
          alt={lang === "fr" ? "icônes de travail" : "work icons"}
          height={650}
          width={650}
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] h-auto"
        />
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-purple-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{modalTitle}</h3>
                  <p className="text-purple-400 font-medium">{modalSubtitle}</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">{modalSection1}</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-4 border border-purple-500/20">
                      <h5 className="text-purple-400 font-semibold mb-2">{lang === "fr" ? "Ingénieur Étude et Développement (2024-2026)" : "R&D Engineer (2024-2026)"}</h5>
                      <p className="text-gray-300 text-sm mb-2">{lang === "fr" ? "Projets Tech" : "Tech Projects"}</p>
                      <p className="text-gray-400 text-sm">{lang === "fr" ? "Conception et développement d'architectures cloud-native, intégration IA (LLMs) dans des workflows métiers, sécurité applicative et mobile (OWASP), mise en place de CI/CD et monitoring." : "Design and development of cloud-native architectures, AI (LLMs) integration in business workflows, application and mobile security (OWASP), CI/CD setup and monitoring."}</p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20">
                      <h5 className="text-cyan-400 font-semibold mb-2">{lang === "fr" ? "Développeur Full-Stack (2019-2024)" : "Full-Stack Developer (2019-2024)"}</h5>
                      <p className="text-gray-300 text-sm mb-2">{lang === "fr" ? "Entreprise privée" : "Private Company"}</p>
                      <p className="text-gray-400 text-sm">{lang === "fr" ? "Développement web et mobile, APIs sécurisées, intégrations tierces, optimisation des performances et bonnes pratiques DevOps." : "Web and mobile development, secure APIs, third-party integrations, performance optimization and DevOps best practices."}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-cyan-400 font-semibold mb-3">{modalSection2}</h5>
                  <div className="space-y-2">
                    {skillLines.map((skill, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HeroContent;
