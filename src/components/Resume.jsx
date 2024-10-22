import React from "react";

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/sarimresume.pdf";
    link.download = "sarimresume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black pt-8">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 transition-transform duration-300 hover:scale-110">
        MY RESUME
      </h1>

      <div className="shadow-lg p-4 mb-5 w-full max-w-2xl text-center bg-transparent">
        <button
          onClick={downloadResume}
          className="w-full py-3 mb-3 text-white font-bold text-lg rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg transition-transform transform hover:scale-105 hover:from-indigo-600 hover:to-purple-500 focus:outline-none"
        >
          Download Resume
        </button>

        {/* Image */}
        <img
          src="/sarim.jpg"
          alt="Sarim's Resume"
          className="w-full h-auto object-cover"
        />

        {/* Bottom Button */}
        <button
          onClick={downloadResume}
          className="w-full py-3 mt-3 text-white font-bold text-lg rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg transition-transform transform hover:scale-105 hover:from-indigo-600 hover:to-purple-500 focus:outline-none"
        >
          Download Resume
        </button>
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

export default Resume;
