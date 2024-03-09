// тут по одному проекту
import React from "react";
import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";
const Project = () => {
  const { id } = useParams();
  // елементов 6 то есть будет от 0 до 5 потому что индексы начинаются с нуля
  const project = projects[id];
  console.log(project);
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt="{project.title}"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {/* якщо  project.gitHubLink буде = true то виконується права частина  <BtnGitHub link="https://github.com/" />*/}
          {/* якщо project.gitHubLink буде = false права частина не виконується */}
          {/* на деяких немає кнопки гіта чому? тому що ми в projectList його не додали  */}
          {project.gitHubLink && <BtnGitHub link="https://github.com/" />}
        </div>
      </div>
    </main>
  );
};

export default Project;
