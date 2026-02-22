
"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const portfolioProjects = [
  {
    id: 1,
    title: "Plateforme IA pour l'Analyse Médicale",
    client: "CIRTMSS",
    period: "2022 - 2023",
    description: "R&D et développement d'une plateforme IA pour l'analyse des données médicales : tableaux de bord temps réel, détection d'anomalies et alertes intelligentes.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Next.js", "PostgreSQL"],
    features: [
      "Tableaux de bord intelligents",
      "Pipeline de données temps réel",
      "Détection d'anomalies",
      "Alertes et reporting",
      "Sécurité et conformité"
    ],
    results: [
      "Amélioration de 70% de la visibilité opérationnelle",
      "Réduction de 50% des erreurs manuelles",
      "Automatisation end-to-end des processus"
    ],
    screenshot: "/dash.png",
    isInternal: true
  },
  {
    id: 2,
    title: "Application Mobile & Web de Gestion",
    client: "Bim Africa",
    period: "2023 - 2024",
    description: "Développement d'une application mobile et web intégrée pour la gestion de clients, paiements, et reporting. Architecture full-stack moderne et sécurisée.",
    technologies: ["React Native", "Next.js", "Node.js", "Stripe", "MongoDB"],
    features: [
      "Gestion de pipeline et CRM léger",
      "Intégration paiements mobiles",
      "Tableaux de bord temps réel",
      "Email & notifications",
      "Rapports avancés"
    ],
    results: [
      "+40% taux de conversion",
      "-60% temps de traitement",
      "+35% satisfaction utilisateur"
    ],
    screenshot: "/Dashboard.png",
    isInternal: false
  },
  {
    id: 3,
    title: "Portail Support & Knowledge Base",
    client: "RADPI, ONG",
    period: "2021 - 2022",
    description: "Mise en place d'un portail de support avec système de tickets, base de connaissances, intégrations et automation pour améliorer l'expérience utilisateur.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "ElasticSearch", "Docker"],
    features: [
      "Tickets & SLA",
      "Base de connaissances",
      "Intégration CRM",
      "Rapports de performance",
      "Automatisation"
    ],
    results: [
      "-45% temps de résolution",
      "+60% satisfaction",
      "+80% traçabilité"
    ],
    screenshot: "/dash.png",
    isInternal: true
  },
  {
    id: 4,
    title: "Application Métier Personnalisée",
    client: "Assodip",
    period: "2019 - 2020",
    description: "Conception d'une application métier pour la gestion des membres, événements et finances, avec application mobile et automation.",
    technologies: ["React", "Node.js", "React Native", "REST APIs", "MySQL"],
    features: [
      "Gestion des membres",
      "Événements & planification",
      "Gestion financière",
      "Application mobile",
      "Notifications automatiques"
    ],
    results: [
      "Automatisation complète",
      "-70% travail administratif",
      "+90% communication"
    ],
    screenshot: "/Dashboard.png",
    isInternal: true
  }
];

const ProjectsSection = () => {

  return (
    <section id="projects" className="relative w-full min-h-screen py-20 px-4 md:px-8">
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
              {" "}IA • Web • Mobile • Cybersécurité
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations orientées IA, Web, Mobile et Cybersécurité : plateformes intelligentes, applications performantes et intégrations sécurisées.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
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
              Vous avez un projet IA, Web, Mobile ou Cybersécurité ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
{"              Je peux vous accompagner dans la conception et l'implémentation d'une solution sur mesure, performante et sécurisée."}
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

export default ProjectsSection;