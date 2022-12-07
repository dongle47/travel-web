import React, { useState } from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { logoutSuccess } from "../../slices/authSlice";

import apiAccount from "../../apis/apiAccount";

import { Header, Footer } from "../../components/";

import { useNavigate } from "react-router-dom";

import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Space,
  Avatar,
  Typography,
  Button,
  Input,
  Radio,
  RadioChangeEvent,
  DatePicker,
  Form,
  Upload,
} from "antd";

import Icon, {
  PlusOutlined,
  UserOutlined,
  BellOutlined,
  HeartOutlined,
  LockOutlined,
  ExportOutlined,
  CloseOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import type { DatePickerProps, MenuProps } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { SubMenu } = Menu;

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);

  console.log(user);

  const handleLogout = () => {
    dispatch(logoutSuccess);
    navigate("/");
    toast.info("Đăng xuất thành công");
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish = async (values: any) => {
    console.log(values);
  };

  return (
    <Layout
      style={{
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "100%",
        // padding: "5rem",
      }}
      className="primary-font"
    >
      <Header />

      <Content style={{ margin: "6rem 8rem" }} className="">
        <Breadcrumb style={{ margin: "1rem 1.4rem" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="ms-3 my-3" align="middle" gutter={10}>
          <Col>
            <Avatar
              size={45}
              src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta-1200x900.jpeg"
            />
          </Col>
          <Col>
            <Space direction="vertical" size={0}>
              <Text className="text-secondary">Tài khoản của</Text>
              <Text strong>Tên người dùng</Text>
            </Space>
          </Col>

          <Col span={5} offset={3}>
            <Row>
              <Title level={4}>Thông tin cá nhân</Title>
            </Row>
          </Col>
        </Row>

        <Layout
          style={{
            backgroundColor: "#E5E5E5",
          }}
        >
          <Sider style={{}} width={280} className="me-5">
            <Menu
              style={{
                height: "100%",
                borderRight: 0,
                backgroundColor: "#E5E5E5",
                fontWeight: "500",
              }}
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              items={itemsMenu}
            ></Menu>
          </Sider>

          <Layout style={{ backgroundColor: "#fff", padding: "1.5rem 2rem" }}>
            <Content
              className="w-100"
              style={{
                // padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Row className="w-100" justify="start">
                <Col span={12}>
                  <Form
                    id="info-form"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 22 }}
                    layout="vertical"
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="fullName"
                      label={<Text strong>Họ tên</Text>}
                    >
                      <Input defaultValue="" suffix={<CloseOutlined />} />
                    </Form.Item>

                    <Form.Item name="sex" label={<Text strong>Giới tính</Text>}>
                      <Radio.Group>
                        <Radio className="text-center" value="male">
                          Nam
                        </Radio>
                        <Radio className="text-center" value="female">
                          Nữ
                        </Radio>
                        <Radio className="text-center" value="other">
                          Khác
                        </Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item
                      name="dateBirth"
                      label={<Text strong>Ngày sinh</Text>}
                    >
                      <DatePicker className="w-100" />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label={<Text strong>Số điện thoại</Text>}
                    >
                      <Input suffix={<CloseOutlined />} />
                    </Form.Item>

                    <Form.Item name="email" label={<Text strong>Email</Text>}>
                      <Input
                        defaultValue={user.email}
                        suffix={<CloseOutlined />}
                      />
                    </Form.Item>
                  </Form>
                </Col>

                <Col span={12}>
                  <Row className="h-100" justify="center" align="middle">
                    <Space direction="vertical" align="center">
                      <div className="position-relative mb-2">
                        <Avatar
                          size={150}
                          src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                        />
                        <Button
                          style={{ right: "1rem" }}
                          className="position-absolute bottom-0"
                          type="primary"
                          shape="circle"
                          size="small"
                          icon={<PlusOutlined className="text-white" />}
                        />
                      </div>

                      {/* <Title className="" level={3}>
                        Tên người dùng
                      </Title> */}
                      <Button
                        style={{
                          backgroundColor: "#FD7E14",
                          width: "8rem",
                          height: "2.5rem",
                        }}
                        className="text-white rounded"
                        form="info-form"
                        htmlType="submit"
                      >
                        <Text
                          style={{ fontSize: "0.8rem" }}
                          className="text-white"
                        >
                          LƯU THAY ĐỔI
                        </Text>
                      </Button>
                    </Space>
                  </Row>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Profile;

const itemsMenu: MenuProps["items"] = [
  {
    key: "1",
    icon: React.createElement(UserOutlined),
    label: "Thông tin cá nhân",
  },
  {
    key: "2",
    icon: React.createElement(EnvironmentOutlined),
    label: "Lịch sử check in",
  },
  {
    key: "3",
    icon: React.createElement(BellOutlined),
    label: "Thông báo của tôi",
  },
  {
    key: "4",
    icon: React.createElement(HeartOutlined),
    label: "Địa điểm yêu thích",
  },
  {
    key: "5",
    icon: React.createElement(LockOutlined),
    label: "Đổi mật khẩu",
  },
  {
    key: "6",
    icon: React.createElement(ExportOutlined),
    label: "Đăng xuất",
  },
];
