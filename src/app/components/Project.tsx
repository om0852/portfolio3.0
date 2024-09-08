import React from "react";
import ProjectCard from "./ProjectCard";
import { describe } from "node:test";

const Project = () => {
  const projectData = [
    {
      title: "Asset Pooling and Fractional Ownership System",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Project Management",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Task Manager",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Prima Store",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Digital Gram Panchayat",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Certificate-Generator",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Twitter Clone",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Get Me a Chai",
      link: "",
      describetion: "",
      img: "",
    },
    {
      title: "Temple Ticket Booking System",
      link: "https://github.com/om0852/hackthon_competition_1",
      describetion: "",
      img: "",
    },
    {
      title: "Simple Weather Website",
      link: "https://github.com/om0852/simple-weather-website",
      describetion: "",
      img: "",
    },
  ];
  return (
    <section className="w-full h-[100vh] bg-slate-900">
      <div className="headline grid place-items-center mb-10 text-white relative">
        <div>
          Project
          <div className="w-[20vh] h-1 bg-blue-500 mb-1"></div>
          <div className="w-[15vh] h-1 bg-green-500 mb-1"></div>
          <div className="w-[10vh] h-1 bg-red-500 "></div>
        </div>
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
