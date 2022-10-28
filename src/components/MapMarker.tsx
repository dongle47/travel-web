import React from "react";
import { Popup, useMapEvent, useMapEvents, Marker } from "react-leaflet";
import { Typography, Row, Col, Card, Space, Button } from "antd";

import { Icon } from "leaflet";

interface IProps {
  id?: string;
  position: [number, number];
  title: string;
}

import iconmarker from "../assets/img/marker-icon.png";

const iconMarker = new Icon({
  iconUrl: iconmarker,
  iconSize: [25, 40],
});

const MapMarker: React.FC<IProps> = ({ id, position, title }) => {
  return (
    <>
      <Marker
        key={id}
        position={position}
        icon={iconMarker}
        eventHandlers={{
          mouseover: (event) => event.target.openPopup(),
        }}
      >
        <Popup>{title}</Popup>
      </Marker>
    </>
  );
};

export default MapMarker;
