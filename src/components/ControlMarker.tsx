import React from "react";
import { Typography, Row, Col, Card, Space, Button } from "antd";
import MapMarker from "./MapMarker";

import { TileLayer, LayersControl, FeatureGroup } from "react-leaflet";
import { latLng, LatLng, LocationEvent } from "leaflet";

import tileLayer from "../utils/tileLayer";
import L from "leaflet";

interface point {
  lat: number;
  lng: number;
  title: string;
}

interface groupPoint {
  name: string;
  points: point[];
}

interface IProps {
  data: groupPoint[];
}

const ControlMarker: React.FC<IProps> = ({ data }) => {
  return (
    <LayersControl position="topright" collapsed={false}>
      <TileLayer {...tileLayer} />

      {data.map(({ name, points }) => (
        <LayersControl.Overlay name={name}>
          <FeatureGroup>
            {points.map(({ lat, lng, title }, index) => (
              <MapMarker position={[lat, lng]} title={title} />
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      ))}
    </LayersControl>
  );
};

export default ControlMarker;
