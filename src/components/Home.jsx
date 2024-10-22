import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsX } from "react-icons/bs";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-32 px-4">
      {" "}
      <h1
        className="text-[7rem] font-extrabold text-white transition-transform duration-300 hover:scale-110 hover:shadow-lg mb-6 pt-10"
        style={{
          transition:
            "transform 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease",
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 0, 0, 0.8)",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Sarim Jafri
      </h1>
      {/* Typewriter Effect for Job Titles */}
      <span className="text-6xl md:text-3xl text-gray-300 transition-all duration-300 hover:text-opacity-80 mb-10">
        <Typewriter
          words={["Web Developer", "React Developer", "Software Developer"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <div className="mt-24"></div>{" "}
      <section
        className={`w-full max-w-4xl mx-auto mt-20 transform transition-transform duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        {/* Introduction Section */}
        <h2 className="text-5xl font-bold text-white mb-6 mt-8">
          Let me introduce myself
        </h2>
        <ul className="text-lg md:text-xl text-gray-200 space-y-4 py-8">
          <li className="transition duration-300 hover:-translate-y-1 hover:text-[#FFD700]">
            {" "}
            {/* Highlight color */}I am a passionate programmer with a strong
            affinity for technology and its potential to enhance our daily
            lives. My primary expertise lies in JavaScript, with a focus on{" "}
            <span className="font-semibold text-[#FF4500]">
              {" "}
              Web Development
            </span>{" "}
          </li>
          <li className="transition duration-300 hover:-translate-y-1 hover:text-[#FFD700]">
            {" "}
            Skilled in JavaScript and developing applications with{" "}
            <span className="font-semibold text-[#FF4500]">
              {" "}
              ReactJS and NextJS.
            </span>{" "}
          </li>
          <li className="transition duration-300 hover:-translate-y-1 hover:text-[#FFD700]">
            {" "}
            Currently, I am dedicated to building innovative web technologies
            and products. I am proud to have been a finalist in the{" "}
            <span className="font-semibold text-[#FF4500]">
              {" "}
              Smart India Hackathon 2022
            </span>{" "}
            which fueled my commitment to creating impactful software solutions.
          </li>
        </ul>
      </section>
      <div className="w-full max-w-4xl mx-auto mt-20 text-center py-8">
        {" "}
        <h1 className="text-4xl font-bold text-white mb-4">FIND ME ON</h1>
        <p className="text-lg text-gray-200 mb-8">
          Feel free to <span className="text-[#FF4500]">connect </span>with me
        </p>
        <ul className="flex justify-center space-x-6">
          <li className="social-icons transition-transform duration-300 transform hover:scale-110">
            <a
              href="https://github.com/sarimjafri/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillGithub className="text-gray-300 hover:text-[#181717] text-4xl" />{" "}
            </a>
          </li>
          <li className="social-icons transition-transform duration-300 transform hover:scale-110">
            <a
              href="https://x.com/sarimjafrii"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <BsX className="text-gray-300 hover:text-[#181717] text-4xl" />{" "}
            </a>
          </li>
          <li className="social-icons transition-transform duration-300 transform hover:scale-110">
            <a
              href="https://www.linkedin.com/in/sarimjafri/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn className="text-gray-300 hover:text-[#0077B5] text-4xl" />{" "}
            </a>
          </li>
        </ul>
      </div>
      {/* Footer Section */}
      <footer className="w-full bg-white bg-opacity-10 text-white py-2 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Designed and developed by <strong>Sarim Jafri</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
