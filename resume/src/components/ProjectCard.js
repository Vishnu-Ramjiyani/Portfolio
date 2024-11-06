import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
        View Live
      </a>
      <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="btn">
        Preview
      </a>
    </div>
  );
};

export default ProjectCard;
