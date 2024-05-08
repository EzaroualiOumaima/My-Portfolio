"use client";
import React, { useEffect } from "react";
import ProjectCard from "../_components/ProjectCard";
import { projectsData } from "../libs/data";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../_components/Navbar";

const Proj = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="bg-blue-950 flex flex-col items-center justify-center h-full w-full py-44">
      <h2
        data-aos="fade-up"
        className="py-4 tracking-widest text-gray-300 uppercase"
      >
        What I&apos;ve Built
      </h2>
      <p
        data-aos="fade-up"
        className="font-bold text-5xl text-blue-500 mb-20 tracking-wide"
      >
        My <span className="text-white">Projects</span>
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-center w-[90%] feedback-container relative z-[1] gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            href={project.href}
          />
        ))}
      </div>
    </div>
    </>
  );
};
export default Proj;
