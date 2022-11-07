import React from "react";
import { Navigate, Link } from "react-router-dom";

import { Popup, useMapEvent, useMapEvents, Marker } from "react-leaflet";
import { Typography, Row, Col, Card, Space, Button, Rate } from "antd";

import { Icon } from "leaflet";
const { Meta } = Card;
const { Title, Text } = Typography;

import { ExclamationOutlined, QuestionOutlined } from "@ant-design/icons";

import iconmarker from "../assets/img/marker-icon.png";

const iconMarker = new Icon({
  iconUrl: iconmarker,
  iconSize: [25, 40],
});

interface IProps {
  id?: string;
  position: [number, number];
  title: string;
  thumbnail: string;
  address: string;
}

const MapMarker: React.FC<IProps> = ({
  id,
  position,
  title,
  thumbnail,
  address,
}) => {
  return (
    <>
      <Marker
        key={id}
        position={position}
        icon={iconMarker}
        eventHandlers={{
          mouseover: (event) => event.target.openPopup(),
          click: (event) => {
            window.open("/detail");
          },
        }}
      >
        <Popup className="vw-50">
          <Space size={0} direction="vertical">
            <img
              style={{
                padding: 0,
                width: "100%",
                height: "5rem",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
              alt=""
              src={thumbnail}
            />
            <Row className="p-2" align="top" justify="center">
              <Col span={16}>
                <Title className="font-1" level={5}>
                  {title}
                </Title>
                <Rate style={{ width: "10rem" }} allowHalf defaultValue={3.5} />
                <Text className="font-1">{address}</Text>
              </Col>
              <Col className="mr-0" span={8}>
                <Space size={10}>
                  <Button
                    size="middle"
                    shape="circle"
                    icon={<ExclamationOutlined />}
                  />
                  <Button
                    size="middle"
                    shape="circle"
                    icon={<QuestionOutlined />}
                  />
                </Space>
              </Col>
            </Row>
          </Space>
        </Popup>
      </Marker>
    </>
  );
};

export default MapMarker;
