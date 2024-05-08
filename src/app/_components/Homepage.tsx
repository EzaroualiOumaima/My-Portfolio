"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

const Homepage = () => {
  const [typeEffect] = useTypewriter({
    words: [" A Junior Full Stack Web Developer"],
    typeSpeed: 90,
    deleteSpeed: 70,
    loop: true,
  });
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
    <div className="w-full h-screen text-center bg-blue-950 pt-24">
      <div className="flex justify-center items-center w-full h-full mx-auto p-2 max-w-[1240px]">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-5 justify-center items-center"
        >
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Let&apos;s build something together
          </p>
          <h1 className="font-semibold font-[Poppins] text-3xl text-white">
            Hi, I&apos;m Oumaima{" "}
            <span className="text-blue-500">EZAROUALI</span>
          </h1>
          <h2 className="font-bold text-4xl tracking-wides leading-10 text-transparent  bg-clip-text  bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600">
            &lt; {typeEffect}/&gt;
          </h2>
          <p className="max-w-[70%] m-auto py-4 text-gray-300 font-[Poppins]">
            Welcome to my portfolio! I&apos;m a junior web developer passionate
            about creating user-friendly websites. Explore my projects to see
            how I blend creativity with code to build digital experiences that
            stand out. Let&apos;s connect and turn ideas into reality.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto gap-4">
            <Link download href="./CV.pdf" target="blank">
              <button className=" flex items-center justify-center gap-2 w-52 px-7 py-[0.8rem] z-20 bg-blue-500 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-lg">
                Download CV
                <MdOutlineFileDownload className="w-7 h-7" />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/oumaima-ezarouali-382143232/">
              <div className="rounded-full text-blue-500 shadow-lg shadow-blue-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
                <FaLinkedin className="h-6 w-6" />
              </div>
            </Link>
            <Link href="https://github.com/EzaroualiOumaima">
              <div className="rounded-full shadow-lg text-blue-500 shadow-blue-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ">
                <FaGithub className="h-6 w-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;
