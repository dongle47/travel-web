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
} from "@ant-design/icons";

import type { DatePickerProps } from "antd";

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

  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "100rem",
        padding: "5rem",
      }}
      className="primary-font"
    >
      <Layout>
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
          <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1">
              <UserOutlined />
              {/* <Icon type="user" /> */}
              <span className="nav-text">Thông tin cá nhân</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
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
      </Layout>
    </div>
  );
};

export default Profile;
