import React from "react";
import ProjectCard from "./ProjectCard";
import { describe } from "node:test";

const Project = () => {
    const projectData = [
        {
          title: "Bluechip System",
          link: "https://github.com/om0852/Assest-Pooling-and-Fractional-Ownership",
          description: "A decentralized platform that allows users to pool assets together and own fractions of high-value assets using blockchain technology.",
          img: "./project/bluechip.png",
        },
        // {
        //   title: "Project Management",
        //   link: "https://github.com/om0852/ProjectManagmentDsc",
        //   description: "A full-featured project management tool designed to help teams collaborate on tasks, track progress, and manage deadlines efficiently.",
        //   img: "",
        // },
        {
          title: "Task Manager",
          link: "https://github.com/om0852/Task-Manager",
          description: "A user-friendly application that helps individuals and teams organize and manage daily tasks, providing reminders and progress tracking.",
          img: "./project/umanager.png",
        },
        {
          title: "Prima Store",
          link: "https://github.com/om0852/prima-store-userside-",
          description: "An e-commerce platform for purchasing electronic devices with features such as secure payments, order tracking, and fast delivery.",
          img: "./project/primastore.png",
        },
        {
          title: "Digital Gram Panchayat",
          link: "https://github.com/om0852/meripanchayat",
          description: "A web application that helps rural administrations manage documents, schemes, and financials, with a user-friendly interface.",
          img: "./project/digital.png",
        },
        // {
        //   title: "Certificate-Generator",
        //   link: "https://github.com/om0852/Certificate-Generator",
        //   description: "A certificate generation tool allowing users to create and customize certificate templates easily.",
        //   img: "",
        // },
        {
          title: "Twitter Clone",
          link: "https://github.com/om0852/full-stack-twitter-clone-",
          description: "A full-stack clone of Twitter with features such as user authentication, posting, and real-time updates.",
          img: "./project/twitter.jpg",
        },
        {
          title: "Get Me a Chai",
          link: "https://github.com/om0852/get-me-a-chai",
          description: "A simple web application to order and deliver chai, focusing on user convenience and fast delivery.",
          img: "./project/getmechai.jpg",
        },
        // {
        //   title: "Temple Ticket Booking System",
        //   link: "https://github.com/om0852/hackthon_competition_1",
        //   description: "An online ticket booking system for temples, allowing users to book tickets in advance and avoid long queues.",
        //   img: "",
        // },
        // {
        //   title: "Simple Weather Website",
        //   link: "https://github.com/om0852/simple-weather-website",
        //   description: "A simple web application that provides real-time weather updates for various locations.",
        //   img: "",
        // },
      ];
      
  return (
    <section className="w-full h-[auto] pb-10 bg-slate-900">
      <div className="headline grid place-items-center mb-10 text-white relative">
        <div>
          Project
          <div className="w-[20vh] h-1 bg-blue-500 mb-1"></div>
          <div className="w-[15vh] h-1 bg-green-500 mb-1"></div>
          <div className="w-[10vh] h-1 bg-red-500 "></div>
        </div>
      </div>
      <div className="grid h-auto py-6 gap-6 gap-y-6 grid-row-auto grid-cols-3 place-items-center overflow-x-auto px-10">
        {projectData.map((data)=>(
          <ProjectCard {...data}/>

        ))}
      </div>
    </section>
  );
};

export default Project;
