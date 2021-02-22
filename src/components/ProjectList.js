import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map( ({id, name, technologies }) => <ProjectItem key={id} name={name} technologies={technologies} /> )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
          {projectItems}
      </div>
    </div>
  );
}

export default ProjectList;
