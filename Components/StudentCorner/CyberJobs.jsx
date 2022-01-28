import React from "react";
import JobCard from "../UI/JobCard";

const CyberJobs = ({ branchName, search }) => {
  return (
    <>
      {branchName === "CyberSecurity & hacking" && search ? (
        <JobCard
          jobtitle="Cloud Architect"
          location="
            Remote"
          ctc="5 - 6 LPA"
          href="https://internshala.com/fresher-job/detail/remote-cloud-architect-fresher-jobs-at-kumi-labs1641468642"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CyberJobs;
