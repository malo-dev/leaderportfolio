"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const ZohoJourney = () => {
  return (
    <section id="zoho-journey" className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          variants={slideInFromTop}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Mon Parcours Zoho
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Expert certifié Zoho avec plus de 5 ans d&apos;expérience dans l&apos;implémentation et l&apos;optimisation des solutions Zoho
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Roles */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Expertises</h2>
              <div className="space-y-4">
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-white mb-2">CONSULTANT & EXPERT ZOHO</h3>
                </div>
                <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <h3 className="font-semibold text-white mb-2">ADMINISTRATEUR SYSTÈMES & SOLUTIONS CLOUD</h3>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-white mb-2">CHEF DE PROJET & INTÉGRATEUR ZOHO</h3>
                </div>
                <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <h3 className="font-semibold text-white mb-2">DÉVELOPPEUR D&apos;APPLICATIONS PERSONNALISÉES ZOHO</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Experience Timeline */}
          <motion.div
            variants={slideInFromTop}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Expérience</h2>
              <div className="space-y-6">
                {/* Bim Africa */}
                <div className="relative pl-6 border-l-2 border-purple-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h3 className="font-bold text-white">Bim Africa</h3>
                    <p className="text-purple-300 text-sm mb-2">2023-2024</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Déploiement complet de Zoho CRM et Zoho Books pour des PME et ONG</li>
                      <li>• Automatisation des processus de vente et de facturation</li>
                      <li>• Intégration Zoho avec Shopify, QuickBooks et Google Workspace</li>
                      <li>• Formation de plus de 100 utilisateurs</li>
                    </ul>
                  </div>
                </div>

                {/* CIRTMSS */}
                <div className="relative pl-6 border-l-2 border-cyan-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="bg-cyan-500/10 p-4 rounded-lg">
                    <h3 className="font-bold text-white">CIRTMSS</h3>
                    <p className="text-cyan-300 text-sm mb-2">2022-2023</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Mise en place de tableaux de bord interactifs pour le suivi des KPIs</li>
                      <li>• Gestion des solutions Zoho pour la relation client et la comptabilité</li>
                      <li>• Migration de données depuis systèmes existants vers Zoho</li>
                      <li>• Développement d&apos;applications internes sur Zoho Creator</li>
                    </ul>
                  </div>
                </div>

                {/* RADPI, ONG */}
                <div className="relative pl-6 border-l-2 border-purple-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h3 className="font-bold text-white">RADPI, ONG</h3>
                    <p className="text-purple-300 text-sm mb-2">2021-2022</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Support technique de niveau 2 pour les utilisateurs</li>
                      <li>• Pilotage de l&apos;implémentation complète de Zoho CRM et Zoho Desk</li>
                      <li>• Création de workflows automatisés pour le suivi des prospects</li>
                      <li>• Formation des équipes sur l&apos;utilisation optimale des outils Zoho</li>
                    </ul>
                  </div>
                </div>

                {/* Assodip */}
                <div className="relative pl-6 border-l-2 border-cyan-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="bg-cyan-500/10 p-4 rounded-lg">
                    <h3 className="font-bold text-white">Assodip</h3>
                    <p className="text-cyan-300 text-sm mb-2">2019-2020</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Conception et développement d&apos;applications métiers sur Zoho Creator</li>
                      <li>• Intégration des applications Zoho avec des systèmes ERP</li>
                      <li>• Création de tableaux de bord interactifs pour le suivi en temps réel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Contact */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="lg:col-span-1 space-y-6"
          >
            {/* Skills */}
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Compétences Clés</h2>
              <div className="space-y-3">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-white text-sm">Zoho CRM</h4>
                  <p className="text-gray-300 text-xs">Configuration avancée, automatisation, création de modules personnalisés</p>
                </div>
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <h4 className="font-semibold text-white text-sm">Zoho Books & Inventory</h4>
                  <p className="text-gray-300 text-xs">Gestion comptable, facturation, suivi des stocks</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-white text-sm">Zoho Creator</h4>
                  <p className="text-gray-300 text-xs">Développement d&apos;applications personnalisées avec Deluge Script</p>
                </div>
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <h4 className="font-semibold text-white text-sm">Zoho Desk</h4>
                  <p className="text-gray-300 text-xs">Gestion de support client et mise en place de SLA</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-white text-sm">Intégrations</h4>
                  <p className="text-gray-300 text-xs">API REST, intégration Zoho avec ERP, e-commerce, et outils tiers</p>
                </div>
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <h4 className="font-semibold text-white text-sm">Automatisation</h4>
                  <p className="text-gray-300 text-xs">Workflows, Blueprints, functions personnalisées</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">leadermushio377@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">+259795873560</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Kigali</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">leaderportfolio.vercel.app</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Projects Section */}
        <motion.div
          variants={slideInFromTop}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
              Projets Clés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <h3 className="font-bold text-white mb-3">Implémentation Zoho CRM</h3>
                <p className="text-gray-300 text-sm mb-2">Entreprise de logistique</p>
                <p className="text-purple-300 text-sm">Réduction du temps de traitement des demandes de 40%</p>
              </div>
              <div className="p-6 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <h3 className="font-bold text-white mb-3">Automatisation Comptable</h3>
                <p className="text-gray-300 text-sm mb-2">Zoho Books & Inventory</p>
                <p className="text-cyan-300 text-sm">Gain de 25h/mois sur la gestion manuelle</p>
              </div>
              <div className="p-6 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <h3 className="font-bold text-white mb-3">Application Zoho Creator</h3>
                <p className="text-gray-300 text-sm mb-2">Suivi des partenaires</p>
                <p className="text-purple-300 text-sm">Amélioration de la visibilité et des rapports en temps réel</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZohoJourney;