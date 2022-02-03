import React, { useState, useEffect, useRef } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { submitComment } from "../public/commentapi";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <>
      <div className="shadow-lg rounded-lg p-8 pb-12 mb-8" data-aos="fade-up">
        <h3 className="text-xl mb-8 text-center font-semibold border-b pb-4">
          Want To Say Something
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            ref={commentEl}
            className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Share Your Thoughts"
            name="comment"
            required
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            ref={nameEl}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            ref={emailEl}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input
              ref={storeDataEl}
              type="checkbox"
              id="storeData"
              name="storeData"
              value="true"
            />
            <label
              className="text-gray-500 cursor-pointer ml-2"
              htmlFor="storeData"
            >
              Save my Credentials for the Next time I Comment.
            </label>
          </div>
        </div>
        {error && (
          <p className="text-xs text-red-500">All fields Are Required</p>
        )}
        <div className="mt-8 ">
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
          >
            Post Comment
          </button>
        </div>
      </div>
      {showSuccessMessage && (
        <>
          <div className="bg-slate-800 bg-opacity-70 flex justify-center  items-center fixed top-24 right-0 bottom-0 left-0 z-20  ">
            <div className="bg-white opacity-85  px-16 py-14 rounded-md text-center ">
              <span className="text-xl float-right font-semibold mt-3 mb-6 opacity-100 text-indigo-900 md:px-1">
                Thanks For Commenting.. <br /> Comment Submitted for Review
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CommentsForm;
