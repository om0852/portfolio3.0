import React from "react";

const ServiceCard = ({
  title,
  description,
  img,
  index,
}: {
  title: string;
  description: string;
  img: string;
  index: number;
}) => {
  return (
    <div
      className={`w-[100%] h-[auto] py-6 pb-10 ${
        index % 2 == 0 ? "bg-green-500 " : "bg-white"
      }`}
    >
      <h1 className="w-full flex flex-row items-center gap-4 text-xl justify-center p-4">
        <img src={img} width={50} height={50} />
        <span
          className={`font-bold ${
            index % 2 == 0 ? " text-white" : "text-black"
          }`}
        >
          {title}
        </span>{" "}
      </h1>
      <h3 className="pl-4">{description}</h3>
    </div>
  );
};

export default ServiceCard;
