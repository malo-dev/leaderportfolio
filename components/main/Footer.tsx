import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-6 md:p-12">
        <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
            <div className="w-full h-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly flex-wrap gap-8 md:gap-12">
                

                <div className="min-w-[220px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-xl mb-6 text-purple-400">Communauté</div>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <FaYoutube className="text-red-500 text-lg" />
                        <span className="text-base ml-3">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <RxGithubLogo className="text-gray-300 text-lg" />
                        <span className="text-base ml-3">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <RxDiscordLogo className="text-indigo-400 text-lg" />
                        <span className="text-base ml-3">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[220px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-xl mb-6 text-purple-400">Réseaux Sociaux</div>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <RxInstagramLogo className="text-pink-500 text-lg" />
                        <span className="text-base ml-3">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <RxTwitterLogo className="text-blue-400 text-lg" />
                        <span className="text-base ml-3">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <RxLinkedinLogo className="text-blue-600 text-lg" />
                        <span className="text-base ml-3">LinkedIn</span>    
                    </p>
                </div>
                <div className="min-w-[220px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-xl mb-6 text-purple-400">À Propos</div>
                   <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <span className="text-base">Devenir Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <span className="text-base">En savoir plus sur moi</span>    
                    </p>
                    <p className="flex flex-row items-center my-3 cursor-pointer hover:text-purple-400 transition-colors">
                        <span className="text-base break-all">leadermushio377@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 w-full">
                <div className="text-base text-center text-gray-400">
                    &copy; 2024 MUSHIO ATAULWA LEADER - IA • Web • Mobile • Cybersécurité. Tous droits réservés.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer