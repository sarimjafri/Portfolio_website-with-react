import React from "react";
import ProjectCard from "./Cards";

function Projects() {
  return (
    <>
      <div className="project-section p-10 bg-black">
        <h1 className="project-heading text-7xl font-bold text-gray-300 hover:text-white transition duration-300 ease-in-out mb-6 text-center">
          My Recent <strong className="text-purple-600">Works</strong>
        </h1>
        <p className="text-white text-xl font-light mb-12 text-center">
          Here are a few projects I've worked on recently. Each project
          showcases my skills in React and modern web development.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-800 p-6">
            <ProjectCard
              imgPath="/project/Counter.png"
              title="Counter App"
              description="A simple counter application built with React that allows users to increment or decrement a count. The app features a sleek design and uses state management for a smooth user experience."
              ghLink="https://github.com/sarimjafri/Counter-with-local-storage"
            />
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-800 p-6">
            <ProjectCard
              imgPath="/project/weatherApp.png"
              title="Weather App"
              description="An application that fetches and displays weather data from various APIs. Users can search for their location and view the current weather, forecast, and additional details like humidity and wind speed."
              ghLink="https://drive.google.com/file/d/1rubm6dkDIs76Rhnv6IDgBPj-y6l8aiPa/view?usp=sharing"
            />
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-800 p-6">
            <ProjectCard
              imgPath="/project/TodoList.png"
              title="Todo List"
              description="A comprehensive to-do list application that allows users to create, edit, and delete tasks. The app features local storage to persist tasks between sessions and has a clean, user-friendly interface."
              ghLink="https://github.com/sarimjafri/TodoList-with-Redux"
            />
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-gray-800 p-6">
            <ProjectCard
              imgPath="/project/ThemeSwitcher.png"
              title="Theme Switcher"
              description="A dynamic theme switcher that allows users to toggle between light and dark themes seamlessly. This project highlights my understanding of CSS variables and React state management."
              ghLink="https://github.com/sarimjafri/ThemeSwitcher-with-Context"
            />
          </div>
        </div>
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
}

export default Projects;
