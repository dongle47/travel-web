import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

import { Typography, Row, Col, Card, Space, Button } from "antd";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  FeatureGroup,
  ZoomControl,
  Polygon,
  useMapEvent,
  useMapEvents,
  useMap,
} from "react-leaflet";

import tileLayer from "../utils/tileLayer";

import { latLng, LatLng, LocationEvent } from "leaflet";

import marker from "../assets/img/marker-icon.png";
import L from "leaflet";
import { Icon } from "leaflet";

const iconMarker = new Icon({
  iconUrl: marker,
  iconSize: [25, 40],
});

interface point {
  lat: number;
  lng: number;
  title: string;
}

const center: [number, number] = [52.22977, 21.01178];
const center1: [number, number] = [52.2298, 21.0118];

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

const River: [number, number][] = [
  [52.261433597272294, 21.01272583007813],
  [52.259857564663236, 21.008262634277347],
  [52.2485084763669, 21.019763946533207],
  [52.24377883252849, 21.026287078857425],
  [52.240835688576325, 21.032123565673828],
  [52.235474460511696, 21.037960052490238],
  [52.22800971166361, 21.04465484619141],
  [52.2249603686772, 21.047916412353516],
  [52.23600009974023, 21.042766571044925],
  [52.24966453484508, 21.023368835449222],
  [52.26132853017426, 21.01272583007813],
];

const Place: [number, number][] = [
  [52.23295130556395, 20.998821258544925],
  [52.230007443518716, 20.98474502563477],
  [52.224750061441355, 20.98920822143555],
  [52.22769427210073, 21.002597808837894],
];

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

const riverColor = { color: "red" };
const placeColor = { color: "blue" };

const ControllingGroup: React.FC = () => {
  const map = useMapEvents({
    overlayadd(e) {
      // const corner1 = L.latLng(40.712, -74.227);
      // const corner2 = L.latLng(40.712, -74.227);
      // const bounds = new L.LatLngBounds(corner1, corner2);

      const bounds = new L.LatLngBounds();

      map.eachLayer(function (layer) {
        if (layer instanceof L.FeatureGroup) {
          bounds.extend(layer.getBounds());
        }
      });

      if (bounds.isValid()) {
        map.flyToBounds(bounds);
      }
    },
  });

  return null;
};

const CustomButton = () => {
  useEffect(() => {
    // if (!map) return;
    const customControler = L.Control.extend({
      options: {
        position: "topleft",
      },

      onAdd: function () {
        const btn = L.DomUtil.create("button");
        btn.title = "pooooooooooooop rotation";
        btn.textContent = "💩";
        btn.className = "customButton";

        // btn.onmouseover = function () {
        //   this.style.transform = "scale(1.3)";
        // };

        // btn.onmouseout = function () {
        //   this.style.transform = "scale(1)";
        // };

        btn.onclick = function () {
          console.log("clicked");
        };

        return btn;
      },
    });

    // map.addControl(new customControler());
  }, []);

  return null;
};

interface IProps {
  map: any;
}

const HomeButton: React.FC<IProps> = ({ map }) => {
  useMapEvents({
    dragend() {
      const { lat: latD, lng: lngD } = map.getCenter();
      const { lat, lng } = map.getCenter();
      // const lat = center[0];
      // const lng = center[1];

      // const checkEqualArrays =
      //   [lat, lng] !== [latD.toFixed(5) * 1, lngD.toFixed(5) * 1];

      const checkEqualArrays =
        lat !== latD.toFixed(5) * 1 && lng !== lngD.toFixed(5) * 1;

      document.body.classList[checkEqualArrays ? "add" : "remove"](
        "show-button-home"
      );
    },
  });

  useEffect(() => {
    if (!map) return;

    const customControler = L.Control.extend({
      options: {
        position: "bottomleft",
      },

      onAdd: function () {
        const btn = L.DomUtil.create("button", "back-to-home");
        btn.title = "pooooooooooooop rotation";
        btn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"></path></svg>';

        btn.onclick = function () {
          map.flyToBounds([center]);
          document.body.classList.remove("show-button-home");
        };

        return btn;
      },
    });

    map.addControl(new customControler());

    const info = L.Control.extend({
      options: {
        position: "topleft",
      },

      onAdd: function () {
        const info = L.DomUtil.create("div", "legend");
        info.textContent = "move the map";
        return info;
      },
    });

    map.addControl(new info());
  }, [map]);

  return null;
};

const Map: React.FC = () => {
  const [map, setMap] = useState(null);

  return (
    <>
      <MapContainer
        whenReady={() => setMap}
        className="vh-100 vw-100"
        zoomControl={false}
        center={center}
        zoom={18}
        scrollWheelZoom={true}
      >
        {/* marker layer */}
        <LayersControl position="topright" collapsed={false}>
          <TileLayer {...tileLayer} />

          <LayersControl.Overlay name="point A">
            <FeatureGroup>
              {pointsA.map(({ lat, lng, title }, index) => (
                <Marker key={index} position={[lat, lng]} icon={iconMarker}>
                  <Popup>{title}</Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="point B">
            <FeatureGroup>
              {pointsB.map(({ lat, lng, title }, index) => (
                <Marker key={index} position={[lat, lng]} icon={iconMarker}>
                  <Popup>{title}</Popup>
                </Marker>
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>

        {/* place layer */}
        <LayersControl position="topright" collapsed={false}>
          <LayersControl.Overlay name="River">
            <FeatureGroup>
              <Polygon pathOptions={riverColor} positions={River} />
            </FeatureGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Place">
            <FeatureGroup>
              <Polygon pathOptions={placeColor} positions={Place} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>

        <ControllingGroup />

        <ZoomControl position={"bottomright"} />
        <TileLayer {...tileLayer} />

        {/* <HomeButton map={map} /> */}

        <GetCoordinates />
        <Button className="refresh-btn">Test Button</Button>
        <Button className="refresh-btn">Home Button</Button>
      </MapContainer>

      {/* <button className="refresh-btn">Test Button</button> */}
    </>
  );
};

export default Map;

// interface IProps {
//   data: point[];
// }

// const MyMarkers: React.FC<IProps> = ({ data }) => {
//   return (
//     <>
//       {data.map((item, index) => (
//         <Marker key={index} position={[item.lat, item.lng]} icon={iconMarker}>
//           <Popup>{item.title}</Popup>
//         </Marker>
//       ))}
//     </>
//   );
// };
