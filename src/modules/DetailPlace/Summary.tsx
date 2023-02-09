import React from "react";
import { Typography, Row, Col, Space, Modal } from "antd";

import Icon, {
  CommentOutlined,
  StarOutlined,
  MessageOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Summary: React.FC = () => {
  return (
    <div>
      <Space
        className="trapezoid pt-5"
        direction="vertical"
        align="center"
        size={20}
      >
        <Row className="mt-3" justify="center">
          <Space direction="vertical" align="center" size={3}>
            <EnvironmentOutlined className="text-white fs-3" />
            <Text className="text-white fw-lighter">Lượt check in</Text>
          </Space>
        </Row>

        <Row justify="center">
          <Space direction="vertical" align="center" size={3}>
            <MessageOutlined className="text-white fs-3" />
            <Text className="text-white fw-lighter">Lượt đánh giá</Text>
          </Space>
        </Row>

        <Row justify="center">
          <Space direction="vertical" align="center" size={3}>
            <StarOutlined className="text-white fs-3" />
            <Text className="text-white fw-lighter">Số sao</Text>
          </Space>
        </Row>
      </Space>
    </div>
  );
};

export default Summary;
