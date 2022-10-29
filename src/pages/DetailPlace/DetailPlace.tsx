import React from "react";
import "./DetailPlace.scss";

import { Typography, Row, Col, Card, Space, Button, Divider, Menu } from "antd";

import {
  AimOutlined,
  SaveOutlined,
  SearchOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const DetailPlace: React.FC = () => {
  const items = [
    { label: "Home", key: "item-1" },
    { label: "About", key: "item-2" },
    { label: "Photos", key: "item-3" },
    { label: "Videos", key: "item-4" },
  ];
  return (
    <>
      <Row className="w-100 bg-white border-bottom pdlr-15" justify="center">
        <Row justify="center">
          <img
            alt=""
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/311568354_5608662802555169_5709832402571559746_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=pEQ8f1fnD28AX-5_OvI&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfAsJNxoWutcPwqePlf8C_mXJmOKn1PHjK31KJPl1X8U6A&oe=6361EA20"
          />
        </Row>

        <Row className="w-100 mt-3" justify="space-between" align="middle">
          <Col>
            <Title level={3}>Title</Title>
            <Text type="secondary">description</Text>
          </Col>
          <Col>
            <Button
              className="align-middle"
              style={{ width: "18rem", height: "2.5rem" }}
              type="primary"
              icon={<AimOutlined />}
            >
              Check in
            </Button>
          </Col>
        </Row>

        <Divider />

        <Row className="w-100" justify="space-between">
          <Col>
            <Menu
              style={{ width: "22rem" }}
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items}
            />
          </Col>
          <Col>
            <Button style={{ width: "10rem" }} icon={<SaveOutlined />}>
              Lưu
            </Button>
            <Button icon={<SearchOutlined />}></Button>
            <Button icon={<EllipsisOutlined />}></Button>
          </Col>
        </Row>
      </Row>

      <div className="row2-detail-place">
        <Row className="" justify="center">
          <Col className="bg-white me-3 mt-3 p-3" span={8}>
            <Title level={4}>About</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              similique beatae reprehenderit quasi commodi aspernatur ratione
              minima praesentium. Totam, alias vero? Reprehenderit, repellendus
              suscipit fuga praesentium aut aperiam tenetur harum.
            </Text>
          </Col>
          <Col span={12}>
            <Row className="bg-white mb-3 mt-3">asdasd</Row>
            <div className="bg-white">
              <Row>
                <Col>img</Col>
                <Col>asdasdasd</Col>
              </Row>
              <Row>asdasdasdasdasd</Row>
              <Row>imgs</Row>
              <Row>likedislike</Row>
              <Row>
                <Button>a</Button>
                <Button>b</Button>
                <Button>c</Button>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DetailPlace;
