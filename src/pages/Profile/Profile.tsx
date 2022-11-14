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
