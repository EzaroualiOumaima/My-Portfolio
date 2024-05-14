"use client";

import React, { FormEvent, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../_components/Navbar";
import { motion } from "framer-motion";
import Footer from "../_components/Footer";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      // alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 2500);
  }

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-10 min-h-screen lg:gap-5 pt-28 bg-blue-950 text-white py-24 font-[Poppins]"
      >
        <div className="flex flex-col justify-center items-center gap-5 ">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-bold text-5xl"
          >
            Contact <span className="text-blue-500">Me</span>{" "}
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="py-4 tracking-wide text-center w-[90%] lg:w-5/12 text-gray-300 "
          >
            If you like what you see, let&apos;s work together. I bring rapid
            solutions to make the life of my clients easier. Have any questions
            ? Reach out to me from this contact form and I will get back to you
            shortly
          </h2>
        </div>
        <div className="flex flex-col gap-5 w-[95%] lg:w-5/12">
          <input
            data-aos="fade-up"
            data-aos-delay="350"
            className="h-12 w-full bg-slate-700 pl-5 rounded placeholder:text-slate-400  focus:border-blue-700 border border-transparent duration-500 outline-none "
            type="text"
            placeholder="Name*"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            data-aos="fade-up"
            data-aos-delay="400"
            className="h-12 w-full bg-slate-700 pl-5 rounded placeholder:text-slate-400  focus:border-blue-700 border border-transparent duration-500 outline-none "
            type="email"
            placeholder="Email*"
            name="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            data-aos="fade-up"
            data-aos-delay="450"
            required
            placeholder="Message*"
            className="h-20 w-full bg-slate-700 focus:border-blue-700 border border-transparent duration-500 outline-none  pl-5 pt-3 rounded placeholder:text-slate-400"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <button
              data-aos="fade-up"
              data-aos-delay="450"
              className=" px-7 py-[0.5rem] z-20 bg-blue-500 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl"
            >
              Submit
            </button>
            {isSent && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <p className="text-green-600 font-bold text-lg">
                    Message sent !
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default ContactPage;
