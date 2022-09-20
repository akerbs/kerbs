import React from "react";

import "../css/MyGoogleMap.css";

const MyGoogleMap = () => {
  return (
    <div id="map" className="mapWrapper" maxWidth="lg">
      <iframe
        className="map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1Aacfo7BKRRoVYiq7xl16vJmUpCNTK88"
      ></iframe>
    </div>
  );
};

export default MyGoogleMap;
