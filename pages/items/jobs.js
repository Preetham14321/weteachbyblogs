import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import CptJobs from "../../Components/StudentCorner/CptJobs";
import ElectJobs from "../../Components/StudentCorner/ElectJobs";
import ElectricJobs from "../../Components/StudentCorner/ElectricJobs";
import CyberJobs from "../../Components/StudentCorner/CyberJobs";
import MechJobs from "../../Components/StudentCorner/MechJobs";
import ChemicalJobs from "../../Components/StudentCorner/ChemicalJobs";
import CommerceJobs from "../../Components/StudentCorner/CommerceJobs";
import AutomobileJobs from "../../Components/StudentCorner/AutomobileJobs";

const Jobs = () => {
  const [branchName, setBranchName] = useState("");
  const [search, setSearch] = useState(false);
  const [error, setError] = useState(false);

  const searchHandler = () => {
    setSearch(true);
  };
  const searchHandler2 = () => {
    setError(true);
  };

  return (
    <div>
      <div
        className="bg-gradient-to-r from-sky-400 to-indigo-200 pb-10 pt-20   relative bottom-8  px-2 container"
        data-aos="fade-down"
      >
        <h1 className="text-6xl font-bold text-center mt-36 h-0 text-purple-600 text-opacity-70 md:text-7xl  ">
          Jobs
        </h1>
        <p className="font-semibold text-center my-36 relative px-0 text-xl text-gray-600 bottom-12 ">
          One Stop To Find All Suitable Jobs According to Your Desired
          Profession and Skills
        </p>
      </div>
      <div
        className="px-2 mb-6 lg:mt-10 lg:mb-40 xl:mt-10 xl:mb-28"
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-500 to-sky-300 m-4 px-4 rounded-lg h-10 pt-2 font-semibold  text-center mb-4 text-xl xl:w-2/4 xl:block xl:m-auto xl:h-14 xl:pt-4 xl:mb-6 ">
          Search Jobs Here
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

          <option value="Computer Science" />
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
        <CptJobs branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <ElectJobs branchName={branchName} search={search} />
      </div>
      <div>
        {branchName === "Civil Engineering" && search ? (
          <h1 className="text-center text-lg font-bold p-10 lg:relative lg:bottom-24">
            {" "}
            Present We Not Found Any Suitable Jobs For Civil Engineering , We
            Promise When we do We Let You Know{" "}
          </h1>
        ) : (
          ""
        )}
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <ElectricJobs branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <CyberJobs branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <MechJobs branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <ChemicalJobs branchName={branchName} search={search} />
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <CommerceJobs branchName={branchName} search={search} />
      </div>
      <div>
        {branchName === "Agriculture Engineering" && search ? (
          <h1 className="text-center text-lg font-bold p-10 lg:relative lg:bottom-24">
            {" "}
            Present We Not Found Any Suitable Jobs For Agriculture Engineering ,
            We Promise When we do We Let You Know{" "}
          </h1>
        ) : (
          ""
        )}
      </div>
      <div className="xl:grid xl:grid-cols-3 ">
        <AutomobileJobs branchName={branchName} search={search} />
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
