import React from "react";
import { Navigate, Link } from "react-router-dom";

import { Popup, useMapEvent, useMapEvents, Marker } from "react-leaflet";
import { Typography, Row, Col, Card, Space, Button, Rate } from "antd";

import { Icon } from "leaflet";
const { Meta } = Card;
const { Title, Text } = Typography;

import {
  ExclamationOutlined,
  QuestionOutlined,
  StarFilled,
} from "@ant-design/icons";

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
            window.open(`/detail-place/${id}`);
          },
        }}
      >
        <Popup>
          <Space style={{ width: "14rem" }} size={0} direction="vertical">
            <img
              style={{
                padding: 0,
                width: "100%",
                height: "6rem",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
              alt=""
              src={thumbnail}
            />

            <div
              className="px-3 py-2"
              // direction="vertical"
              // align="top"
              // justify="center"
            >
              <Row justify="space-between">
                <Col>
                  <Title className="font-1" level={5}>
                    {title}
                  </Title>
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

              <Row justify="start">
                <Space>
                  <Text>4.2</Text>
                  {[0, 1, 2, 3, 4].map((item) => (
                    <StarFilled />
                  ))}
                  <Text>1.012</Text>
                </Space>
              </Row>

              <Text>Loại địa điểm</Text>
            </div>
          </Space>
        </Popup>
      </Marker>
    </>
  );
};

export default MapMarker;
