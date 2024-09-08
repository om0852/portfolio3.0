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
      className="card"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{description}</p>
        <a href={link} className="button">
          Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
