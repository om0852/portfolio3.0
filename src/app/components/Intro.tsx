import React from "react";
import Profile_Picture from "./ProfilePicture";
import Social_Media from "./Social_Media";

const Intro = () => {
  return (
    <div className="w-full h-full">
      <img
        src="./images/bg2.jpg"
        className="w-full h-[100vh] absolute top-0 left-0"
      />
      <div className="relative w-[80%] h-[50vh] mx-auto text-white flex items-center">
        <div className="w-[100%] h-[50%] grid place-items-start px-6">
          <h1 className="w-[100%]   text-6xl ">
            Hi There <br /> I'm{" "}
            <span className="text-red-500 font-semibold">Om Salunke</span>
          </h1>
          <button
            type="button"
            className="text-xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 my-4 mb-2"
          >
            About Me
          </button>
          <Social_Media/>
        </div>
        <div className="w-fit ">
          <Profile_Picture />
        </div>
      </div>
    </div>
  );
};

export default Intro;
