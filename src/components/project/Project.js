import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Project = ({ title, img, index }) => {
  return (
    // кожна карточка буде силкою по адресу нижче типу буде в строці 0-6 писати цифри
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        {/* title в Projects.jsx */}
        {/* щоб цифру забрати */}
        {/* {index} */}
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
