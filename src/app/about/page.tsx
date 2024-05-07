"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import image from "../../../public/assests/new picture.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row pt-28 md:pt-0 min-h-screen justify-start  md:justify-center items-center  gap-24 font-[Poppins]  bg-blue-950">
      <div data-aos="fade-right" className=" w-[85%] md:w-3/12  md:h-auto   ">
        <Image
          src={image}
          alt="person"
          className=" hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-xl p-4"
        />
      </div>
      <div
        data-aos="fade-left"
        className=" flex flex-col gap-3 w-11/12 md:w-6/12 "
      >
        <p className="font-bold text-5xl text-white tracking-wide text-center md:text-start">
          About <span className="text-blue-500">Me</span>{" "}
        </p>
        <h1 className="font-semibold italic text-2xl md:text-xl leading-10 text-blue-500 text-center md:text-start">
          Full Stack Developer
        </h1>
        <p className=" text-lg text-white leading-normal ">
          I&apos;m a full stack web developer specialized in the MERN stack,
          I&apos;m proficient in building end-to-end web applications, from the
          database to the frontend. My expertise spans MongoDB for data
          management, Express.js and Node.js for backend development, and
          React.js for creating dynamic and responsive user interfaces. I excel
          in crafting interactive and high-performance web applications,
          leveraging the latest technologies to deliver an exceptional user
          experience.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
