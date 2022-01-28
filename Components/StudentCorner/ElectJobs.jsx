import React from "react";
import JobCard from "../UI/JobCard";

const ElectJobs = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Electronics and communication" && search ? (
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
      {branchName === "Electronics and communication" && search ? (
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
      {branchName === "Electronics and communication" && search ? (
        <JobCard
          jobtitle="Embedded And Firmware Design Engineer"
          location="
          
Bangalore, Mumbai"
          ctc="4 - 8 LPA"
          href="https://internshala.com/fresher-job/detail/embedded-and-firmware-design-engineer-fresher-jobs-in-bangalore-mumbai-at-react-labs-private-limited1641045354"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ElectJobs;
