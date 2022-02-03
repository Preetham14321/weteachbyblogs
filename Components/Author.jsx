import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Author = ({ author }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div
      className="text-center mt-20 mb-8 p-12 relative rounded-lg shadow-lg bg-black bg-opacity-5"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <div className=" relative bottom-24  ">
        <img
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle mx-auto  rounded-full"
        />
      </div>
      <h3 className=" my-4  -mt-14 text-xl font-bold">{author.name}</h3>
      <p className="text-lg"> {author.bio}</p>
    </div>
  );
};

export default Author;
