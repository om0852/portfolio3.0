import React from "react";

const Intro = () => {
  return (
    <div className="w-full h-full">
      <img
        src="./images/bg2.jpg"
        className="w-full h-[100vh] absolute top-0 left-0"
      />
      <div className="relative bg-green-300 w-[70%] h-[50vh] mx-auto text-white flex items-center">
        <div className="w-[100%] h-[50%] grid place-items-center  px-6">
          <h1 className="w-full text-4xl">Hi There <br/> I'm Om Salunke</h1>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Intro;
