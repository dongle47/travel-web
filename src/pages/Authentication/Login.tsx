import {
  ArrowLeftOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MobileOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import "./Authentication.scss";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="text-white">
      <div className="bg-image"></div>

      <Button
        className="bg-btn d-flex align-items-center justify-content-center"
        type="text"
        icon={<ArrowLeftOutlined />}
      >
        <Text className="text-white fs-5">Quay về trang chủ</Text>
      </Button>

      <div className="bg-text text-white">
        <Row>
          <Col>
            <img style={{ width: "50%" }} alt="" src={logo} />
          </Col>
        </Row>

        <Row className="mt-3 rounded" justify="center">
          <Form className="login-form ">
            <Form.Item className="">
              <Input
                style={{
                  backgroundColor: "rgba(0,0,0, 0.4)",
                  color: "#fff",
                  padding: "0.5rem",
                  width: "13rem",
                }}
                className="border-0 rounded"
                placeholder="Nhập số điện thoại"
                defaultValue=""
                prefix={<PhoneOutlined />}
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
          <Button className="text-white" type="text">
            Quên mật khẩu?
          </Button>
        </Row>

        <Row justify="center">
          <Text className="text-white">
            Chưa có tài khoản? <span style={{ color: "#FD7E14" }}>Đăng ký</span>
          </Text>
        </Row>
      </div>
    </div>
  );
};

export default Login;
