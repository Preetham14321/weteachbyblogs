import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const StdDry = ({ href, onClick }) => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div
        className="bg-gradient-to-r from-sky-600 to-sky-300 m-10  text-center p-10 lg:relative lg:bottom-20 lg:h-48 shadow-2xl xl:h-60 xl:w-1/2 xl:block xl:m-auto xl:mb-10"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <h1 className="font-semibold text-md text-gray-100 mb-4">
          " We Have Found Best Scholarships For Best Person Click Down to Check
          "
        </h1>
        <a href={href}>
          <button
            className="bg-gradient-to-r from-sky-600 to-sky-300 block m-auto mt-2 w-32 text-lg font-semibold rounded-lg "
            onClick={onClick}
          >
            Click Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default StdDry;
