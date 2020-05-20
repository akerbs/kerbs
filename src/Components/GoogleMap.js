import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./MapMarker";

const SimpleMap = (props) => {
  const [center, setCenter] = useState({ lat: 53.551086, lng: 9.993682 });
  const [zoom, setZoom] = useState(10);
  return (
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBhhOE0UuK4wv9OobjoXVTBYgFJRjOB-6A" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={53.609943} lng={9.958323} name="A.Kerbs" color="#53636C" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
