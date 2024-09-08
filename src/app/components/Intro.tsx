"use client"
import React, { useEffect } from "react";
import Profile_Picture from "./ProfilePicture";
import Social_Media from "./Social_Media";
import Typewriter from 'typewriter-effect/dist/core';

const Intro = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: ["Fullstack Developer", "Blockchain Enthusiast", "UI/UX Designer"],
      autoStart: true,
      loop: true, // Optional: to repeat the animation in a loop
      delay: 75,  // Adjust the typing speed (ms per character)
      deleteSpeed: 50, // Adjust the deletion speed
    });

    return () => typewriter.stop(); // Clean up when the component unmounts
  }, []);

  return (
    <div className="w-full h-full">
      <img
        src="./images/bg2.jpg"
        className="w-full h-[100vh] absolute top-0 left-0"
        alt="background"
      />
      <div className="relative w-[80%] h-[50vh] mx-auto text-white flex items-center">
        <div className="w-[100%] h-[50%] grid place-items-start px-6">
          <h1 className="w-[100%] text-6xl">
            Hi There <br /> I'm{" "}
            <span className="text-red-500 font-semibold">Om Salunke</span>
          </h1>
          <h1 className="w-[100%] text-4xl">
            A{" "}
            <span className="text-green-500 font-semibold" id="typewriter">
              {/* This span will contain the dynamic text from Typewriter */}
            </span>
          </h1>
          <button
            type="button"
            className="text-xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 my-4 mb-2"
          >
            About Me
          </button>
          <Social_Media />
        </div>
        <div className="w-fit">
          <Profile_Picture />
        </div>
      </div>
    </div>
  );
};

export default Intro;
