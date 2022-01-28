import React from "react";
import JobCard from "../UI/JobCard";

const AutomobileJobs = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Automobile Engineering" && search ? (
        <JobCard
          jobtitle="Automobile Embedded Engineer"
          location="
            
Ahmedabad, Vadodara"
          ctc="3 - 3.1 LPA"
          href="https://internshala.com/fresher-job/detail/automobile-embedded-engineer-fresher-jobs-in-ahmedabad-vadodara-at-orena-solutions1642499579"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AutomobileJobs;
