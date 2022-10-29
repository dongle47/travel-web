import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

import { Typography, Row, Col, Card, Space, Button } from "antd";

import { MapContainer, TileLayer, ZoomControl, useMap } from "react-leaflet";

import { latLng, LatLng, LocationEvent, latLngBounds } from "leaflet";

import tileLayer from "../utils/tileLayer";
import L from "leaflet";

import MapMarker from "./MapMarker";
import ControllingGroup from "./ControllingGroup";
import ControlMarker from "./ControlMarker";
import ControlPolygon from "./ControlPolygon";

import apiPlaces from "../api/apiPlaces";
import { Url } from "url";

interface point {
  lat: number;
  lng: number;
  title: string;
}

interface groupPoint {
  name: string;
  points: point[];
}

// const center: [number, number] = [52.22977, 21.01178];
const center: [number, number] = [13.955392, 108.676758];

const pointsA: point[] = [
  { lat: 52.230020586193795, lng: 21.01083755493164, title: "point A1" },
  { lat: 52.22924516170657, lng: 21.011320352554325, title: "point A2" },
  { lat: 52.229511304688444, lng: 21.01270973682404, title: "point A3" },
  { lat: 52.23040500771883, lng: 21.012146472930908, title: "point A4" },
];

const pointsB: point[] = [
  { lat: 52.229314161892106, lng: 21.012055277824405, title: "point B1" },
  { lat: 52.22950144756943, lng: 21.01193726062775, title: "point B2" },
  { lat: 52.22966573260081, lng: 21.011829972267154, title: "point B3" },
  { lat: 52.2298333027065, lng: 21.011744141578678, title: "point B4" },
  { lat: 52.2299680154701, lng: 21.01164758205414, title: "point B5" },
  { lat: 52.23012572745442, lng: 21.011583209037784, title: "point B6" },
  { lat: 52.230276867580336, lng: 21.01143836975098, title: "point B7" },
  { lat: 52.23046414919644, lng: 21.011341810226444, title: "point B8" },
];

const groupA = {
  name: "points A",
  points: pointsA,
};

const groupB = {
  name: "points B",
  points: pointsB,
};

const GetCoordinates = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create("div", "legend");

    const positon = L.Control.extend({
      options: {
        position: "bottomleft",
      },

      onAdd: function () {
        info.textContent = "Click on map";
        return info;
      },
    });

    map.on("click", (e) => {
      info.textContent = e.latlng.toString();
    });

    map.addControl(new positon());
  }, [map]);

  return null;
};

interface IProps {
  map: any;
}

interface place {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  thumbnail: string;
}

const Map: React.FC = () => {
  const [places, setPlaces] = useState<place[]>([]);

  useEffect(() => {
    const getData = async () => {
      await apiPlaces
        .getPlaces()
        .then((res) => {
          const arrPlace: place[] = [];

          res.data.forEach((item: any) => {
            console.log(item.name);
            const { id, name, address, lat, lng, thumbnail } = item;
            const newPlace = { id, name, address, lat, lng, thumbnail };
            arrPlace.push(newPlace);
          });
          setPlaces((prev) => (prev = arrPlace));
        })
        .catch((err) => console.log("err", err));
    };

    getData();
  }, []);

  return (
    <>
      <MapContainer
        className="vh-100 vw-100"
        zoomControl={false}
        center={center}
        zoom={10}
        scrollWheelZoom={true}
      >
        {/* <ControlMarker data={[groupA, groupB]} /> */}

        {places.map((item) => (
          <MapMarker
            title={item.name}
            position={[item.lat, item.lng]}
            thumbnail={item.thumbnail}
            address={item.address}
          />
        ))}

        <TileLayer {...tileLayer} />

        <ControllingGroup />

        <ZoomControl position={"bottomright"} />

        <GetCoordinates />
        {/* <Circle center={center} radius={200} pathOptions={{ color: "blue" }} />
        <Button className="refresh-btn">Test Button</Button>
        <Button className="refresh-btn">Home Button</Button> */}
      </MapContainer>
    </>
  );
};

export default Map;
