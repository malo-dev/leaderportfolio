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

const HeroContent = () => {
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
            Portfolio Développeur Expert Zoho
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              MUSHIO ATAULWA LEADER{" "}
            </span>
            Expert Zoho & Développeur Full Stack
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Je suis un Ingénieur Logiciel Full Stack spécialisé dans l&apos;écosystème Zoho avec une expertise 
          en développement Web, Mobile et Applications métier. Découvrez mes projets et compétences.
        </motion.p>
        <motion.button
          variants={slideInFromLeft(1)}
          onClick={() => setIsModalOpen(true)}
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:scale-105 transition-transform duration-300 font-semibold"
        >
          En savoir plus
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center order-first lg:order-last"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="icônes de travail"
          height={650}
          width={650}
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] h-auto"
        />
      </motion.div>

      {/* Modal Expérience Zoho */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-purple-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mon Expérience Zoho</h3>
                  <p className="text-purple-400 font-medium">Expert & Consultant Zoho depuis 2019</p>
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
                  <h4 className="text-white font-semibold mb-4 text-lg">Parcours Professionnel</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-4 border border-purple-500/20">
                      <h5 className="text-purple-400 font-semibold mb-2">Consultant & Expert Zoho (2023-2024)</h5>
                      <p className="text-gray-300 text-sm mb-2">Bim Africa</p>
                      <p className="text-gray-400 text-sm">Implémentation complète d&apos;un système CRM Zoho pour gérer plus de 5000 clients. Automatisation des processus de vente et intégration avec les systèmes de paiement mobile.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20">
                      <h5 className="text-cyan-400 font-semibold mb-2">Administrateur Systèmes & Solutions Cloud (2022-2023)</h5>
                      <p className="text-gray-300 text-sm mb-2">CIRTMSS</p>
                      <p className="text-gray-400 text-sm">Développement d&apos;une solution complète de gestion hospitalière utilisant Zoho Creator et Analytics. Gestion des patients, rendez-vous, personnel médical et facturation.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-4 border border-purple-500/20">
                      <h5 className="text-purple-400 font-semibold mb-2">Chef de Projet & Intégrateur Zoho (2021-2022)</h5>
                      <p className="text-gray-300 text-sm mb-2">RADPI, ONG</p>
                      <p className="text-gray-400 text-sm">Pilotage de l&apos;implémentation complète de Zoho CRM et Zoho Desk. Création de workflows automatisés et formation des équipes.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20">
                      <h5 className="text-cyan-400 font-semibold mb-2">Développeur d&apos;Applications Personnalisées Zoho (2019-2020)</h5>
                      <p className="text-gray-300 text-sm mb-2">Assodip</p>
                      <p className="text-gray-400 text-sm">Conception et développement d&apos;applications métiers sur Zoho Creator. Intégration avec des systèmes ERP et création de tableaux de bord interactifs.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Expertise Technique</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-3">Applications Zoho Maîtrisées</h5>
                      <div className="space-y-2">
                        {[
                          'Zoho CRM - Configuration avancée et automatisation',
                          'Zoho Creator - Développement d\'applications métier',
                          'Zoho Analytics - Tableaux de bord et rapports',
                          'Zoho Books - Gestion financière et comptable',
                          'Zoho Desk - Support client et gestion des tickets',
                          'Zoho Projects - Gestion de projets et collaboration'
                        ].map((skill, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-cyan-400 font-semibold mb-3">Compétences Techniques</h5>
                      <div className="space-y-2">
                        {[
                          'Deluge Script - Programmation avancée',
                          'API REST - Intégrations personnalisées',
                          'Workflows & Blueprints - Automatisation',
                          'Custom Functions - Logique métier',
                          'Widgets personnalisés - Interface utilisateur',
                          'Intégrations tierces - ERP, e-commerce, etc.'
                        ].map((skill, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Résultats Obtenus</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { metric: '5000+', description: 'Clients gérés via CRM Zoho' },
                      { metric: '70%', description: 'Amélioration efficacité opérationnelle' },
                      { metric: '60%', description: 'Réduction temps traitement leads' },
                      { metric: '50%', description: 'Diminution erreurs administratives' }
                    ].map((result, index) => (
                      <div key={index} className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                        <div className="text-2xl font-bold text-green-400 mb-1">{result.metric}</div>
                        <div className="text-gray-300 text-sm">{result.description}</div>
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
