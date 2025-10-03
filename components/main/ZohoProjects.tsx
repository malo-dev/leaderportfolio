"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const zohoProjects = [
  {
    id: 1,
    title: "Plateforme de Gestion Hospitalière - CIRTMSS",
    client: "CIRTMSS",
    period: "2022 - 2023",
    description: "Développement d&apos;une solution complète de gestion hospitalière utilisant Zoho Creator et Analytics. Gestion des patients, rendez-vous, personnel médical et facturation avec tableaux de bord interactifs.",
    technologies: ["Zoho Creator", "Zoho Analytics", "Zoho Books", "Custom Functions", "Deluge Script"],
    features: [
      "Gestion complète des dossiers patients",
      "Système de prise de rendez-vous en ligne",
      "Gestion du personnel médical et des plannings",
      "Facturation automatisée",
      "Tableaux de bord médicaux en temps réel"
    ],
    results: [
      "Digitalisation complète des processus",
      "Réduction de 50% des erreurs administratives",
      "Amélioration de 70% de l&apos;efficacité opérationnelle"
    ],
    screenshot: "/dash.png",
    isInternal: true
  },
  {
    id: 2,
    title: "Système CRM Complet - Bim Africa",
    client: "Bim Africa",
    period: "2023 - 2024",
    description: "Implémentation complète d&apos;un système CRM Zoho pour gérer plus de 5000 clients et prospects. Automatisation des processus de vente, intégration avec les systèmes de paiement mobile et création de tableaux de bord personnalisés.",
    technologies: ["Zoho CRM", "Zoho Books", "API Integration", "Workflows", "Analytics"],
    features: [
      "Gestion de pipeline de vente automatisée",
      "Intégration avec systèmes de paiement mobile",
      "Tableaux de bord en temps réel",
      "Automatisation des emails de suivi",
      "Rapports de performance avancés"
    ],
    results: [
      "Augmentation de 40% du taux de conversion",
      "Réduction de 60% du temps de traitement des leads",
      "Amélioration de 35% de la satisfaction client"
    ],
    screenshot: "/zoho-crm-mockup.svg",
    isInternal: false
  },
  {
    id: 3,
    title: "Solution de Support Client - RADPI ONG",
    client: "RADPI, ONG",
    period: "2021 - 2022",
    description: "Mise en place d&apos;un système de support client complet avec Zoho Desk et CRM. Création de workflows automatisés pour le suivi des demandes et formation des équipes.",
    technologies: ["Zoho Desk", "Zoho CRM", "Workflows", "SLA Management", "Knowledge Base"],
    features: [
      "Système de tickets automatisé",
      "Base de connaissances interactive",
      "Gestion des SLA et escalades",
      "Intégration CRM pour suivi client",
      "Rapports de performance du support"
    ],
    results: [
      "Réduction de 45% du temps de résolution",
      "Augmentation de 60% de la satisfaction client",
      "Amélioration de 80% de la traçabilité des demandes"
    ],
    screenshot: "/zoho-orders-mockup.svg",
    isInternal: true
  },
  {
    id: 4,
    title: "Application Métier Personnalisée - Assodip",
    client: "Assodip",
    period: "2019 - 2020",
    description: "Conception et développement d&apos;une application métier sur Zoho Creator pour la gestion des membres, événements et finances de l&apos;association.",
    technologies: ["Zoho Creator", "Deluge Script", "Custom Widgets", "API Integration", "Mobile App"],
    features: [
      "Gestion complète des membres",
      "Planification et suivi des événements",
      "Gestion financière et comptable",
      "Application mobile native",
      "Système de notifications automatiques"
    ],
    results: [
      "Automatisation complète des processus",
      "Réduction de 70% du travail administratif",
      "Amélioration de 90% de la communication interne"
    ],
    screenshot: "/Dashboard.png",
    isInternal: true
  }
];

const ZohoProjects = () => {

  return (
    <section id="zoho-projects" className="relative w-full min-h-screen py-20 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Projets
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {" "}Zoho Réalisés
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations concrètes avec l&apos;écosystème Zoho : systèmes CRM, applications métier, 
            solutions de gestion et automatisations pour diverses entreprises et organisations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {zohoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-purple-400 font-medium">{project.client}</p>
                    <p className="text-gray-400 text-sm">{project.period}</p>
                  </div>
                  {project.isInternal && (
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">
                      Projet Interne
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Project Screenshot */}
              <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 overflow-hidden">
                <Image
                  src={project.screenshot}
                  alt={`Capture d'écran du projet ${project.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-medium">
                    {project.isInternal ? "Interface personnalisée" : "Démo interactive"}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="p-6">
                <h4 className="text-white font-semibold mb-3">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <h4 className="text-white font-semibold mb-3">Fonctionnalités clés</h4>
                <ul className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Results */}
                <h4 className="text-white font-semibold mb-3">Résultats obtenus</h4>
                <div className="space-y-2">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Besoin d&apos;une solution Zoho personnalisée ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Fort de mon expérience sur ces projets, je peux vous accompagner dans la conception 
              et l&apos;implémentation de votre solution Zoho sur mesure.
            </p>
            <a
              href="#contact"
              className="inline-block py-3 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
            >
              Discutons de votre projet
            </a>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default ZohoProjects;