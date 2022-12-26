import React, { useState } from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";

import ImageUploading from "react-images-uploading";

import { toast } from "react-toastify";

import { logoutSuccess } from "../../slices/authSlice";

import apiAccount from "../../apis/apiAccount";

import { Header, Footer } from "../../components/";

import { useNavigate, Routes, Route, Link } from "react-router-dom";

import HistoryCheckIn from "./HistoryCheckIn";
import FavoritePlaces from "./FavoritePlaces";
import Notification from "./Notification";
import ChangePassword from "./ChangePassword";
import UserInformation from "./UserInformation";

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
  Modal,
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
import MenuItem from "antd/es/menu/MenuItem";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { SubMenu } = Menu;

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/");
  };

  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);
  const [image, setImage] = useState([]);
  const [images, setImages] = React.useState([]);
  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };

  const handleUploadAvatar = () => {
    if (image.length === 0) {
      toast.warning("Vui lòng chọn ảnh");
      return;
    }
    if (uploading) {
      toast.warning(
        "Hình ảnh đang được cập nhật, vui lòng không thao tác quá nhiều lần"
      );
      return;
    }
    setUploading(true);
    // let param = { file: image[0].file };
    // apiProfile
    //   .putUploadAvatar(param)
    //   .then((res) => {
    //     toast.success("Cập nhật ảnh đại diện thành công");
    //     getUserProfile();
    //   })
    //   .catch((error) => {
    //     toast.error("Cập nhật ảnh đại diện thất bại");
    //   })
    //   .finally(() => {
    //     setModalUploadAvatar(false);
    //     setUploading(false);
    //   });
  };

  console.log(user);

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
              <Title level={4}>
                {window.location.href.includes("user-information")
                  ? "Thông tin cá nhân"
                  : ""}
                {window.location.href.includes("history-check-in")
                  ? "Lịch sử Check-in"
                  : ""}
                {window.location.href.includes("notification")
                  ? "Thông báo của tôi"
                  : ""}
                {window.location.href.includes("favorite-places")
                  ? "Địa điểm yêu thích"
                  : ""}
                {window.location.href.includes("change-password")
                  ? "Đổi mật khẩu"
                  : ""}
              </Title>
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
              // defaultOpenKeys={["sub1"]}
              // items={itemsMenu}
            >
              {itemsMenu?.map((item: any) => (
                <Menu.Item key={item.key}>
                  {item.icon}
                  <span>{item.label}</span>
                  <Link to={item.link} />
                </Menu.Item>
              ))}
              <Menu.Item key="6" onClick={handleLogout}>
                <ExportOutlined />
                <span>Đăng xuất</span>
                <Link to="/" />
              </Menu.Item>
            </Menu>
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
              {/* <Row className="w-100" justify="start">
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
                      <Input defaultValue={user.full_name} allowClear />
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
                      <Input defaultValue={user.phone} allowClear />
                    </Form.Item>

                    <Form.Item name="email" label={<Text strong>Email</Text>}>
                      <Input defaultValue={user.email} allowClear />
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
                          onClick={showModal}
                        />
                      </div>
                      <Modal
                        title="Basic Modal"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <ImageUploading
                          value={image}
                          onChange={onChange}
                          dataURLKey="data_url"
                          acceptType={["jpg"]}
                        >
                          {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                          }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                              {imageList.length === 0 ? (
                                <Row
                                  style={{
                                    width: "100%",
                                    height: "30rem",
                                    border: "2px dashed grey",
                                    borderRadius: "5px",
                                  }}
                                  // style={isDragging ? { color: "red" } : null}
                                  justify="center"
                                  align="middle"
                                  onClick={onImageUpload}
                                  {...dragProps}
                                >
                                  <Text
                                    style={{
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                      color: "blue",
                                    }}
                                  >
                                    Nhấn để chọn hoặc kéo thả hình ảnh vào khung
                                    này.
                                  </Text>
                                </Row>
                              ) : null}

                              {imageList.map((image, i) => (
                                <Row
                                  key={i}
                                  style={{
                                    width: "100%",
                                    height: "30rem",
                                    borderRadius: "5px",
                                  }}
                                  // spacing={3}
                                  className="image-item"
                                >
                                  <img
                                    style={{
                                      width: "25rem",
                                      height: "25rem",
                                      alignSelf: "center",
                                    }}
                                    src={image.data_url}
                                    alt=""
                                  />
                                  <Row
                                    className="image-item__btn-wrapper"
                                    justify="center"
                                  >
                                    <Button
                                      style={{ width: "50%" }}
                                      onClick={() => onImageRemove(0)}
                                    >
                                      Hủy bỏ
                                    </Button>
                                    <Button
                                      style={{ width: "50%" }}
                                      onClick={handleUploadAvatar}
                                    >
                                      {uploading} Lưu thay đổi
                                    </Button>
                                  </Row>
                                </Row>
                              ))}
                            </div>
                          )}
                        </ImageUploading>
                      </Modal>

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
              </Row> */}

              <Routes>
                <Route path="user-information" element={<UserInformation />} />
                <Route path="history-check-in" element={<HistoryCheckIn />} />
                <Route path="notification" element={<Notification />} />
                <Route path="favorite-places" element={<FavoritePlaces />} />
                <Route path="change-password" element={<ChangePassword />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Profile;

const itemsMenu: any = [
  {
    key: "1",
    icon: React.createElement(UserOutlined),
    label: "Thông tin cá nhân",
    link: "user-information",
  },
  {
    key: "2",
    icon: React.createElement(EnvironmentOutlined),
    label: "Lịch sử check in",
    link: "history-check-in",
  },
  {
    key: "3",
    icon: React.createElement(BellOutlined),
    label: "Thông báo của tôi",
    link: "notification",
  },
  {
    key: "4",
    icon: React.createElement(HeartOutlined),
    label: "Địa điểm yêu thích",
    link: "favorite-places",
  },
  {
    key: "5",
    icon: React.createElement(LockOutlined),
    label: "Đổi mật khẩu",
    link: "change-password",
  },
  // {
  //   key: "6",
  //   icon: React.createElement(ExportOutlined),
  //   label: "Đăng xuất",
  //   link: "logout",
  // },
];
