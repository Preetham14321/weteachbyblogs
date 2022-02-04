import React, { useState } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer";
import CompIntern from "../../Components/StudentCorner/CompIntern";
import ElectIntern from "../../Components/StudentCorner/ElectIntern";
import CivilIntern from "../../Components/StudentCorner/CivilIntern";
import ElectricIntern from "../../Components/StudentCorner/ElectricIntern";
import CyberIntern from "../../Components/StudentCorner/CyberIntern";
import MechIntern from "../../Components/StudentCorner/MechIntern";
import ChemicalIntern from "../../Components/StudentCorner/ChemicalIntern";
import CommerceIntern from "../../Components/StudentCorner/CommerceIntern";
import AgricultureIntern from "../../Components/StudentCorner/AgricultureIntern";

import { NextSeo } from "next-seo";

const Internships = () => {
  const [branchName, setBranchName] = useState("");
  const [search, setSearch] = useState(false);

  const searchHandler = () => {
    setSearch(true);
  };
  const searchHandler2 = () => {
    setError(true);
  };

  const SEO = {
    title: "Internships | WeteachbyBlogs",
    description: "Top Matching Internships For Your Proficient Skills.",

    openGraph: {
      title: "Internships | WeteachbyBlogs",
      description: "Top Matching Internships For Your Proficient Skills."
    }
  };

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="InternshipsForbtech,InternshipComputerscience,Internships"
        />
      </Head>

      <NextSeo {...SEO} />
      <div
        className="bg-gradient-to-r from-indigo-400 to-blue-300 pb-10 pt-20   relative bottom-8  px-2 container"
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-bold text-center mt-36 h-0 text-blue-600 text-opacity-70 md:text-7xl  ">
          Internships
        </h1>
        <p className="font-semibold text-center my-36 relative px-0 text-xl text-gray-600 bottom-12 ">
          Top Matching Internships For Your Proficient Skills
        </p>
      </div>
      <div
        className="px-2 mb-6 lg:mt-10 lg:mb-40 xl:mt-10 xl:mb-28"
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-500 to-sky-300 m-4 px-4 rounded-lg h-10 pt-2 font-semibold  text-center mb-4 text-xl xl:w-2/4 xl:block xl:m-auto xl:h-14 xl:pt-4 xl:mb-6 ">
          Search Internships Here
        </h1>
        <input
          list="std-branch"
          className="bg-blue-200 w- px-4 rounded-lg  text-lg text-center block m-auto mt-2 md:w-80"
          placeholder="Select Branch *"
          required
          onChange={(e) => {
            setBranchName(e.target.value);
          }}
          value={branchName}
          onClick={() => {
            setSearch(false);
            if (branchName.length > 0) {
              setBranchName("");
            }
          }}
        />
        <datalist id="std-branch">
          <option value="Automobile Engineering" />

          <option selected value="Computer Science"></option>
          <option value="Electronics and communication" />
          <option
            value="Civil
Engineering"
          />
          <option
            value="Electrical
Engineering"
          />
          <option
            value="CyberSecurity
& hacking"
          />
          <option
            value="Mechanical
Engineering"
          />
          <option value="Chemical Engineering" />
          <option value="Commerce" />
          <option
            value="Agriculture
Engineering"
          />
        </datalist>
        {branchName.length > 0 ? (
          <button
            className="bg-gradient-to-r from-blue-500 to-sky-300 block m-auto mt-4 w-32 text-lg font-semibold rounded-lg shadow-2xl"
            onClick={searchHandler}
          >
            Search
          </button>
        ) : (
          <button
            className="bg-gradient-to-r from-blue-500 to-sky-300 block m-auto mt-4 w-32 text-lg font-semibold rounded-lg shadow-2xl"
            onClick={searchHandler2}
          >
            Search
          </button>
        )}
      </div>

      <div className="xl:grid xl:grid-cols-3 ">
        <CompIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <ElectIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <CivilIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <ElectricIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <CyberIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <MechIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <ChemicalIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <CommerceIntern branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <AgricultureIntern branchName={branchName} search={search} />
      </div>
      <Footer />
    </div>
  );
};

export default Internships;
