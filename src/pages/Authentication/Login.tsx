import {
  ArrowLeftOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/img/logo1.png";
import "./Authentication.scss";

const { Title, Text } = Typography;

const Login: React.FC = () => {

  return (
    <div className="text-white primary-font">
      <div className="bg-image"></div>

      <Link to={"/"}>
        <Button
          className="bg-btn d-flex align-items-center justify-content-center"
          type="text"
          icon={<ArrowLeftOutlined />}
        >
          <Text className="text-white fs-6">Quay về trang chủ</Text>
        </Button>
      </Link>

      <div className="bg-text text-white rounded">
        <Row>
          <Col>
            <img style={{ width: "50%" }} alt="" src={logo} />
          </Col>
        </Row>

        <Row justify="center">
          <Text
            style={{ fontSize: "0.8rem" }}
            className="text-white-50 fw-light mb-4"
          >
            Đăng nhập để sử dụng dịch vụ
          </Text>
        </Row>

        <Row className="" justify="center">
          <Form className="login-form ">
            <Form.Item className="">
              <Input
                style={{
                  backgroundColor: "rgba(0,0,0, 0.4)",
                  color: "#fff",
                  padding: "0.5rem",
                  width: "13rem",
                }}
                className="border-0 rounded m-0"
                placeholder="Nhập số điện thoại"
                defaultValue=""
                prefix={<MailOutlined />}
              />
            </Form.Item>
            <Form.Item className="">
              <Input.Password
                style={{
                  backgroundColor: "rgba(0,0,0, 0.4)",
                  color: "#fff",
                  padding: "0.5rem",
                  width: "13rem",
                }}
                className="border-0 rounded"
                placeholder="Nhập mật khẩu"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  backgroundColor: "#FD7E14",
                  width: "13rem",
                  height: "2.2rem",
                }}
                className="border-0 text-white rounded"
                htmlType="submit"
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Row>

        <Row justify="center">
          <Button
            style={{ fontSize: "0.8rem" }}
            className="text-white"
            type="text"
          >
            Quên mật khẩu?
          </Button>
        </Row>

        <Row justify="center">
          <Text style={{ fontSize: "0.8rem" }} className="text-white">
            Chưa có tài khoản?
            <Link to={"/register"}>
              <span style={{ color: "#FD7E14" }}> Đăng ký</span>
            </Link>
          </Text>
        </Row>
      </div>
    </div>
  );
};

export default Login;
