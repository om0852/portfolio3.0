import React from "react";
import ServiceCard from "./ServiceCard";

const data = [
  {
    title: "UI/UX Design",
    img: "https://img.icons8.com/?size=100&id=102562&format=png&color=000000",
    description:
      "Crafting intuitive and visually appealing interfaces that enhance user experience through thoughtful design and seamless functionality.",
  },
  {
    title: "Web Development",
    img: "https://img.icons8.com/?size=100&id=63807&format=png&color=000000",
    description:
      "Building dynamic, responsive, and high-performance websites using modern technologies that ensure optimal functionality.",
  },
  {
    title: "Mobile App Development",
    img: "https://img.icons8.com/?size=100&id=HaXrCH33RuCO&format=png&color=000000",
    description:
      "Developing cross-platform mobile applications with sleek UI, strong performance, and seamless user interaction.",
  },
  {
    title: "Smart Contract Development",
    img: "https://img.icons8.com/?size=100&id=84736&format=png&color=000000",
    description:
      "Creating secure, decentralized smart contracts for blockchain applications that ensure transparency and immutability.",
  },
  {
    title: "Database Management",
    img: "https://img.icons8.com/?size=100&id=KZHjwwenS7oK&format=png&color=000000",
    description:
      "Efficiently organizing, storing, and retrieving data to maintain smooth operations and scalability for applications.",
  },
  {
    title: "Cloud Computing Services ",
    img: "https://img.icons8.com/?size=100&id=aXgIQg8m0A4o&format=png&color=000000",
    description:
      "Leveraging cloud platforms to deploy, manage, and scale applications while ensuring data security and accessibility.",
  },
];

const MyService = () => {
  return (
    <div className="w-full py-6 px-4 bg-slate-800">
      <div className="headline grid place-items-center mb-10 text-white relative">
        <div>
          My Services
          <div className="w-[20vh] h-1 bg-red-500 mb-1"></div>
          <div className="w-[15vh] h-1 bg-blue-500 mb-1"></div>
          <div className="w-[10vh] h-1 bg-green-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-0 max-sm:grid-cols-1">
      {data.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
    ))}
    </div>
    </div>
  );
};

export default MyService;
