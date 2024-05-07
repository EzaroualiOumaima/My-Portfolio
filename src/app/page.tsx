import React from "react";

import AboutPage from "./_components/AboutPage";
import ContactPage from "./_components/ContactPage";
import Homepage from "./_components/Homepage";
import SkillsPage from "./_components/SkillsPage";
import Proj from "./_components/ProjectPage";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <>
      <Homepage />
      <AboutPage />
      <SkillsPage />
      <Proj />
      <ContactPage />
      <Footer/>
    </>
  );
};

export default page;
