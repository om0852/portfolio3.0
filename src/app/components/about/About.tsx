"use client";
import React, { useState } from "react";
import "@/app/globals.css";
const About = () => {
  const [selectDetails, setSelectDetails] = useState(0);
  return (
    <section className="w-full h-[100vh] bg-slate-900">
      <div className="headline grid place-items-center mb-10 text-white relative">
        <div>
          About Me
          <div className="w-[20vh] h-1 bg-red-500 mb-1"></div>
          <div className="w-[15vh] h-1 bg-blue-500 mb-1"></div>
          <div className="w-[10vh] h-1 bg-green-500"></div>
        </div>
      </div>
      <article className="px-8 text-white ">
        <h1 className="text-4xl my-4">
          I'm <span className="text-orange-400 my-4">Om Sachin Salunke</span>
        </h1>
        <p className="text-md">
          A passionate developer from Malegaon. I specialize in MERN stack
          development, app development using React Native, and blockchain
          technology. I have recently completed my Diploma in Computer Science
          from Sanjivani K.B.P Polytechnic College, Kopargaon. With a keen
          interest in building efficient and scalable web and mobile
          applications, I’m always exploring the latest technologies to enhance
          my skills and deliver impactful solutions.
        </p>
        <div className=" h-auto pt-6 flex flex-row w-full">
          <div className="personal-info grid grid-rows-6 grid-cols-2 w-[70%]">
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">Birthday:</strong>5 sep 2004
            </div>
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">Age:</strong>20
            </div>
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">College:</strong>Dr. D. Y. Patil College
              of Engineering
            </div>
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">Degree:</strong>Cs
            </div>
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">City:</strong>Malegaon
            </div>
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">Email:</strong>salunkeom474@gmail
            </div>
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">Phone No:</strong>+918390471333
            </div>
            <div className=" w-fit pb-2 mb-4 border- border-b-2 gray-500">
              <strong className="pr-2">Freelance:</strong>Available
            </div>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-[30vh]"
            >
              Download CV
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-[30vh]"
            >
              Hire Me!
            </button>
          </div>
          <div className="">
            <div className="flex flex-row gap-6">
              <span
                className={` ${
                  selectDetails == 0 && " border-b-2 border-red-500"
                } cursor-pointer `}
                onClick={() => setSelectDetails(0)}
              >
                Achievement
              </span>
              <span
                className={` ${
                  selectDetails == 1 && " border-b-2 border-red-500"
                } cursor-pointer `}
                onClick={() => setSelectDetails(1)}
              >
                Goals
              </span>
              <span
                className={` ${
                  selectDetails == 2 && " border-b-2 border-red-500"
                } cursor-pointer `}
                onClick={() => setSelectDetails(2)}
              >
                Other Details
              </span>
            </div>
            <div className="detail-card w-full px-4 py-4 ">
              {selectDetails == 0 && (
                <ul className="flex flex-col gap-2 list-disc">
                  <li>Code War - 1st rank</li>
                  <li>Techbliz Hackathon - 3rd rank</li>
                  <li>Mathematical Twist</li>
                  <li>Project Completion</li>
                  <li>Paper Presentation</li>
                </ul>
              )}
              {selectDetails == 1 && (
                <ul className="list-disc flex flex-col gap-2">
                  <li>
                    Short-Term Goals
                    <ul className="pl-4 list-decimal">
                      <li>Enhance Blockchain Expertise</li>
                      <li>Contribute to Open Source</li>
                      <li>Explore Web3</li>
                    </ul>
                  </li>
                  <li>
                    Long-Term Goals
                    <ul className="pl-4 list-decimal">
                      <li>Become a Thought Leader</li>
                      <li>Master Cloud and DevOps</li>
                    </ul>
                  </li>
                </ul>
              )}
              {selectDetails == 2 && (
                <ul className="list-disc flex flex-col gap-2">
                  <li>
                    Strengths
                    <ul className="pl-4 list-decimal">
                      <li>Adaptability</li>
                      <li>Problem-Solving Skills</li>
                      <li>Effective Communication</li>
                      <li>Continuous Learning</li>
                    </ul>
                  </li>
                  <li>
                    Weaknesses
                    <ul className="pl-4 list-decimal">
                      <li>Overcommitment</li>
                      <li>Emotional</li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
