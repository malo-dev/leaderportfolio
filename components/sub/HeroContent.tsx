"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
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
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:scale-105 transition-transform duration-300 font-semibold"
        >
          En savoir plus
        </motion.a>
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
    </motion.div>
  );
};

export default HeroContent;
