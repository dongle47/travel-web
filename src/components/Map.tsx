import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import { LatLng, LocationEvent } from "leaflet";

import marker from "../assets/img/logo.png";
import { Icon } from "leaflet";
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [32, 32],
});

const LocationMarker: React.FC = () => {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Map: React.FC = () => {
  const position: [number, number] = [51.505, -0.09];

  return (
    <MapContainer
      className="vh-100 vw-100"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
