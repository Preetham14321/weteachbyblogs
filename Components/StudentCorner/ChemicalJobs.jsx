import React from "react";
import JobCard from "../UI/JobCard";

const ChemicalJobs = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Chemical Engineering" && search ? (
        <JobCard
          jobtitle="Subject Matter Expert"
          location="
            Remote"
          ctc="3 - 3.5 LPA"
          href="https://internshala.com/fresher-job/detail/remote-subject-matter-expert-fresher-jobs-at-toppr1641973577"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ChemicalJobs;
