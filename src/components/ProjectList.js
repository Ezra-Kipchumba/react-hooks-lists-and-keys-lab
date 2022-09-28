import React from "react";
// import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  
  const ListProjects = projects.map((project) => {
    return <p key={project.id}>{ project.name}</p>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ListProjects}</div>
    </div>
  );
}

export default ProjectList;
