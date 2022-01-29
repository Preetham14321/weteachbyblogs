import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const InternshipCard = ({ jobtitle, location, ctc, href }) => {
  return (
    <div className="">
      <div
        className="bg-blue-500 bg-opacity-70 m-10   p-10 shadow-2xl lg:relative lg:bottom-20 md:w-3/5 md:mb-10 md:block md:m-auto xl:h-60  xl:mb-10 xl:p-4 xl:m-10 xl:ml-32   xl:w-3/5 xl:pt-10"
        data-aos="flip-left"
      >
        <h1
          className="text-center text-lg font-semibold text-gray-200 mb-2"
          data-aos="fade-down"
        >
          {jobtitle}
        </h1>
        <hr data-aos="fade-right" />
        <h1
          className="text-center text-lg font-semibold text-gray-200 mb-2 mt-2 border-lg "
          data-aos="fade-up"
        >
          {` ${location}`}
        </h1>
        <hr data-aos="fade-down" data-aos-duration="4000" />
        <h1
          className="text-center text-lg font-semibold text-gray-200 mb-2"
          data-aos="fade-down"
        >
          {`₹ ${ctc}`}
        </h1>
        <hr data-aos="fade-up" />
        <a href={href} rel="noreferrer" target="_blank">
          <button className="bg-indigo-500 bg-opacity-40 block m-auto mt-3 w-32 text-lg font-semibold rounded-lg">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default InternshipCard;
