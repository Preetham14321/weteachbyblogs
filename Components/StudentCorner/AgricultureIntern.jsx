import React from "react";
import InternshipCard from "../UI/InternshipCard";

const AgricultureIntern = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Agriculture Engineering" && search ? (
        <InternshipCard
          jobtitle="Subject Matter Expert (Agriculture)"
          location="
            
Bangalore"
          ctc="10000-15000 /month"
          href="https://internshala.com/internship/detail/subject-matter-expert-agriculture-internship-in-bangalore-at-bighaat1642735721"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AgricultureIntern;
