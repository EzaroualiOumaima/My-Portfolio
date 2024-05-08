"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/assests/logo_oum-removebg-preview.png";
import { IoIosMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="h-20 w-full fixed bg-white/5 backdrop-blur-lg z-20 items-center justify-center  text-white bg-blue-950 flex">
          <div className="w-[90%] flex items-center justify-between ">
            <div className="w-20 h-20">
              <Image src={logo} alt="logo" />
            </div>
            <div className=" hidden md:flex gap-5 uppercase font-semibold ">
              <Link href="/" className="hover:text-blue-800">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-800">
                About
              </Link>
              <Link href="/skills" className="hover:text-blue-800">
                Skills
              </Link>
              <Link href="/projects" className="hover:text-blue-800">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-blue-800">
                Contact Me
              </Link>
            </div>
            <div className="block md:hidden">
              <IoIosMenu
                className="w-10 h-10 cursor-pointer"
                onClick={() => setOpenMenu(true)}
              />
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{
              opacity: 0,
              x: -500,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -500,
            }}
            transition={{
              duration: "0.4",
            }}
            className="bg-blue-950 gap-6  text-white font-semibold text-2xl  w-full h-screen flex flex-col items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-50"
          >
            <Link href="/" className="hover:text-blue-800">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-800">
              About
            </Link>
            <Link href="/skills" className="hover:text-blue-800">
              Skills
            </Link>
            <Link href="/projects" className="hover:text-blue-800">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-800">
              Contact Me
            </Link>

            <IoIosCloseCircleOutline
              className="w-10 h-10  absolute cursor-pointer top-5 right-4 text-white"
              onClick={() => setOpenMenu(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
