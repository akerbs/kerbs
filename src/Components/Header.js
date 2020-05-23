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
        <Link to="/" class="header-link">
          home
        </Link>

        <Link to="/portfolio" class="header-link">
          portfolio
        </Link>

        <Link to="/contact" class="header-link">
          contact
        </Link>
      </nav>
      <div class="header-social-media">
        <a
          href="https://www.linkedin.com/in/akerbs/"
          class="header-social-icon"
          onclick="this.blur()"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/akerbs"
          class="header-social-icon"
          onclick="this.blur()"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </header>
  );
}
