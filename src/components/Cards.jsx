import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function Cards(props) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
      <img
        className="w-full h-48 object-cover"
        src={props.imgPath}
        alt="card-img"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>
        <p className="text-gray-300 mb-4 text-justify">{props.description}</p>
        <div className="flex">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ml-2"
            >
              <CgWebsite /> &nbsp; Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
