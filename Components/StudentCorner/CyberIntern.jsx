import React from "react";
import InternshipCard from "../UI/InternshipCard";

const CyberIntern = ({ branchName, search }) => {
  return (
    <>
      {branchName === "CyberSecurity & hacking" && search ? (
        <InternshipCard
          jobtitle="Cyber Security"
          location="
          Work From Home"
          ctc="15000 /month"
          href="https://internshala.com/internship/detail/cyber-security-work-from-home-job-internship-at-digiswitch-infotech-private-limited1643105325"
        />
      ) : (
        ""
      )}
      {branchName === "CyberSecurity & hacking" && search ? (
        <InternshipCard
          jobtitle="Information Security"
          location="
          
Mumbai"
          ctc="8000-12000 /month"
          href="https://internshala.com/internship/detail/information-security-part-time-job-internship-at-mumbai-in-secroot-security-solutions-private-limited1642429189"
        />
      ) : (
        ""
      )}
      {branchName === "CyberSecurity & hacking" && search ? (
        <InternshipCard
          jobtitle="Information Security & Privacy"
          location="
          
Work From Home"
          ctc="15000 /month"
          href="https://internshala.com/internship/detail/information-security-privacy-work-from-home-job-internship-at-confidis-advisory-services-private-limited1642425308"
        />
      ) : (
        ""
      )}
      {branchName === "CyberSecurity & hacking" && search ? (
        <InternshipCard
          jobtitle="Cyber Security"
          location="
          
Bangalore, Mumbai"
          ctc="20000 /month"
          href="https://internshala.com/internship/detail/cyber-security-internship-in-bangalore-mumbai-at-digite-infotech-private-limited1642410068"
        />
      ) : (
        ""
      )}
      {branchName === "CyberSecurity & hacking" && search ? (
        <InternshipCard
          jobtitle="Web Application Security"
          location="
          
Work From Home"
          ctc="15000-25000 /month"
          href="https://internshala.com/internship/detail/web-application-security-work-from-home-job-internship-at-secasure1642066027"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CyberIntern;
