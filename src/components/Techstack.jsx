import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiAppwrite,
} from "react-icons/si";
import { DiGit, DiGithubBadge, DiVisualstudio } from "react-icons/di";

function Techstack() {
  return (
    <div className="flex flex-col items-center pb-12">
      {/* Skills Section */}
      <h2 className="text-4xl font-bold text-white mb-6">
        Professional Skillset
      </h2>
      <div className="flex flex-wrap justify-center mb-10">
        {[
          { icon: <SiHtml5 />, label: "HTML5" },
          { icon: <SiCss3 />, label: "CSS3" },
          { icon: <SiJavascript />, label: "JavaScript" },
          { icon: <SiReact />, label: "React" },
          { icon: <SiTailwindcss />, label: "Tailwind CSS" },
          { icon: <SiNextdotjs />, label: "Next.js" },
          { icon: <SiAppwrite />, label: "Appwrite" },
        ].map((skill, index) => (
          <div
            key={index}
            className="border-2 border-violet-600 rounded-lg p-6 m-4 flex items-center justify-center transform transition-transform duration-300 hover:bg-violet-600 hover:shadow-lg hover:scale-105"
          >
            <div className="text-5xl text-white transition duration-300 ease-in-out">
              {skill.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <h2 className="text-4xl font-bold text-white mb-6">Tools</h2>
      <div className="flex flex-wrap justify-center">
        {[
          { icon: <DiVisualstudio />, label: "VS Code" },
          { icon: <DiGit />, label: "Git" },
          { icon: <DiGithubBadge />, label: "GitHub" },
        ].map((tool, index) => (
          <div
            key={index}
            className="border-2 border-violet-600 rounded-lg p-6 m-4 flex items-center justify-center transform transition-transform duration-300 hover:bg-violet-600 hover:shadow-lg hover:scale-105"
          >
            <div className="text-5xl text-white transition duration-300 ease-in-out">
              {tool.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
