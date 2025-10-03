import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden py-20 px-4 bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SkillText />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Frontend Skills */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-2xl p-6 border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Frontend
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Frontend_skill.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-2xl p-6 border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Backend
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Backend_skill.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Full Stack Skills */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-2xl p-6 border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Full Stack
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Full_stack.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-2xl p-6 border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Autres
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Other_skill.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
