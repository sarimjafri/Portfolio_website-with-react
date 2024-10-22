import React, { useEffect, useState } from "react";
import Techstack from "./Techstack";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-12">
        {/* Section Title */}
        <h1
          className={`text-6xl font-extrabold text-white mb-8 text-center tracking-wide transition-transform duration-500 ${
            isVisible
              ? "transform translate-y-0"
              : "transform -translate-y-4 opacity-0"
          }`}
        >
          Know Who I Am
        </h1>

        {/* About Content */}
        <div
          className={`text-white p-10 rounded-lg shadow-lg max-w-2xl mx-auto transition-transform duration-500 ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform -translate-y-4 opacity-0"
          }`}
        >
          <p className="text-lg leading-relaxed mb-6">
            I am a{" "}
            <span className="font-bold text-purple-600">
              final-year Computer Science student
            </span>{" "}
            with a passion for frontend development. Proficient in{" "}
            <span className="font-bold text-purple-600">React JS</span> and{" "}
            <span className="font-bold text-purple-600">Tailwind CSS</span>, I
            have a solid foundation in creating modern, responsive web
            applications. I also have a basic understanding of{" "}
            <span className="font-bold text-purple-600">Next.js</span> and am
            always eager to learn new technologies and expand my skill set. I
            enjoy{" "}
            <span className="font-bold text-purple-600">problem-solving</span>{" "}
            and am driven to continuously improve and take on new challenges.
          </p>
        </div>

        <Techstack />
      </div>
      {/* Footer Section */}
      <footer className="w-full bg-white bg-opacity-10 text-white py-2 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Designed and developed by <strong>Sarim Jafri</strong>
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;
