import React from "react";
import "./Main.scss";
import "leaflet/dist/leaflet.css";

import { Map } from "../../components";

const Main: React.FC = () => {
  return (
    <div className="container-map">
      <Map />
    </div>
  );
};

export default Main;
