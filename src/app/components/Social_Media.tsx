import React from "react";
import { socialMedia } from "../../../utils/social_media";
import Link from "next/link";

const Social_Media = () => {
  return (
    <div className=" flex gap-4 my-4 flex-row">
      {socialMedia.map((data, index) => (
        <Link
          href={data.link}
          target="_blank"
          className="w-[8vh] sm:w-[8vh] "
          key={index}
          rel="noopener noreferrer"
          aria-label={data.name || `social-${index}`}
        >
          <img className="w-full " src={data.img} alt={data.name || "social"} />
        </Link>
      ))}
    </div>
  );
};

export default Social_Media;
