import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="relative bg-cover bg-center bg-no-repeat min-h-screen bg-[url('./assets/images/bgimgghome.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 mix-blend-multiply"></div>

        {/* Navbar */}
        <nav className="sticky top-0 z-50 h-16 w-full py-4 bg-gray-900 bg-opacity-80 text-white shadow-lg transition-all duration-300 ease-in-out">
          <ul className="flex justify-end space-x-12 pr-20 text-lg">
            {["Home", "Projects", "About", "Resume"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-white transition duration-200 ease-in-out group-hover:text-yellow-400 text-lg no-underline" // Added no-underline here
                >
                  {item}
                </Link>
                <span className="absolute left-0 right-0 bottom-0 h-0 bg-yellow-400 scale-x-0 transition-transform duration-300 origin-left group-hover:h-[2px] group-hover:scale-x-100" />
              </li>
            ))}
            <li className="relative group">
              <a
                href="https://github.com/sarimjafri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition duration-200 ease-in-out group-hover:text-yellow-400 text-lg no-underline" // Added no-underline here
              >
                GitHub
              </a>
              <span className="absolute left-0 right-0 bottom-0 h-0 bg-yellow-400 scale-x-0 transition-transform duration-300 origin-left group-hover:h-[2px] group-hover:scale-x-100" />
            </li>
          </ul>
        </nav>

        <div className="relative z-10 w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
