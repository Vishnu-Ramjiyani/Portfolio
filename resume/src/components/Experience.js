import React from "react";

const experiences = [
  { company: "CodSoft", role: "Web Development Intern", duration: "May - June 2024" },
  { company: "OCTANET", role: "Web Development Intern", duration: "June - July 2024" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h3>{exp.company}</h3>
          <p>{exp.role} - {exp.duration}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
