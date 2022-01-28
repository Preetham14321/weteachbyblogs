import React from "react";
import InternshipCard from "../UI/InternshipCard";

const ElectricIntern = ({ branchName, search }) => {
  return (
    <>
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="PCB Soldering"
          location="
            
Navi Mumbai"
          ctc="5000-10000 /month"
          href="https://internshala.com/internship/detail/pcb-soldering-internship-in-navi-mumbai-at-ranavaj-power-solution-private-limited1642171291"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="ELV Project Management"
          location="
            

          Bangalore"
          ctc="10000 /month"
          href="https://internshala.com/internship/detail/elv-project-management-internship-in-bangalore-at-qcs-communication-technologies-private-limited1643021593"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Subject Matter Expert (Electrical Engineering)"
          location="
            

          Work From Home"
          ctc="12000-14000 /month"
          href="https://internshala.com/internship/detail/subject-matter-expert-electrical-engineering-work-from-home-job-internship-at-dimentics-info-tech-private-limited1642827622"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Operations"
          location="
            

          Hyderabad"
          ctc="18000 /month"
          href="https://internshala.com/internship/detail/operations-internship-in-hyderabad-at-freyr-energy-services-private-limited1642750095"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Robotic Testing And Calibration"
          location="
            

          Bangalore"
          ctc="10000 /month"
          href="https://internshala.com/internship/detail/robotic-testing-and-calibration-internship-in-bangalore-at-comofi-medtech-private-limited1641922073"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Research & Training (Robotics)"
          location="
            
          Hyderabad"
          ctc="12000-15000 /month"
          href="https://internshala.com/internship/detail/research-training-robotics-internship-in-hyderabad-at-leap-robots1642659894"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Power Electronics Engineering"
          location="
            

          Delhi, Gurgaon"
          ctc="30000 /month"
          href="https://internshala.com/internship/detail/power-electronics-engineering-internship-in-delhi-gurgaon-at-gomassive1642479353"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Electrical Engineering"
          location="
            

          Jaipur"
          ctc="10000 /month"
          href="https://internshala.com/internship/detail/electrical-engineering-internship-in-jaipur-at-requin-solutions-private-limited1642309763"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Shift Engineering (Electrical)"
          location="
            

          Rudrapur, Sitarganj, Delhi"
          ctc="12500 /month"
          href="https://internshala.com/internship/detail/shift-engineering-electrical-internship-in-multiple-locations-at-prerna-innovative-solutions-private-limited1641988894"
        />
      ) : (
        ""
      )}
      {branchName === "Electrical Engineering" && search ? (
        <InternshipCard
          jobtitle="Technical Operations (Lithium Ion Battery Pack)"
          location="
            

          Vasai, Chinchoti"
          ctc="10000-15000 /month"
          href="https://internshala.com/internship/detail/technical-operations-lithium-ion-battery-pack-assembly-internship-in-vasai-chinchoti-at-ranavaj-power-solution-private-limited1640675524"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ElectricIntern;
