"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Expert en Technologies Modernes
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold mt-[10px] text-center mb-[15px]'
        >
            Créer des applications avec des technologies
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}modernes
            </span>
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-lg sm:text-xl text-gray-300 mb-10 mt-[10px] text-center max-w-2xl mx-auto leading-relaxed'
        >
            Spécialisé dans l'écosystème Zoho et les technologies web modernes pour créer des solutions innovantes
        </motion.div>
    </div>
  )
}

export default SkillText