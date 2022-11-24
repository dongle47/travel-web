import React from "react";

import { Typography, Row, Col, Space } from "antd";

import {
  InstagramOutlined,
  TwitterOutlined,
  RedditOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
import logo from "../assets/img/logo1.png";

const Footer: React.FC = () => {
  return (
    <Row style={{ height: "20rem" }} className="px-5" justify="center">
      <Col span={12}>
        <Space direction="vertical" size={20}>
          <img height={80} src={logo} alt="" />
          <div style={{ width: "30rem" }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              repellat saepe nesciunt similique asperiores cumque voluptate nemo
              iure placeat eaque ratione at, libero, praesentium dolorem
            </Text>
          </div>

          <Space size={30}>
            <FacebookOutlined />
            <InstagramOutlined />
            <TwitterOutlined />
            <RedditOutlined />
            <YoutubeOutlined />
          </Space>
        </Space>
      </Col>
      <Col span={4}>
        <Space direction="vertical">
          <Title level={3}>Navigate</Title>
          <Text>Trang chủ</Text>
          <Text>Destination</Text>
          <Text>Expedition</Text>
          <Text>Timeline</Text>
          <Text>Review</Text>
        </Space>
      </Col>
      <Col span={4}>
        <Space direction="vertical">
          <Title level={3}>Support Us</Title>
          <Text>FAQ</Text>
          <Text>Contact Us</Text>
          <Text>Suport Center</Text>
          <Text>Security</Text>
        </Space>
      </Col>
      <Col span={4}>
        <Space direction="vertical">
          <Title level={3}>Partner</Title>
          <Text>Our Parner</Text>
          <Text>Subscribe</Text>
        </Space>
      </Col>
    </Row>
  );
};

export default Footer;
