import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Python", "PHP"];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
