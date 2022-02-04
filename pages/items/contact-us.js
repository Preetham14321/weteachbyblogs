import React, { useState } from "react";
import { Footer } from "../../Components";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { NextSeo } from "next-seo";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const SEO = {
    title: "Contact Us - WeteachbyBlogs",
    description:
      "We will Feel Happy if you Reach us , and  We are Always open to hear your Queries and Give the Best Solutions ASP.",

    openGraph: {
      title: "Contact Us - WeteachbyBlogs",
      description:
        "We will Feel Happy if you Reach us , and  We are Always open to hear your Queries and Give the Best Solutions ASP."
    }
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="mb-4 lg:px-20 xl:px-40 px-6 ">
        <form
          action="https://formspree.io/f/xdoykbva"
          method="POST"
          data-aos="fade-down"
        >
          <h1 className="text-gray-700 lg:ml-0 md:ml-40 reach mb-4 text-center xl:w-2/5 bg-gray-300 lg:w-80 bg-opacity-60 md:w-96 font-semibold rounded-lg ml-3   ">
            Reach Us
          </h1>

          <div className="md:ml-48 contact-box lg:ml-0 ">
            <input
              type="text"
              placeholder="Name *"
              required={true}
              name="name"
              className="mb-5 px-2 xl:mb-6 contact_sub  xl:w-2/5 md:w-80"
            />
            <input
              type="email"
              required={true}
              name="email"
              placeholder="Email *"
              className="mb-5 xl:mb-6 contact_sub  xl:w-2/5 md:w-80 px-2"
            />
            <input
              required={true}
              type="text"
              name="text"
              placeholder="Your Subject *"
              className="mb-5 xl:mb-6 contact_sub   xl:w-2/5 md:w-80 px-2"
            />
            <textarea
              required={true}
              type="text"
              name="textarea"
              placeholder="Your Message *"
              className=" px-2  xl:w-2/5 md:w-80 pb-20 pt-2 mb-3 textareas  h-40"
            />
            <button
              className="transition duration-500 transform hover:-translate-y-1 mt-2 inline-block bg-green-600 bg-opacity-90 text-lg font-medium rounded-full text-white xl:w-60 px-8 py-3 cursor-pointer"
              type="submit"
            >
              {" "}
              Send Message
            </button>
          </div>
        </form>
        <div
          className="lg:w-96 lg:left-96 lg:ml-20 xl:ml-96 lg:bottom-96 contact-col xl:relative "
          data-aos="fade-up"
        >
          <h1 className="text-gray-700 mt-20  xl:float-right  text-xl p-3 mb-4 text-center bg-gray-300 bg-opacity-60 font-semibold ">
            We Will Feel Happy If you Reach Us
          </h1>
          <div className=" text-center xl:relative xl:top-10   ">
            <div className=" bg-blue-400 mb-2 xl:absolute xl:left-40 xl:ml-2 xl:top-32  pl-1 pt-1 c-icon w-10 h-10 rounded-full   ">
              <HiLocationMarker />
            </div>
            <h1 className="text-gray-700 xl:relative xl:top-2  mb-5 font-bold">
              Hyderabad TELANGANA
            </h1>

            <div className=" bg-blue-400 mb-2  pl-1 pt-1 c-icon w-10 h-10 rounded-full xl:mt-12  ">
              <HiOutlineCalendar />
            </div>

            <h1 className="text-gray-700 mb-5  font-bold">Open on Every Day</h1>

            <div className=" bg-blue-400 xl:mt-10 mb-2 pl-1 pt-1 c-icon w-10 h-10 rounded-full ">
              <HiOutlinePhone />
            </div>
            <h1 className="text-gray-700 mb-5  font-bold">
              +91 9381624403 <br /> +91 8019624403
            </h1>

            <div className=" xl:mt-10 bg-blue-400 mb-2 pl-1 pt-1 c-icon w-10 h-10 rounded-full ">
              <HiOutlineMail />
            </div>
            <h1 className="text-gray-700 font-bold">
              weteachbyblogs@gmail.com
            </h1>
          </div>
        </div>

        <div className=" lg:relative lg:bottom-96 contact-follow bg-black-600">
          <h1 className="text-gray-700 mt-14 text-xl p-3 mb-4 text-center bg-gray-300 bg-opacity-60 font-semibold">
            Follow us
          </h1>
          <div className="wrapper text-gray-400">
            <div className="icon icon1 bc-color facebook">
              <div className="tooltip">Facebook</div>

              <a href="https://www.facebook.com/Weteachbyblogs-101014792489180/">
                <BsFacebook />
              </a>
            </div>
            <div className="icon bc-color icon2 twitter">
              <div className="tooltip">Twitter</div>
              <a href="https://twitter.com/weteachbyblogs">
                <BsTwitter />
              </a>
            </div>
            <div className="icon bc-color icon3 instagram">
              <div className="tooltip">Instagram</div>
              <a href="https://www.instagram.com/we_teach_by_blogs/">
                <BsInstagram />
              </a>
            </div>
            <div className="icon bc-color icon4  youtube">
              <div className="tooltip">Youtube</div>
              <a href="https://www.youtube.com/channel/UCnhZGSXYPM7ZdC0B5PL2iSA">
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
