import React from "react";
// import SimpleMap from "./GoogleMap";
import MyGoogleMap from "./MyGoogleMap";

export default function Contact() {
  return (
    <div className="Contact-content">
      <div className="Contact-content-my-contacts">
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:anker2702@gmx.de"
              onClick="this.blur()"
              target="_blank"
              rel="noopener noreferrer"
            >
              anker2702@gmx.de
            </a>
          </li>
          <li>
            Skype:{" "}
            <a
              href="skype:draft23"
              onClick="this.blur()"
              target="_blank"
              rel="noopener noreferrer"
            >
              draft23
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+4915207350279"
              onClick="this.blur()"
              target="_blank"
              rel="noopener noreferrer"
            >
              0152 0735 0279
            </a>
          </li>
        </ul>
      </div>
      <div className="Contact-content-google-map">
        {/* <SimpleMap /> */}
        <MyGoogleMap />
      </div>
    </div>
  );
}
