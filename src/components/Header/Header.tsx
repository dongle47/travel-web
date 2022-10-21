import React from "react";

import { Typography, Layout, Row, Col, Card, Space, Button } from "antd";
import logo from "../../assets/img/logo.png";

import {
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
  YoutubeFilled,
  RedditOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const Header: React.FC = () => {
  return (
    <Row style={{ marginTop: "1rem" }} justify="space-between" align="middle">
      <Col>
        <Space>
          <GlobalOutlined style={{ fontSize: "1.5rem", color: "grey" }} />
          <Text>Ngôn ngữ</Text>
        </Space>
      </Col>
      <Col span={15}>
        <Row justify="space-evenly" align="middle">
          <Button size="small" type="text">
            TRANG CHỦ
          </Button>
          <Button size="small" type="text">
            PAGE
          </Button>
          <Button size="small" type="text">
            TRAVEL
          </Button>
          <Col>
            <img height={50} src={logo} alt="" />
          </Col>
          <Button size="small" type="text">
            BLOG
          </Button>
          <Button size="small" type="text">
            CỬA HÀNG
          </Button>
          <Button size="small" type="text">
            ELEMENTS
          </Button>
        </Row>
      </Col>
      <Col>
        <Space style={{ color: "grey" }} size="middle">
          <InstagramOutlined />
          <TwitterOutlined />
          <FacebookFilled />
          <RedditOutlined />
          <YoutubeFilled />
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
