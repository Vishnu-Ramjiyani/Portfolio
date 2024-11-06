import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/data";

const ProjectList = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
