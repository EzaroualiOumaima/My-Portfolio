"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/sendMail", formData);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <form className="flex flex-col items-center justify-center gap-10 lg:gap-10 pt-32 bg-blue-950 text-white py-24 font-[Poppins]">
      <div className="flex flex-col justify-center items-center gap-10 ">
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
          solutions to make the life of my clients easier. Have any questions ?
          Reach out to me from this contact form and I will get back to you
          shortly
        </h2>
      </div>
      <div className="flex flex-col gap-5 w-[95%] lg:w-5/12">
        <input
          data-aos="fade-up"
          data-aos-delay="350"
          className="h-12 w-full bg-slate-700 pl-5 rounded placeholder:text-slate-400"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          data-aos="fade-up"
          data-aos-delay="400"
          className="h-12 w-full bg-slate-700 pl-5 rounded placeholder:text-slate-400"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          data-aos="fade-up"
          data-aos-delay="450"
          placeholder="Your Message"
          className="h-20 w-full bg-slate-700 pl-5 pt-3 rounded placeholder:text-slate-400"
        ></textarea>
        <div className="flex items-center justify-center md:justify-start">
          <button
            onClick={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="500"
            className=" px-7 py-[0.5rem] z-20 bg-blue-500 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactPage;
