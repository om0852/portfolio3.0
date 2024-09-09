import React from "react";
import "./project.css";
const ProjectCard = ({
  img,
  title,
  description,
  link,
}: {
  img: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div
      className="card h-[70vh]  text-white"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="card-content text-white">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{description}</p>
        <button
          type="button"
          className="mt-6 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
        <a href={link} className="">
          Link
        </a>
        </button>

      </div>
    </div>
  );
};

export default ProjectCard;
