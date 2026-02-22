"use client"
import React from "react";
import { useLanguage } from "@/components/sub/LanguageContext";

const SkillText = () => {
  const { lang } = useLanguage();
  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
        {lang === "fr" ? "Compétences Clés" : "Key Skills"}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> {lang === "fr" ? "IA • Web • Mobile • Cybersécurité" : "AI • Web • Mobile • Cybersecurity"}</span>
      </h2>
      <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
        {lang === "fr"
          ? "Expertise en IA (LLMs, NLP, Vision), développement Web & Mobile, DevOps, et Sécurité applicative."
          : "Expertise in AI (LLMs, NLP, Vision), Web & Mobile development, DevOps, and Application Security."}
      </p>
    </div>
  );
};

export default SkillText;