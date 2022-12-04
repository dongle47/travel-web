import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactReadMoreReadLess from "react-read-more-read-less";

import {
  Typography,
  Row,
  Col,
  Space,
  Button,
  Avatar,
  Image,
  Input,
  AutoComplete,
  Carousel,
  Modal,
  Upload,
} from "antd";

const { Title, Text } = Typography;

const RelyComment: React.FC = () => {
  return (
    <>
      <Row style={{ width: "90%" }} className="mt-3" align="top" gutter={10}>
        <Col className="mt-3" span={3}>
          <Text
            style={{
              color: "#FD665E",
              fontSize: "5rem",
              lineHeight: "5rem",
            }}
          >
            “
          </Text>
        </Col>

        <Col span={21}>
          <Row className="mb-2 mt-3" gutter={15} align="middle">
            <Col>
              <Avatar
                size={40}
                src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta-1200x900.jpeg"
              />
            </Col>
            <Col>
              <Space direction="vertical" size={0}>
                <Text style={{ fontSize: "0.8rem" }} strong>
                  Tên người dùng
                </Text>
                <Text
                  style={{ fontSize: "0.8rem" }}
                  className="text-secondary m-0"
                >
                  Ngày đăng
                </Text>
              </Space>
            </Col>
          </Row>

          <Row style={{ fontSize: "0.8rem" }} className="mb-2 text-secondary">
            <ReactReadMoreReadLess
              charLimit={150}
              readMoreText={
                <Text style={{ color: "#5449A3" }} strong>
                  Xem thêm
                </Text>
              }
              readLessText={
                <Text style={{ color: "#5449A3" }} strong>
                  Thu gọn
                </Text>
              }
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              debitis corrupti. Reprehenderit ullam modi excepturi eaque
              dolorum. Dolorum sint asperiores ratione repellat fugit quam
              dignissimos quibusdam. Ut, saepe? Dicta, laudantium.
            </ReactReadMoreReadLess>
          </Row>

          <Row className="">
            <Space>
              <Button
                style={{ width: "5rem" }}
                type="primary"
                size="small"
                shape="round"
                ghost
              >
                Like
              </Button>
              <Button
                style={{ width: "5rem" }}
                type="primary"
                size="small"
                shape="round"
                ghost
                danger
              >
                Dislike
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RelyComment;
