/* eslint-disable react/no-unescaped-entities */
'use client';

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const experiences = [
  {
    title: "Ingénieur Étude et Développement (IA • Web • Mobile • Cybersécurité)",
    company: "Tech Projects",
    period: "2024 - 2026",
    description: "Conception d'architectures cloud-native, intégration IA (LLMs, NLP) dans les workflows métiers, sécurité applicative et mobile (OWASP), mise en place de CI/CD et monitoring.",
    technologies: ["IA", "LLMs", "NLP", "Node.js", "TypeScript", "React Native", "CI/CD", "OWASP"],

    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    title: "Développeur Backend (Python, Node.js, Express, TypeScript)",
    company: "Projets divers",
    period: "2019 - 2024",
    description:
      "Conception d'API REST sécurisées, services backend en TypeScript, intégrations avec bases de données (PostgreSQL/MySQL/MongoDB), scripts et automations en Python.",
    technologies: ["Node.js", "Express", "TypeScript", "Python", "PostgreSQL", "MySQL", "MongoDB"],
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14H7v-2h4v2zm6-4H7V10h10v2zm0-4H7V6h10v2z" />
      </svg>
    ),
  },
  {
    title: "Administrateur Systèmes & Solutions Cloud",
    company: "CIRTMSS",
    period: "2022 - 2023",
    description: "Mise en place de tableaux de bord interactifs pour le suivi des KPIs. Gestion des infrastructures et sécurité, migration de données et automatisation des processus.",
    technologies: ["DevOps", "Monitoring", "Docker", "Kubernetes", "Dashboards"],

    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  },
  {
    title: "Chef de Projet & Intégrateur",
    company: "RADPI, ONG",
    period: "2021 - 2022",
    description: "Support technique de niveau 2 pour les utilisateurs. Pilotage de l'implémentation complète d'outils CRM et Desk. Création de workflows automatisés pour le suivi des prospects. Formation des équipes.",
    technologies: ["CRM", "Helpdesk", "Workflows", "Support technique"],

    icon: (
      <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: "Développeur d'Applications Personnalisées",
    company: "Assodip",
    period: "2019 - 2020",
    description: "Conception et développement d'applications métiers personnalisées. Intégrations avec des systèmes ERP. Création de tableaux de bord interactifs pour le suivi en temps réel.",
    technologies: ["Custom Apps", "ERP", "Dashboards", "Widgets"],

    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    )
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E]" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Tech
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ingénieur Étude et Développement avec 6 ans d'expérience, couvrant IA, Web, Mobile, Sécurité et DevOps.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row items-start gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#1A1A2E] to-[#16213E] border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-cyan-400 font-medium bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20 mt-2 lg:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Experience;