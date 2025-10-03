'use client';

import React from "react";

const projects = [
  {
    title: "Next E-Pays – Application de Livraison",
    description:
      "Une application moderne de livraison de nourriture comme Uber Eats, permettant aux utilisateurs de parcourir les menus, passer des commandes et suivre les livraisons en temps réel.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 3h18l-1.5 9H6L4.5 3zm3 14a2 2 0 110 4 2 2 0 010-4zm10.5 0a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
  {
    title: "BIM Africa – Application de Paiement Mobile",
    description:
      "Une application mobile sécurisée et conviviale pour gérer les paiements et les transactions financières à travers l'Afrique.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 8c1.1 0 2 .9 2 2v1H8v-1c0-1.1.9-2 2-2h2zm-2 5h4v5h-4v-5z" />
        <path d="M4 6h16v2H4z" />
      </svg>
    ),
  },
  {
    title: "HospitalCare – Système de Gestion Hospitalière",
    description:
      "Un système d'information hospitalier complet pour gérer les patients, les rendez-vous, le personnel médical et la facturation.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Compulse – Application de Gestion des Employés",
    description:
      "Un outil RH pour gérer facilement les données des employés, la paie, les présences et le suivi des performances.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
        <path d="M2 20c0-2.5 5-4 10-4s10 1.5 10 4v2H2v-2z" />
      </svg>
    ),
  },
  {
    title: "StockTrack – Gestion des Stocks",
    description:
      "Une solution web pour suivre en temps réel les niveaux de stock, les commandes, les fournisseurs et les mouvements d'entrepôt.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "CryptoDApp – Application Blockchain DApp",
    description:
      "Une application décentralisée pour gérer les actifs crypto, échanger des tokens et interagir avec les smart contracts on-chain.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Evently – Plateforme de Réservation d'Événements",
    description:
      "Une plateforme web permettant aux utilisateurs de découvrir, réserver et gérer des billets d'événements en temps réel.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 6h18v12H3z" />
        <path d="M16 10h.01M12 10h.01M8 10h.01M16 14h.01M12 14h.01M8 14h.01" />
      </svg>
    ),
  },
  {
    title: "EduCore – Système d'Apprentissage en Ligne",
    description:
      "Un système de gestion de l'apprentissage permettant aux enseignants et étudiants de se connecter, partager du matériel et suivre les progrès.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v14l-9-5-9 5V4z" />
      </svg>
    ),
  },
  {
    title: "SmartFarm – Surveillance Agricole",
    description:
      "Une plateforme d'agriculture intelligente pour surveiller les sols, les cultures et le bétail avec des données et analyses en temps réel.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v20M5 12h14" />
        <path d="M5 5l7 7 7-7" />
      </svg>
    ),
  },
  {
    title: "SafeRide – Application Taxi & Moto",
    description:
      "Une application de transport pour connecter les passagers avec des chauffeurs de taxi ou moto sûrs et enregistrés en temps réel.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 17v-5a1 1 0 011-1h14a1 1 0 011 1v5" />
        <path d="M16 17a2 2 0 114 0 2 2 0 01-4 0zM4 17a2 2 0 114 0 2 2 0 01-4 0z" />
      </svg>
    ),
  },
  {
    title: "MediChat – Application de Télémédecine",
    description:
      "Une plateforme mobile et web permettant aux patients de consulter des médecins à distance et d'accéder aux prescriptions numériquement.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8 10h8M8 14h5M4 6h16v12H5.17L4 19.17V6z" />
      </svg>
    ),
  },
  {
    title: "CleanNow – Application de Réservation de Blanchisserie",
    description:
      "Une plateforme en ligne pour programmer les collectes, livraisons et paiements de blanchisserie avec des prestataires locaux.",
    svg: (
      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A]" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Projets
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus récents, allant des applications mobiles 
            aux systèmes de gestion d&apos;entreprise complexes.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl border border-[#2A0E61] bg-gradient-to-br from-[#1A1A2E] to-[#16213E] p-6 hover:scale-105 hover:border-purple-500/50 transition-all duration-500 hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  {project.svg}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
