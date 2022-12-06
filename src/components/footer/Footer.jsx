import React, { useState } from "react";
import githubIcon from "../../assets/github.svg";
import "./Footer.css";
const Footer = () => {
  const [show, setShow] = useState(false);
  const showDevelopers = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <footer className="footer-wrapper">
      {!show && (
        <button className="creators-button" onClick={showDevelopers}>
          Developers
        </button>
      )}
      {show && (
        <ul className="creators">
          <li>
            <a href="https://github.com/clauadri" target="_blank">
              Adrian
            </a>
            <img src={githubIcon} alt="github icon" />
          </li>
          <li>
            <a href="https://github.com/kinddddd" target="_blank">
              Alvaro
            </a>
            <img src={githubIcon} alt="github icon" />
          </li>
          <li>
            <a href="https://github.com/Nagema" target="_blank">
              Angélica
            </a>
            <img src={githubIcon} alt="github icon" />
          </li>
          <li>
            <a href="https://github.com/BillyVanHeel" target="_blank">
              Guillermo
            </a>
            <img src={githubIcon} alt="github icon" />
          </li>
        </ul>
      )}
    </footer>
  );
};

export default Footer;
