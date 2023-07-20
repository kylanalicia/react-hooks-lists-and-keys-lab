import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const myProjects = projects.map((activities) => {
    return (
      <ProjectItem
        key={activities.id}
        name={activities.name}
        about={activities.about}
        technologies={activities.technologies}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{myProjects}</div>
    </div>
  );
}

export default ProjectList;