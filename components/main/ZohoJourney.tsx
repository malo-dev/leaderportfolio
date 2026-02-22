"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const ZohoJourney = () => {
  return (
    <section id="zoho-journey" className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl w-full">
        <motion.div
          variants={slideInFromTop}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Mon Parcours
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            IA • Web • Mobile • Cybersécurité. Mise à jour en cours.
          </p>
        </motion.div>
        <div className="rounded-2xl border border-purple-500/20 bg-black/30 p-8 text-center text-gray-300">
          Cette section sera remplacée par un résumé orienté IA/Web/Mobile/Cybersécurité.
        </div>
      </div>
    </section>
  );
};

export default ZohoJourney;