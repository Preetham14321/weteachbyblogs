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
import Axios from "axios";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState(false);
  console.log(name, email, subject, message);
  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://weteachbyblogsdb.chrpmome0sw2.ap-south-1.rds.amazonaws.com:3001/api/contact", {
      name: name,
      email: email,
      subject: subject,
      message: message
    }).then(() => {
      // alert("done");
    });
    setAlertMessage(true);
    setTimeout(() => {
      setAlertMessage(false);
    }, 3000);
    name.length > 0 &&
    email.length > 0 &&
    subject.length > 0 &&
    email.includes("@") &&
    message.length > 0
      ? (setName(""), setEmail(""), setMessage(""), setSubject(""))
      : "";

    if (name.length < 1) {
      alert("Please Fill Name Input ThankYou");
      setAlertMessage(false);
    }
    if (email.length < 2 && !email.includes("@")) {
      alert("Please Fill Email Input ThankYou");
      setAlertMessage(false);
    }
    if (subject.length < 1) {
      alert("Please Fill Subject Input ThankYou");
      setAlertMessage(false);
    }
    if (message.length < 1) {
      alert("Please Fill Message Input ThankYou");
      setAlertMessage(false);
    }
  };

  return (
    <>
      <div className="mb-4 lg:px-20 xl:px-40 px-6 ">
        <h1 className="text-gray-700 lg:ml-0 md:ml-40 reach mb-4 text-center xl:w-2/5 bg-gray-300 lg:w-80 bg-opacity-60 md:w-96 font-semibold rounded-lg ml-3  ">
          Reach Us
        </h1>
        <div className="md:ml-48 contact-box lg:ml-0 ">
          <input
            type="text"
            placeholder="Name *"
            value={name}
            required={true}
            className="mb-5 px-2 xl:mb-6 contact_sub  xl:w-2/5 md:w-80"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            className="mb-5 xl:mb-6 contact_sub  xl:w-2/5 md:w-80 px-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            value={subject}
            placeholder="Your Subject *"
            className="mb-5 xl:mb-6 contact_sub   xl:w-2/5 md:w-80 px-2"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="Your Message *"
            value={message}
            className=" px-2  xl:w-2/5 md:w-80 pb-20 pt-2 mb-3 textareas  h-40"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            className="transition duration-500 transform hover:-translate-y-1 mt-2 inline-block bg-green-600 bg-opacity-90 text-lg font-medium rounded-full text-white xl:w-60 px-8 py-3 cursor-pointer"
            onClick={submitHandler}
          >
            {" "}
            Send Message
          </button>
        </div>
        <div
          className="lg:w-96 lg:left-96 lg:ml-20 xl:ml-96 lg:bottom-96 contact-col xl:relative"
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
      {alertMessage && (
        <div className="bg-slate-800 bg-opacity-70 flex justify-center  items-center fixed top-0 right-0 bottom-0 left-0   ">
          <div className="bg-white opacity-85  px-16 py-14 rounded-md text-center ">
            <span className="text-xl float-right font-semibold mt-3 mb-6 opacity-100 text-indigo-900 md:px-1">
              Thanks For Feedback.. <br /> We will get back Soon
            </span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Contact;
