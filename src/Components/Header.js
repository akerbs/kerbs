import React from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <div className="App-logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <nav className="App-nav">
        <Link to="/" className="header-link">
          home
        </Link>

        <Link to="/portfolio" className="header-link">
          portfolio
        </Link>

        <Link to="/contact" className="header-link">
          contact
        </Link>
      </nav>
      <div className="header-social-media">
        <a
          href="https://www.linkedin.com/in/akerbs/"
          className="header-social-icon"
          onClick="this.blur()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/akerbs"
          className="header-social-icon"
          onClick="this.blur()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </header>
  );
}
