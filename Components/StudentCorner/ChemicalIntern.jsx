import React from "react";
import InternshipCard from "../UI/InternshipCard";

const ChemicalIntern = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Chemical Engineering" && search ? (
        <InternshipCard
          jobtitle="Market Research (Material Science/Chemical)"
          location="
          Bangalore"
          ctc="15000 /month"
          href="https://internshala.com/internship/detail/market-research-material-science-chemical-internship-in-bangalore-at-ideapoke-technologies-private-limited1643092180"
        />
      ) : (
        ""
      )}
      {branchName === "Chemical Engineering" && search ? (
        <InternshipCard
          jobtitle="Subject Matter Expert (Chemical Engineering)"
          location="
          
Work From Home"
          ctc="12000 /month"
          href="https://internshala.com/internship/detail/subject-matter-expert-chemical-engineering-work-from-home-job-internship-at-tutorbin1643008815"
        />
      ) : (
        ""
      )}
      {branchName === "Chemical Engineering" && search ? (
        <InternshipCard
          jobtitle="Subject Matter Expert (Chemical Engineering)"
          location="
          Work From Home"
          ctc="7000-12000 /month"
          href="https://internshala.com/internship/detail/subject-matter-expert-chemical-engineering-petroleum-engineering-work-from-home-job-internship-at-edufeat-private-limited1642765917"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ChemicalIntern;
