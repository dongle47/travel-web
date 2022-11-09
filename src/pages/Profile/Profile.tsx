import React, { useState } from "react";
import "./Profile.scss";

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
  Cascader,
  Checkbox,
  InputNumber,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

import Icon, {
  CommentOutlined,
  FullscreenExitOutlined,
  StarOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  StarTwoTone,
  PlayCircleOutlined,
  StarFilled,
  LikeTwoTone,
  DislikeTwoTone,
  CheckOutlined,
  LikeFilled,
  LikeOutlined,
  DislikeOutlined,
  PlusOutlined,
  UserOutlined,
  BellOutlined,
  HeartOutlined,
  LockOutlined,
  ExportOutlined,
  LaptopOutlined,
  NotificationOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import type { DatePickerProps, MenuProps } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;
const { SubMenu } = Menu;

const Profile: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  // const items2: MenuProps["items"] = [
  //   UserOutlined,
  //   LaptopOutlined,
  //   NotificationOutlined,
  // ].map((icon, index) => {
  //   const key = String(index + 1);

  //   return {
  //     key: `sub${key}`,
  //     icon: React.createElement(icon),
  //     label: `subnav ${key}`,
  //   };
  // });

  const items2: MenuProps["items"] = [
    {
      key: "1",
      icon: React.createElement(UserOutlined),
      label: "Thông tin cá nhân",
    },
    {
      key: "2",
      icon: React.createElement(BellOutlined),
      label: "Thông báo của tôi",
    },
    {
      key: "3",
      icon: React.createElement(HeartOutlined),
      label: "Địa điểm yêu thích",
    },
    {
      key: "4",
      icon: React.createElement(LockOutlined),
      label: "Đổi mật khẩu",
    },
    {
      key: "5",
      icon: React.createElement(ExportOutlined),
      label: "Đăng xuất",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "100%",
        padding: "5rem",
      }}
      className="primary-font"
    >
      {/* <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <span className="nav-text">Thông tin cá nhân</span>
            </Menu.Item>
            <Menu.Item key="2">
              <BellOutlined />
              <span className="nav-text">Thông báo của bạn</span>
            </Menu.Item>
            <Menu.Item key="3">
              <HeartOutlined />
              <span className="nav-text">Địa điểm yêu thích</span>
            </Menu.Item>
            <Menu.Item key="4">
              <ExportOutlined />
              <span className="nav-text">Đổi mật khẩu</span>
            </Menu.Item>
            <Menu.Item key="5">
              <LockOutlined />
              <span className="nav-text">Đăng xuất</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Row>
                <Col span={8}>
                  <Input placeholder="Basic usage" suffix={<UserOutlined />} />;
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                  </Radio.Group>
                  <DatePicker onChange={onChangeDate} />
                  <Input placeholder="Basic usage" />;
                  <Input placeholder="Basic usage" />;
                </Col>
                <Col span={8}>
                  <Space direction="vertical">
                    <Avatar
                      size={100}
                      src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                    />
                    <Text>Tên người dùng</Text>
                    <Button>LƯU THAY ĐỔI</Button>
                  </Space>
                </Col>
              </Row>
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout> */}

      <Layout>
        <Sider width={250} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          ></Menu>
        </Sider>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background w-100"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Row className="w-100">
              <Col span={12}>
                <Form
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 15 }}
                  layout="horizontal"
                >
                  <Form.Item label="Họ tên">
                    <Input suffix={<CloseOutlined />} />
                  </Form.Item>

                  <Form.Item label="Radio">
                    <Radio.Group>
                      <Radio value="male">Nam</Radio>
                      <Radio value="female">Nữ</Radio>
                      <Radio value="other">Khác</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item label="Ngày sinh">
                    <DatePicker className="w-100" />
                  </Form.Item>

                  <Form.Item label="Số điện thoại">
                    <Input suffix={<CloseOutlined />} />
                  </Form.Item>

                  <Form.Item label="Email">
                    <Input suffix={<CloseOutlined />} />
                  </Form.Item>
                </Form>
              </Col>

              <Col span={12}>
                <Row justify="center">
                  <Space direction="vertical" align="center">
                    <Avatar
                      size={150}
                      src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                    />
                    <Text className="fs-5" strong>
                      Tên người dùng
                    </Text>
                    <Button type="primary" className="mt-2">
                      LƯU THAY ĐỔI
                    </Button>
                  </Space>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
