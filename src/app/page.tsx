"use client";
import React, { useEffect, useState } from "react";

import AboutPage from "./_components/AboutPage";
import ContactPage from "./_components/ContactPage";
import Homepage from "./_components/Homepage";
import SkillsPage from "./_components/SkillsPage";
import Proj from "./_components/ProjectPage";
import Footer from "./_components/Footer";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Entrance from "../../src/LottieAnimation/Animation.json";

const Page = () => {
  const [entrance, setEntrance] = useState(true);
  const [heroSection, setHeroSection] = useState(false);
  useEffect(()=> {
    setTimeout(() => {
      setEntrance(false)
      setHeroSection(true)
    }, 3000);
  })
  return (
    <>
      {entrance && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 bottom-0 left-0 right-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="sm:h-full sm:w-full md:h-[50vh] md:w-[70vh] flex items-center justify-center">
              <Lottie animationData={Entrance} />
            </div>
          </motion.div>
        </>
      )}
      <main>
        {heroSection && (
          <>
            <Homepage />
            <AboutPage />
            <SkillsPage />
            <Proj />
            <ContactPage />
            <Footer />
          </>
        )}
      </main>
    </>
  );
};

export default Page;
