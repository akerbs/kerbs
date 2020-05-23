import React from "react";
import SimpleMap from "./GoogleMap";

export default function Contact() {
  return (
    <div className="Contact-content">
      <div className="Contact-content-my-contacts">
        <ul>
          <li>
            email:
            <a href="mailto:anker2702@gmail.com" onclick="this.blur()">
              anker2702@gmail.com
            </a>
          </li>
          <li>
            skype:
            <a href="skype:draft23" onclick="this.blur()">
              draft23
            </a>
          </li>
          <li>
            phone:
            <a href="tel:+4915207350279" onclick="this.blur()">
              0152 0735 0279
            </a>
          </li>
        </ul>
      </div>
      <div className="Contact-content-google-map">
        <SimpleMap />
      </div>
    </div>
  );
}
