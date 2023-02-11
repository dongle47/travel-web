import React, { useState } from "react";
import { ReplyComment, ButtonLikeCmt } from "../../../components";

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
  Rate,
} from "antd";

import Icon, {
  CommentOutlined,
  StarFilled,
  EllipsisOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../../hooks";
import { selectUser } from "../../Authentication/authSlice";

const { Title, Text } = Typography;

const { TextArea } = Input;
export interface ICommentProps {
  avatar: string;
  full_name: string;
  rate: number;
  description: string;
  review_img: any;
  created_at: string;
}

const Comment: React.FC<ICommentProps> = ({
  avatar,
  full_name,
  rate,
  description,
  review_img,
  created_at,
}) => {
  const [valueAnswer, setValueAnswer] = useState("");

  const [replyVisibility, setReplyVisibility] = useState(false);

  const user = useAppSelector(selectUser);

  return (
    <>
      <Row
        style={{ width: "75%", marginBottom: "5rem" }}
        className=""
        gutter={20}
      >
        <Col span={6}>
          <Row gutter={10} align="middle">
            <Col>
              <Avatar
                size={50}
                src={avatar}
                // src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta-1200x900.jpeg"
              />
            </Col>
            <Col>
              <Space direction="vertical" size={0}>
                <Text strong>{full_name}</Text>
                <Text className="text-secondary">
                  {created_at.slice(0, 10)}
                </Text>
              </Space>
            </Col>
          </Row>
        </Col>

        <Col span={13}>
          <Row className="mb-1">
            {/* <Space size={3}>
              <StarFilled style={{ color: "#FFC107", fontSize: "1.2rem" }} />
              <StarFilled style={{ color: "#FFC107", fontSize: "1.2rem" }} />
              <StarFilled style={{ color: "#FFC107", fontSize: "1.2rem" }} />
              <StarFilled style={{ color: "#E0E0E3", fontSize: "1.2rem" }} />
              <StarFilled style={{ color: "#E0E0E3", fontSize: "1.2rem" }} />
            </Space> */}
            <Rate disabled defaultValue={rate} allowHalf />
          </Row>

          <Row className="mb-1">
            <Text strong>Highly Recommended Coffee</Text>
          </Row>

          <Row className="mb-1 text-secondary">
            <ReactReadMoreReadLess
              charLimit={190}
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
              {description}
            </ReactReadMoreReadLess>
          </Row>

          <Image.PreviewGroup>
            <Space>
              {/* {[0, 1, 2].map((item, index) => (
                <Image
                  key={index}
                  style={{ marginRight: "1rem" }}
                  width={120}
                  height={120}
                  src="https://image.thanhnien.vn/w1024/Uploaded/2022/kbfluaa/2021_11_02/qn-mua-may-7180.jpeg"
                />
              ))} */}
              {review_img.map((item: any, index: any) => (
                <Image
                  key={index}
                  style={{ marginRight: "1rem" }}
                  width={120}
                  height={120}
                  src={item.url}
                />
              ))}
            </Space>
          </Image.PreviewGroup>

          {replyVisibility && (
            <div style={{ padding: "0.8rem" }} className="mt-4 border rounded">
              <Row
                className="w-100 mb-1"
                justify="space-between"
                align="middle"
              >
                <Space>
                  <Avatar
                    size={40}
                    src={user?.avatar}
                    // src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta-1200x900.jpeg"
                  />
                  <Text
                    style={{ fontSize: "0.8rem" }}
                    className="text-align-center"
                    strong
                  >
                    {user?.full_name}
                  </Text>
                </Space>

                <Text className="text-secondary">Ngày đăng</Text>
              </Row>

              <div>
                <TextArea
                  placeholder="Nhập bình luận"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <Row className="mt-1" justify="end">
                <Button style={{ width: "18%" }} className="me-2" type="text">
                  Huỷ
                </Button>
                <Button style={{ backgroundColor: "#69B9C7", width: "20%" }}>
                  <Text className="text-white">Trả lời</Text>
                </Button>
              </Row>
            </div>
          )}

          {/* trả lời */}
          <div>
            {/* <ReplyComment status={0} />
            <ReplyComment status={1} />
            <ReplyComment status={-1} /> */}
          </div>
          {/* end trả lời */}
        </Col>

        <Col className="d-flex justify-content-center" span={3}>
          <Space direction="vertical">
            <ButtonLikeCmt status={0} />

            <Button
              style={{ width: "5.5rem" }}
              className="mt-1 d-flex align-items-center justify-content-center"
              type="text"
              size="large"
              icon={<CommentOutlined className="fs-4 text-secondary" />}
              onClick={() => setReplyVisibility((prev) => !prev)}
            >
              <Text style={{ fontSize: "0.9rem" }} className="text-secondary">
                Trả lời
              </Text>
            </Button>
          </Space>
        </Col>

        <Col span={1}>
          <EllipsisOutlined style={{ marginTop: "2rem" }} className="fs-5" />
        </Col>
      </Row>
    </>
  );
};

export default Comment;
