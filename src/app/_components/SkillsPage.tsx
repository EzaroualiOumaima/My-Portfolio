"use client";
import React, { useEffect } from "react";
import { skillsData } from "../libs/data";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div className="w-full bg-blue-950 lg:h-screen p-2 pt-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
        <h2
          data-aos="fade-up"
          className="py-4 tracking-widest text-gray-300 uppercase"
        >
          What I Can Do
        </h2>
        <p
          data-aos="fade-up"
          className="font-bold text-5xl text-blue-500  tracking-wide"
        >
          My <span className="text-white">Skills</span>
        </p>
        <div className="pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
          {skillsData.map((skill, index) => {
            const delay = ((index % 3) + 1) * 50; // Moved the declaration outside of JSX
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${delay}`}
                key={index}
                className="px-8 py-2 shadow-lg shadow-blue-400 rounded-xl bg-slate-200 "
              >
                <div className="grid grid-cols-2 gap-2 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      className="w-[50px] h-[50px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="font-bold text-lg">{skill.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
