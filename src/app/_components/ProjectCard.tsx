"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { projectsData } from "../libs/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];
const ProjectCard = ({
  imageUrl,
  title,
  description,
  tags,
  href,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <div className="mb-12 lg:mb-0 feedback-card p-7 rounded-lg border border-gray-300 shadow-xl hover:scale-105 ease-in duration-300">
        <div className="relative sm:mb-6 mb-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-black/20 bg-[50%] ">
          <Image
            src={imageUrl}
            alt="my project"
            className="w-full lg:h-[250px]"
          />
        </div>
        <h5 className="font-[Poppins] font-semibold sm:text-[30px] text-[25px] text-white w-full mb-3">
          {title}
        </h5>

        <ul className="flex flex-wrap gap-2 sm:mt-auto mb-6">
          {tags.map((tag, index) => (
            <li
              className="bg-blue-800/[0.8] italic font-semibold py-2 px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow-lg shadow-blue-600"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="font-[Poppins] font-normal text-gray-300 text-[16px] leading-[30.8px] mb-5">
          {description}
        </p>

        <div className="flex ">
          <Link href={href}>
            <button className=" flex gap-3 items-center px-7 py-[0.5rem] z-20 bg-blue-500 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-lg">
              View More
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        {/* <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-[0.5rem] z-20 bg-blue-500 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-lg"
        >
          View More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right rtl:rotate-180 w-4 h-4 ms-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </a> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
