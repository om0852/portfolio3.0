import React from "react";
import { socialMedia } from "../../../utils/social_media";

const Social_Media = () => {
  return (
    <div className=" flex gap-4 my-4 flex-row">
      {socialMedia.map((data, index) => (
        <div className="w-[8vh] " key={index}>
          <img className="w-full" src={data.img} />
        </div>
      ))}
    </div>
  );
};

export default Social_Media;
