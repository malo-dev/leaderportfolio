'use client';

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const experiences = [
  {
    title: "Consultant & Expert Zoho",
    company: "Bim Africa",
    period: "2023 - 2024",
    description: "Déploiement complet de Zoho CRM et Zoho Books pour des PME et ONG. Automatisation des processus de vente et de facturation. Intégration Zoho avec Shopify, QuickBooks et Google Workspace. Formation de plus de 100 utilisateurs.",
    technologies: ["Zoho CRM", "Zoho Books", "Intégrations API", "Formation"],
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    title: "Administrateur Systèmes & Solutions Cloud",
    company: "CIRTMSS",
    period: "2022 - 2023",
    description: "Mise en place de tableaux de bord interactifs pour le suivi des KPIs. Gestion des solutions Zoho pour la relation client et la comptabilité. Migration de données depuis systèmes existants vers Zoho. Développement d'applications internes sur Zoho Creator.",
    technologies: ["Zoho Analytics", "Migration de données", "Zoho Creator", "Tableaux de bord"],
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  },
  {
    title: "Chef de Projet & Intégrateur Zoho",
    company: "RADPI, ONG",
    period: "2021 - 2022",
    description: "Support technique de niveau 2 pour les utilisateurs. Pilotage de l'implémentation complète de Zoho CRM et Zoho Desk. Création de workflows automatisés pour le suivi des prospects. Formation des équipes sur l'utilisation optimale des outils Zoho.",
    technologies: ["Zoho CRM", "Zoho Desk", "Workflows", "Support technique"],
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: "Développeur d'Applications Personnalisées Zoho",
    company: "Assodip",
    period: "2019 - 2020",
    description: "Conception et développement d'applications métiers sur Zoho Creator. Intégration des applications Zoho avec des systèmes ERP. Création de tableaux de bord interactifs pour le suivi en temps réel.",
    technologies: ["Zoho Creator", "Deluge Script", "Intégrations ERP", "Tableaux de bord"],
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
              {" "}Zoho
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert certifié en solutions Zoho avec plus de 5 ans d&apos;expérience dans l&apos;implémentation 
            et le développement d&apos;applications métier sur l&apos;écosystème Zoho.
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
                  
                  <div className="flex justify-end">
                    <a
                      href="https://github.com/malo-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <span>Lire plus</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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