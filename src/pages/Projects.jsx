import React from "react";
import Project from "../components/project/Project";
import { projects } from "../helpers/projectsList";
// тут все проекты будет показывать
const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {/* map  */}
          {projects.map((project, index) => {
            // title потому що имеет в projectList і також маємо там img
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
