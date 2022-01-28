import React from "react";
import { Footer } from "../../Components";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>About Us - WeteachbyBlogs</title>
        <meta name="description" content="About at WeteachbyBlogs" />
        <meta property="og:title" content="About us - WeteachbyBlogs" />
      </Head>
      <div className="px-4 xl:px-8 mb-5">
        <h1 className="text-5xl font-bold ">About</h1>
        <div className="bg-blue-300 mt-10 p-10 drop-shadow-xl bg-opacity-20">
          <h1 className="text-xl text-gray-700 mt-10 mb-3 font-semibold">
            Who we Are
          </h1>
          <p className="">
            <span className="font-semibold ">Weteachbyblogs</span> is one of the
            top Platform which helps Students, Jobseekers and Freshers. The main
            Goal of Platform is to Provide Hybrid solution for all things like
            Programming Languages, Programming Queries, Ethical Hacking,
            Technology, About Jobs, Scholarships, Internships, And Daily IT News
            Updates Etc... We strongly believe that insted of Speaking about
            something we show it in the Results.
          </p>
        </div>
        <div className="drop-shadow-lg p-8 md:mb-7">
          <h1 className="text-xl text-gray-700 mt-10 font-semibold mb-3">
            How we Perform
          </h1>
          <p className="">
            We Are the Group of People who Try To solve Challenges in Easy Way.
            And we try Our Best to do the same with others , As per we know{" "}
            <b>"In this World Every Problem has the solution"</b>, In similar
            way we Choose Strong Problems and we try to find Strong solution
            with competative to it. We Hire intellectual and Smart Peoples who
            converts our vision into Possibilities. We help Learner in order to
            solve their Queries and We Help Jobseekers by Providing Best
            Opportunity which are exist in <b> "Tech World"</b>, As well as we
            help Students by Providing Best Scholarships which they can Apply.
          </p>
        </div>
        <div className="bg-blue-500 p-10 drop-shadow-lg bg-opacity-30 md:mb-16">
          <h1 className="text-xl text-gray-700 mt-10 mb-3 font-semibold">
            More About us
          </h1>
          <p className="">
            To know More About us you can skim our Website once, You get a
            better understanding what actually we are, Our Main Mission is To
            Provide Everything for Free and to show Free things are not cheaper
            than Paid. In our Website You get Best Content which are Better Than
            Paid Courses are others. <br /> <br />
            In our Youtube Channel You Get Guidence about your Career, and How
            to stay Strong in Bad times. We Organize Competitions for the
            Students and Professions.which Help them to enhance their Skills.
            And we are here For Everyone And we help Everyone who are in Needy.
            And to know More about Our Events You can Follow us on our Social
            Media.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
