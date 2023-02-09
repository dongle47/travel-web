import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { Typography, Row, Col, Space, Button, MenuProps, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

import { logoutSuccess } from "../modules/Authentication/authSlice";

import logo from "../assets/img/logo1.png";

import {
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
  YoutubeFilled,
  RedditOutlined,
  GlobalOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

import { toast } from "react-toastify";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">Tiếng Việt</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Tiếng Anh</a>,
    key: "1",
  },
];

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: any) => state.auth.user);

  console.log("user: ", user);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/");
  };

  return (
    <Row className="header-homepage" justify="space-between" align="middle">
      <Col>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a
            style={{ textDecoration: "none" }}
            onClick={(e) => e.preventDefault()}
          >
            <Space>
              <GlobalOutlined style={{ fontSize: "1.5rem", color: "grey" }} />
              <Text>Ngôn ngữ</Text>
            </Space>
          </a>
        </Dropdown>
      </Col>

      <Col>
        <Row justify="center" align="middle">
          <Button size="small" type="text" href="/">
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

          {user ? (
            <>
              <Button
                className="d-flex align-items-center"
                type="text"
                icon={<UserOutlined />}
                onClick={() => navigate("/profile/user-information")}
              >
                {user.user_name}
              </Button>
              <Button type="text" onClick={handleLogout}>
                Đăng xuất
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
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
