import React from "react";
import SimpleMap from "./GoogleMap";

export default function Contact() {
  return (
    <div className="Contact-content">
      <div className="Contact-content-my-contacts">
        <ul>
          <li>
            email:<a href="mailto:anker2702@gmail.com"> anker2702@gmail.com</a>
          </li>
          <li>
            skype:<a href="skype:draft23"> draft23</a>
          </li>
          <li>
            phone:<span> 0152 0735 0279</span>
          </li>
        </ul>
      </div>
      <div className="Contact-content-google-map">
        <SimpleMap />
      </div>
    </div>
  );
}
