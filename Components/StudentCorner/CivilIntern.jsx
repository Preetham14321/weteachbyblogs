import React from "react";
import InternshipCard from "../UI/InternshipCard";

const CivilIntern = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Civil Engineering" && search ? (
        <InternshipCard
          jobtitle="Subject Matter Expert - Civil Engineering"
          location="
            
Work From Home"
          ctc="9000-12000 /month"
          href="https://internshala.com/internship/detail/subject-matter-expert-civil-engineering-work-from-home-job-internship-at-grey-spectra1643032136"
        />
      ) : (
        ""
      )}
      {branchName === "Civil Engineering" && search ? (
        <InternshipCard
          jobtitle="Urban Planning"
          location="
            
Bhubaneswar, Gurgaon"
          ctc="10000 /month"
          href="https://internshala.com/internship/detail/urban-planning-internship-in-bhubaneswar-gurgaon-at-centre-for-green-mobility-ahmedabad1642758242"
        />
      ) : (
        ""
      )}
      {branchName === "Civil Engineering" && search ? (
        <InternshipCard
          jobtitle="Subject Matter Expert (Civil Engineering)"
          location="
            
Work From Home"
          ctc="8000-14000 /month"
          href="https://internshala.com/internship/detail/subject-matter-expert-civil-engineering-work-from-home-job-internship-at-edufeat-private-limited1642765926"
        />
      ) : (
        ""
      )}
      {branchName === "Civil Engineering" && search ? (
        <InternshipCard
          jobtitle="Civil Engineering"
          location="
          Gurgaon"
          ctc="7000-12000 /month"
          href="https://internshala.com/internship/detail/civil-engineering-internship-in-gurgaon-at-studio-materium1642588915"
        />
      ) : (
        ""
      )}
      {branchName === "Civil Engineering" && search ? (
        <InternshipCard
          jobtitle="Subject Matter Expert (SME) Civil Engineering"
          location="
            
Work From Home"
          ctc="12000 /month"
          href="https://internshala.com/internship/detail/subject-matter-expert-sme-civil-engineering-work-from-home-job-internship-at-tutorbin1642511603"
        />
      ) : (
        ""
      )}
      {branchName === "Civil Engineering" && search ? (
        <InternshipCard
          jobtitle="Civil Engineering"
          location="
            
Work From Home"
          ctc="5000-10000 /month"
          href="https://internshala.com/internship/detail/civil-engineering-work-from-home-job-internship-at-voyage-technologies1642308299"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CivilIntern;
