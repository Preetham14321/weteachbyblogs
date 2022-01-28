import React from "react";
import JobCard from "../UI/JobCard";

const CommerceJobs = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Commerce" && search ? (
        <JobCard
          jobtitle="Accountant"
          location="
            
Kolkata"
          ctc="3.5 - 4 LPA"
          href="https://internshala.com/fresher-job/detail/accountant-fresher-jobs-in-kolkata-at-shubh-fashion1642663133"
        />
      ) : (
        ""
      )}
      {branchName === "Commerce" && search ? (
        <JobCard
          jobtitle="Accounts Executive"
          location="Delhi"
          ctc="3 - 3.2 LPA"
          href="https://internshala.com/fresher-job/detail/accounts-executive-fresher-jobs-in-delhi-at-ugly1642571403"
        />
      ) : (
        ""
      )}
      {branchName === "Commerce" && search ? (
        <JobCard
          jobtitle="Administrative Assistant"
          location="
            

          Bangalore"
          ctc="3 LPA"
          href="https://internshala.com/fresher-job/detail/administrative-assistant-fresher-jobs-in-bangalore-at-leadgenerator1642218575"
        />
      ) : (
        ""
      )}
      {branchName === "Commerce" && search ? (
        <JobCard
          jobtitle="Accounting Associate"
          location="
            

          Remote"
          ctc="5.3 - 6 LPA"
          href="https://internshala.com/fresher-job/detail/remote-accounting-associate-fresher-jobs-at-wono-inc1642048664"
        />
      ) : (
        ""
      )}
      {branchName === "Commerce" && search ? (
        <JobCard
          jobtitle="Accountant"
          location="
            

          Chandigarh"
          ctc="3 LPA"
          href="https://internshala.com/fresher-job/detail/accountant-fresher-jobs-in-chandigarh-at-three-bees-shipping-private-limited1641881522"
        />
      ) : (
        ""
      )}
      {branchName === "Commerce" && search ? (
        <JobCard
          jobtitle="Accountant"
          location="
            

          Pune"
          ctc="3 - 3.5 LPA"
          href="https://internshala.com/fresher-job/detail/accountant-fresher-jobs-in-pune-at-ronin-labs1641549127"
        />
      ) : (
        ""
      )}
      {branchName === "Commerce" && search ? (
        <JobCard
          jobtitle="Audit Manager - Chartered Accountant (CA)"
          location="
            

          Mumbai"
          ctc="5 - 6 LPA"
          href="https://internshala.com/fresher-job/detail/audit-manager-chartered-accountant-ca-fresher-jobs-in-mumbai-at-janaswamy-associates1640678869"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CommerceJobs;
