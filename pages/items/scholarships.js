import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import StdDry from "../../Components/StdDry";

const scholarships = () => {
  const [classesName, setClassesName] = useState("");
  const [genderName, setGenderName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [search, setSearch] = useState(false);
  const [error, setError] = useState(false);
  console.log(search);
  console.log(classesName.length);
  console.log(classesName);
  console.log(genderName);
  console.log(countryName);

  useEffect(() => {
    const options = {
      strings: ["Scholarship"],
      typeSpeed: 50,
      backSpeed: 50
    };
  });
  useEffect(() => {
    setClassesName("");
    setGenderName("");
    setCountryName("");
  }, [setCountryName, setGenderName, setClassesName]);

  const searchHandler = () => {
    setSearch(true);
    search ? (setClassesName(""), setGenderName(""), setCountryName("")) : "";
  };
  const searchHandler2 = () => {
    setError(true);
  };

  return (
    <div>
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-300 pb-10 pt-20  h-  relative bottom-8  px-2 container"
        data-aos="fade-down"
      >
        <h1 className="text-6xl font-bold text-center mt-36 h-0 text-blue-700 text-opacity-70 md:text-7xl  ">
          Scholships
        </h1>
        <p className="font-semibold text-center my-36 relative px-0 text-xl text-gray-600 bottom-12 md:text-xl">
          A Best Place To Find All Suitable Scholarships According to Your
          Current Standard
        </p>
      </div>
      <div
        className="px-2 mb-6 lg:mt-20 lg:mb-40 xl:mt-10 xl:mb-28 "
        data-aos="fade-up"
      >
        <h1 className="bg-gradient-to-r from-blue-500 to-sky-300 m-4 px-4 rounded-lg h-10 pt-2 font-semibold  text-center mb-4 text-xl xl:w-2/4 xl:block xl:m-auto xl:h-14 xl:pt-4 xl:mb-6 ">
          Search Scholarships Here
        </h1>
        <input
          list="std-classes"
          className="bg-blue-200 px-4 rounded-lg  text-lg text-center block m-auto mt-2 md:w-80"
          placeholder="Select Class *"
          required
          value={classesName}
          onChange={(e) => setClassesName(e.target.value)}
          onClick={() => {
            setSearch(false);
            if (classesName.length > 0) {
              setClassesName("");
            }
          }}
        />
        <>
          <datalist id="std-classes">
            <option value="Upto Class 8" />
            <option value="Class 9" />
            <option value="Class 10" />
            <option value="Class 11" />
            <option value="Class 12" />
            <option value="Graduation" />
            <option value="Post Graduation" />
            <option value="Post Graduation Diploma" />
            <option value="Phd" />
            <option value="ITI" />
            <option value="Polytechnique/Diploma" />
            <option value="Post Doctoral" />
            <option value="Vocational Course" />
            <option value="Coaching Classes" />
            <option value="All Classes" />
          </datalist>
        </>
        <input
          list="std-gender"
          className="bg-blue-200 px-4 rounded-lg  text-lg text-center block m-auto mt-4 md:w-80"
          placeholder="Select Gender *"
          required
          value={genderName}
          onChange={(e) => setGenderName(e.target.value)}
          onClick={() => {
            setSearch(false);
            if (genderName.length > 0) {
              setGenderName("");
            }
          }}
        />
        <>
          <datalist id="std-gender">
            <option value="Male" />
            <option value="Female" />
            <option value="Third/Trans gender" />
            <option value="All Genders" />
          </datalist>
        </>
        <input
          list="std-country"
          className="bg-blue-200 px-4 rounded-lg  text-lg text-center block m-auto mt-4 md:w-80 "
          placeholder="Select Country *"
          value={countryName}
          required
          onChange={(e) => setCountryName(e.target.value)}
          onClick={() => {
            setSearch(false);
            if (countryName.length > 0) {
              setCountryName("");
            }
          }}
        />
        <>
          <datalist id="std-country">
            <option value="Select Country" className="lg:mt-10" />
            <option value="India" />
          </datalist>
        </>
        {classesName.length > 0 &&
        genderName.length > 0 &&
        countryName.length > 0 &&
        countryName === "India" ? (
          <button
            className="bg-gradient-to-r from-blue-500 to-sky-300 block m-auto mt-4 w-32 text-lg font-semibold rounded-lg shadow-2xl "
            onClick={searchHandler}
          >
            Search
          </button>
        ) : (
          <button
            className="bg-gradient-to-r from-blue-500 to-sky-300 block m-auto mt-4 w-32 text-lg font-semibold rounded-lg shadow-2xl "
            onClick={searchHandler2}
          >
            Search
          </button>
        )}
      </div>

      {/* Combination of 8 female india */}

      {classesName === "Upto Class 8" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAwMDAwMDAiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 8 male india */}
      {classesName === "Upto Class 8" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAwMDAwMDAiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 8 Transgender india */}
      {classesName === "Upto Class 8" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAwMDAwMDAiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 8 all gender india */}
      {classesName === "Upto Class 8" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAwMDAwMDAiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 9 female india */}
      {classesName === "Class 9" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 9 male india */}
      {classesName === "Class 9" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of transgender 9 india */}
      {classesName === "Class 9" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl199"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 9 all genders india */}
      {classesName === "Class 9" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTAiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combinataion of 10 female india */}
      {classesName === "Class 10" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTEiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 10 male india */}
      {classesName === "Class 10" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTEiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 10 Transgender india */}
      {classesName === "Class 10" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTEiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 10 allgender india */}
      {classesName === "Class 10" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTEiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 11 female india */}
      {classesName === "Class 11" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTIiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 11 male india */}
      {classesName === "Class 11" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTIiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 11 transgender india */}
      {classesName === "Class 11" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTIiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 11 all gender india */}
      {classesName === "Class 11" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTIiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 12 female india */}
      {classesName === "Class 12" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTYiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 12 male india */}
      {classesName === "Class 12" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTYiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combinatino of 12 transgender india */}
      {classesName === "Class 12" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTYiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of 12 all genders india */}
      {classesName === "Class 12" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMTYiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of graduation female india */}
      {classesName === "Graduation" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjIiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/*  Combination of Graduation male india */}
      {classesName === "Graduation" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjIiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Graduation transgender india */}
      {classesName === "Graduation" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjIiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Graduation all gender india */}
      {classesName === "Graduation" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjIiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation Female india */}
      {classesName === "Post Graduation" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjMiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation Male india */}
      {classesName === "Post Graduation" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjMiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation Third/Trans gender  india */}
      {classesName === "Post Graduation" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjMiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation all gender india */}
      {classesName === "Post Graduation" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjMiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation Diploma Female india */}
      {classesName === "Post Graduation Diploma" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTE1Il0sIkdFTkRFUiI6WyIxMTAiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation Diploma Male india */}
      {classesName === "Post Graduation Diploma" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTE1Il0sIkdFTkRFUiI6WyIxMTEiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation Diploma Third/Trans gender india */}
      {classesName === "Post Graduation Diploma" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTE1Il0sIkdFTkRFUiI6WyIxMTIiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Graduation Diploma all gender india */}
      {classesName === "Post Graduation Diploma" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTE1Il0sIkdFTkRFUiI6W10sIlJFTElHSU9OIjpbXSwiRk9SRUlHTiI6WyI4MjAiXX0="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Phd Female india */}
      {classesName === "Phd" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjQiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Phd Male india */}
      {classesName === "Phd" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjQiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Phd Third/Trans gender india */}
      {classesName === "Phd" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjQiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Phd all gender india */}
      {classesName === "Phd" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjQiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of ITI Female india */}
      {classesName === "ITI" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiODQwIl0sIkdFTkRFUiI6WyIxMTAiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of ITI Male india */}
      {classesName === "ITI" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiODQwIl0sIkdFTkRFUiI6WyIxMTEiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of ITI Third/Trans gender india */}
      {classesName === "ITI" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiODQwIl0sIkdFTkRFUiI6WyIxMTIiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of ITI all gender india */}
      {classesName === "ITI" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiODQwIl0sIkdFTkRFUiI6W10sIlJFTElHSU9OIjpbXSwiRk9SRUlHTiI6WyI4MjAiXX0="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Polytechnique/Diploma Female india */}
      {classesName === "Polytechnique/Diploma" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjEiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Polytechnique/Diploma Male india */}
      {classesName === "Polytechnique/Diploma" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjEiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Polytechnique/Diploma Trans gender india */}
      {classesName === "Polytechnique/Diploma" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjEiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Polytechnique/Diploma all gender india */}
      {classesName === "Polytechnique/Diploma" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjEiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Doctoral Female india */}
      {classesName === "Post Doctoral" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjUiXSwiR0VOREVSIjpbIjExMCJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Doctoral Male india */}
      {classesName === "Post Doctoral" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjUiXSwiR0VOREVSIjpbIjExMSJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Doctoral transGender india */}
      {classesName === "Post Doctoral" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjUiXSwiR0VOREVSIjpbIjExMiJdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Post Doctoral all gender india */}
      {classesName === "Post Doctoral" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiMjUiXSwiR0VOREVSIjpbXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Vocational Course Female india */}
      {classesName === "Vocational Course" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTUyIl0sIkdFTkRFUiI6WyIxMTAiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Vocational Course Male india */}
      {classesName === "Vocational Course" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTUyIl0sIkdFTkRFUiI6WyIxMTEiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Vocational Course Third/Trans gender india */}
      {classesName === "Vocational Course" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTUyIl0sIkdFTkRFUiI6WyIxMTIiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Vocational Course all gender india */}
      {classesName === "Vocational Course" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiOTUyIl0sIkdFTkRFUiI6W10sIlJFTElHSU9OIjpbXSwiRk9SRUlHTiI6WyI4MjAiXX0="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Coaching Classes Female india */}
      {classesName === "Coaching Classes" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiNzUyIl0sIkdFTkRFUiI6WyIxMTAiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Coaching Classes Male india */}
      {classesName === "Coaching Classes" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiNzUyIl0sIkdFTkRFUiI6WyIxMTEiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Coaching Classes Third/Trans gender india */}
      {classesName === "Coaching Classes" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiNzUyIl0sIkdFTkRFUiI6WyIxMTIiXSwiUkVMSUdJT04iOltdLCJGT1JFSUdOIjpbIjgyMCJdfQ=="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of Coaching Classes all gender india */}
      {classesName === "Coaching Classes" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOlsiNzUyIl0sIkdFTkRFUiI6W10sIlJFTElHSU9OIjpbXSwiRk9SRUlHTiI6WyI4MjAiXX0="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of All Classes Female india */}
      {classesName === "All Classes" &&
      genderName === "Female" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOltdLCJHRU5ERVIiOlsiMTEwIl0sIlJFTElHSU9OIjpbXSwiRk9SRUlHTiI6WyI4MjAiXX0="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of All Classes Male india */}
      {classesName === "All Classes" &&
      genderName === "Male" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOltdLCJHRU5ERVIiOlsiMTExIl0sIlJFTElHSU9OIjpbXSwiRk9SRUlHTiI6WyI4MjAiXX0="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of All Classes  all gender india */}
      {classesName === "All Classes" &&
      genderName === "Third/Trans gender" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOltdLCJHRU5ERVIiOlsiMTEyIl0sIlJFTElHSU9OIjpbXSwiRk9SRUlHTiI6WyI4MjAiXX0="
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/* Combination of All Classes all gender india */}
      {classesName === "All Classes" &&
      genderName === "All Genders" &&
      countryName === "India" &&
      search ? (
        <StdDry
          href="https://www.buddy4study.com/scholarships?filter=eyJFRFVDQVRJT04iOltdLCJHRU5ERVIiOltdLCJSRUxJR0lPTiI6W10sIkZPUkVJR04iOlsiODIwIl19"
          onClick={searchHandler}
        />
      ) : (
        ""
      )}

      {/*  Combination of Empty */}
      {classesName === "" &&
      genderName === "" &&
      countryName === "" &&
      error ? (
        <p className="text-center text-xl font-semibold mb-6">No Data Found</p>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default scholarships;
