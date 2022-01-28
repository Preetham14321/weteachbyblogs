import React from "react";
import JobCard from "../UI/JobCard";

const MechJobs = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Mechanical Engineering" && search ? (
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
      {branchName === "Mechanical Engineering" && search ? (
        <JobCard
          jobtitle="Junior Software Engineer"
          location="
          Remote"
          ctc="5 - 6 LPA"
          href="https://internshala.com/fresher-job/detail/remote-junior-software-engineer-fresher-jobs-at-crossware-i-o-gmbh1642698431"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default MechJobs;
