import React from "react";
import "./style.css";
import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    // target="_blank" щоб при натисканні на кнопку github відкривалось в новому вікні а не в одному й тому же
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
