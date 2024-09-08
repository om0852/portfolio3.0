import React from "react";
import Marquee from "react-fast-marquee";

const Skill = () => {
  const technologies = [
    "NodeJs",
    "ExpressJS",
    "Django",
    "NestJs",
    "Spring",
    "PHP",
  ];
  const frontendTechnologies = [
    "HTML5",
    "CSS",
    "SASS",
    "Javascript",
    "ReactJs",
    "Typescript",
    "NextJs",
    "AngularJs",
  ];
  const tools = [
    "Tailwind",
    "Prisma",
    "GraphQL",
    "NextAuth",
    "Clerk",
    "Bootstrap",
    "Git",
    "Docker",
  ];
  return (
    <section className="w-full h-[100vh] bg-slate-800">
      <div className="headline grid place-items-center mb-10 text-white relative">
        <div>
          Skills
          <div className="w-[20vh] h-1 bg-red-500 mb-1"></div>
          <div className="w-[15vh] h-1 bg-blue-500 mb-1"></div>
          <div className="w-[10vh] h-1 bg-green-500"></div>
        </div>
      </div>
      <div>
        <div className="mx-auto w-[90%] h-[50vh] border-[2px] border-red-700 rounded-md bg-slate-600">
          <div className="scroller mx-auto  ">
            <div className="my-8">
              <Marquee >
                {frontendTechnologies.map((tech, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-4 mx-[8vh] w-[20vh] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {tech}
                  </button>
                ))}
              </Marquee>
            </div>
            <div className="my-8">
              <Marquee direction="right">
                {technologies.map((tech, index) => (
                  <button
                    key={index}
                    type="button"
                    className="text-white w-[20vh] mx-[8vh] bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {tech}
                  </button>
                ))}
              </Marquee>
              <div className="my-8">
                <Marquee>
                  {tools.map((tool, index) => (
                    <button
                      key={index}
                      type="button"
                      className="w-[20vh] mx-[8vh] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      {tool}
                    </button>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
