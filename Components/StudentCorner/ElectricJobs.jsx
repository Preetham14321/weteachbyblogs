import React from "react";
import JobCard from "../UI/JobCard";

const ElectricJobs = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Electrical Engineering" && search ? (
        <JobCard
          jobtitle="Associate Electronics Engineer"
          location="
            
Punewadi"
          ctc="3 LPA"
          href="https://internshala.com/fresher-job/detail/associate-electronics-engineer-fresher-jobs-in-punewadi-at-research-intern1641890940"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ElectricJobs;
