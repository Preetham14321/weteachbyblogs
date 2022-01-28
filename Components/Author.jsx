import React, { useEffect } from "react";
import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css";

const Author = ({ author }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  console.log(author);
  return (
    <div
      className="text-center mt-20 mb-8 p-12 relative rounded-lg shadow-lg bg-black bg-opacity-5"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
        />
      </div>
      <h3 className=" my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-lg"> {author.bio}</p>
    </div>
  );
};

export default Author;
