import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/router";

import Aos from "aos";
import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";
import { getCategories } from "../services";

// import { BsChevronDown } from "react-icons/bs";
// import { BsChevronUp } from "react-icons/bs";

const Header = ({}) => {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const router = useRouter();

  // Adding the Spinner to page

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // localStorage.setItem(1, email);
      // localStorage.clear();
      // if (localStorage.length > 0) {
      //   setShowLogout(!showLogout);
      //   setShowAccount(false);
      //   // setShowLogout(true);
      // }
      // if (localStorage.length > 0) {
      //   setShowAccount(false);
      // }

      if (router.pathname === "/login") {
        setShowLogout(false);
      }
      if (router.pathname === "/signup") {
        setShowLogout(false);
      }
    }
  }, [setShowLogout, router.pathname, setShowAccount]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const showAccountHandler = () => {
    if (router.pathname === "/login") {
      setShowAccount(!showAccount);
    }
    if (router.pathname === "/signup") {
      setShowAccount(!showAccount);
    }
    // if (router.pathname === "/" && localStorage.length > 1) {
    //   setShowLogout(!showLogout);
    // }
    (router.pathname === "/" && localStorage.length < 1) ||
    localStorage.length > 1
      ? setShowLogout(!showLogout)
      : setShowAccount(!showAccount);

    setShowAbout(false);
    // setShowLogout(false);
    // if (localStorage.length > 0) {
    //   setShowAccount(false);
    //   setShowLogout(true);
    // }
  };
  const showAboutHandler = () => {
    setShowAbout(!showAbout);
    setShowAccount(false);
  };

  const showContentHandler = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      // data-aos="flip-right"
      className="container shadow-lg sticky top-0 z-20 nav__background  mx-auto px-10 mb-8 md:h-24 lg:2"
    >
      <div className=" w-full inline-block  py-8">
        <div className="md:float-left block">
          <Link passHref href="/">
            <h1 className=" font-bold cursor-pointer logo">
              wE teach by Blogs
            </h1>
          </Link>
        </div>
        {/* {spinner && !(router.pathname === "/category/[slug]") ? (
          <p className="text-6xl bg-sky-400 bg-opacity-50 left-96 ml-80 absolute top-80 text-center text-red-900">
            Loading...
          </p>
        ) : (
          ""
        )} */}
        {showMenu ? (
          <HiX
            data-aos="flip-left"
            className="nav-menu lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        ) : (
          <HiMenu
            data-aos="flip-right"
            className="nav-menu  lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        )}

        <div
          className={
            (showMenu ? "left-0 " : "hidden") +
            " flex -left-full lg:text-slate-500 lg:bg-gradient-to-r lg:from-white lg:to-white   flex-col-reverse text-center bg-opacity-20 text-stone-50   backdrop-blur-sm  bg-gradient-to-r from-cyan-500 to-blue-500 md:bg-opacity-50 md:mt-6  p-2 lg:flex  lg:flex-row-reverse  lg:relative lg:float-right lg:bottom-9 lg:left-9  xl:bottom-8 xl:left-0"
          }
          data-aos="fade-in-up"
          data-aos-duration="2000"
        >
          {showAbout && (
            <>
              <div className="bg-gray-500 h-20 w-40 m-auto flex flex-col lg:top-10 lg:absolute lg:right-16 lg:opacity-70 lg:text-white lg:w-32">
                <Link passHref key="about" href="/about">
                  <span
                    className="  md:float-right  mt-2 align-middle hover:text-indigo-900   ml-4 font-semibold lg:ml-0 cursor-pointer"
                    onClick={() => {
                      setShowMenu(false);
                      setShowAbout(false);
                      setShowAccount(false);
                    }}
                  >
                    About-Us{" "}
                  </span>
                </Link>
                <hr />
                <Link passHref key="contact" href="/items/contact-us">
                  <span
                    className="md:float-right  mt-2 align-middle hover:text-indigo-900 lg:ml-0   ml-4 font-semibold cursor-pointer"
                    onClick={() => {
                      setShowMenu(false);
                      setShowAbout(false);
                    }}
                  >
                    Contact-Us
                  </span>
                </Link>
              </div>
            </>
          )}
          <button
            className="dropbtn md:float-right  mt-2 align-middle hover:text-indigo-900    ml-4 font-semibold cursor-pointer"
            onClick={showAboutHandler}
          >
            About{" "}
          </button>

          <div className=" md:float-left md:contents">
            {categories.map((category) => (
              <Link
                passHref
                key={category.slug}
                href={`/category/${category.slug}`}
              >
                <span
                  className="md:float-right  topic  mt-2 align-middle hover:text-indigo-900   ml-4 font-semibold cursor-pointer"
                  onClick={() => {
                    setShowMenu(false);

                    setSpinner(true);
                    setShowAccount(false);
                  }}
                >
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
          {/* ~~~~~~~~~~~~~ Student Corner ~~~~~~~~~~ */}
          {showContent && (
            <div className="bg-gray-500 h-32 w-40 m-auto flex flex-col lg:top-10 lg:absolute lg:left-16 lg:ml-3 lg:opacity-70 lg:text-white lg:w-28  xl:w-32">
              <Link passHref key="scholarship" href="/items/scholarships">
                <span
                  className="md: mt-2 align-middle hover:text-indigo-900      ml-4 lg:ml-0 font-semibold cursor-pointer"
                  onClick={() => {
                    setShowMenu(false);
                    setShowContent(false);
                  }}
                >
                  Scholarships
                </span>
              </Link>
              <hr />
              <Link passHref key="jobs" href="/items/jobs">
                <span
                  className="md: mt-2 align-middle hover:text-indigo-900      ml-4 lg:ml-0 font-semibold cursor-pointer"
                  onClick={() => {
                    setShowMenu(false);
                    setShowContent(false);
                  }}
                >
                  Jobs
                </span>
              </Link>
              <hr />
              <Link passHref key="login" href="/items/internships">
                <span
                  className="md: mt-2 align-middle hover:text-indigo-900      ml-4 lg:ml-0 font-semibold cursor-pointer"
                  onClick={() => {
                    setShowMenu(false);
                    setShowContent(false);
                  }}
                >
                  Internships
                </span>
              </Link>
            </div>
          )}
          <button
            className="md:float-right mt-2 align-left   hover:text-indigo-900 font-semibold cursor-pointer "
            onClick={showContentHandler}
          >
            Student Corner
          </button>
          {/* {showContent ? (
            <div className="drop-arrow">
              <BsChevronUp />
            </div>
          ) : (
            <div className="drop-arrow">
              <BsChevronDown />
            </div>
          )} */}

          <Link passHref key="home" href="/">
            <span
              className="md:float-right mt-2  mr-2 align-left   hover:text-indigo-900 font-semibold cursor-pointer "
              onClick={() => {
                setShowMenu(false);
                setShowAccount(false);
                setSpinner(false);
              }}
            >
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
