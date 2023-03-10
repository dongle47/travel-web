import React from "react";

import { Link } from "react-router-dom";

import { Typography, Row, Col, Space, Button } from "antd";
import logo from "../assets/img/logo1.png";

import {
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
  YoutubeFilled,
  RedditOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <Row className="header-homepage" justify="space-between" align="middle">
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
            <Link to={"/"}>
              <img height={50} src={logo} alt="" />
            </Link>
          </Col>
          <Button size="small" type="text">
            BLOG
          </Button>
          <Link to={"/login"}>
            <Button size="small" type="text">
              ĐĂNG NHẬP
            </Button>
          </Link>
          <Link to={"/register"}>
            <Button size="small" type="text">
              ĐĂNG KÝ
            </Button>
          </Link>
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
