import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer px-0 text-white">
      <div className="content-center md:px-10 xl:px-40 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="mb-4 ">
            <h1 className="font-bold mb-2  ml-3">WE TEACH BY BLOGS</h1>
            <div className="description ">
              <p className="text-sm mb-4 text-gray-400">
                A Best Place Where Knowledge And Opprtunities are Exist
              </p>

              <span className="text-sm mb-3 text-gray-400">🌍 Hyderabad</span>

              <div className="text-sm mb-2 mt-2 phone text-gray-400">
                📞 +91 9381624403 / 8019624403
              </div>
              <div className="text-sm email text-gray-400">
                📧 weteachbyblogs@gmail.com
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="w-2 min-w-min ml-2  md:pl-8 md:pr-5 xl:ml-5  md:mr--2 ">
              <h1 className="font-semibold ml-2 mb-2 md:w-32">Quick Links</h1>
              <div className="ml-2 xl:ml-4 text-sm text-gray-400 cursor-pointer hover:text-white">
                <Link href="/" className="block text-sm ml-2  ">
                  Home
                </Link>
              </div>
              <div className="ml-2 xl:ml-4 mt-1 text-sm text-gray-400 cursor-pointer hover:text-white">
                <Link href="/about">About</Link>
              </div>
              <div className="ml-2 xl:ml-4 mt-1 text-sm text-gray-400 cursor-pointer hover:text-white">
                <Link href="/items/contact-us">Contact</Link>
              </div>
              <div className="text-sm xl:ml-4  mt-1 ml-2 text-gray-400 cursor-pointer hover:text-white">
                <Link href="/items/programs">Programs</Link>
              </div>
            </div>
            <div className=" mr-6 pl-7 md:mr-8 md:pl-4  lg:ml-9 xl:ml-20 xl:pl-15">
              <h1 className=" font-semibold mb-2 ml-1  ">Follow us</h1>
              <div className="text-gray-400">
                <div className="flex mb-1">
                  <BsFacebook />
                  <p className="text-sm ml-2 hover:text-white cursor-pointer ">
                    <a href="https://www.facebook.com/Weteachbyblogs-101014792489180/">
                      Facebook
                    </a>
                  </p>
                </div>
                <div className="flex mb-1">
                  <BsInstagram />

                  <p className="text-sm ml-2 hover:text-white cursor-pointer">
                    <a href="https://www.instagram.com/we_teach_by_blogs/">
                      Instagram
                    </a>
                  </p>
                </div>
                <div className="flex mb-1">
                  <a href="https://twitter.com/weteachbyblogs"></a>
                  <BsTwitter />
                  <p className="text-sm ml-2 hover:text-white cursor-pointer">
                    <a href="https://twitter.com/weteachbyblogs">Twitter</a>
                  </p>
                </div>
                <div className="flex text-gray-400 ">
                  <BsYoutube />

                  <a
                    href="https://www.youtube.com/channel/UCnhZGSXYPM7ZdC0B5PL2iSA"
                    className="ml-2 text-sm hover:text-white"
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:ml-10 mr-3 xl:ml-18">
              <h1 className="font-semibold mb-2 ml-1 flex">Site Links</h1>
              <Link href="/privacy">
                <span className="flex text-gray-400 text-sm ml-1 hover:text-white cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms&conditions">
                <span className="flex text-gray-400 text-sm  hover:text-white cursor-pointer">
                  Terms&Condition
                </span>
              </Link>
            </div>
          </div>
          <hr className="divider xl:w-10/12" />
          <div className="text-center quickLink xl:mr-24 xl:pr-10 text-gray-400 ">
            <Link href="/" className="hover:text-white">
              <span className="hover:text-white cursor-pointer">Home</span>
            </Link>
            <Link href="/items/donate">
              <span className="hover:text-white cursor-pointer">| Donate</span>
            </Link>

            <Link href="/items/contact-us">
              <span className="hover:text-white cursor-pointer">| Contact</span>
            </Link>
          </div>

          <div className="text-sm text-center copyright xl:ml-16 xl:mb-11 xl:mt-1   text-gray-400">
            {" "}
            © weteachbyblogs All Rights Reserved
          </div>
        </div>
        <div className="wrapper text-gray-400">
          <div className="icon icon1 facebook">
            <div className="tooltip">Facebook</div>
            <a href="https://www.facebook.com/Weteachbyblogs-101014792489180/">
              <BsFacebook />
            </a>
          </div>
          <div className="icon icon2 twitter">
            <div className="tooltip">Twitter</div>
            <a href="https://twitter.com/weteachbyblogs">
              <BsTwitter />
            </a>
          </div>
          <div className="icon icon3 instagram">
            <div className="tooltip">Instagram</div>
            <a href="https://www.instagram.com/we_teach_by_blogs/">
              <BsInstagram />
            </a>
          </div>
          <div className="icon icon4  youtube">
            <div className="tooltip">Youtube</div>
            <a href="https://www.youtube.com/channel/UCnhZGSXYPM7ZdC0B5PL2iSA">
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className="text-sm  text-center md:static xl:pt-2 xl:text-sm text-gray-400">
          Made with 🧡 By Banavath Preetham Kumar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
