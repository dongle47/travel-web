import {
  FacebookFilled,
  RedditSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const News: React.FC = () => {
  return (
    <div>
      <Row style={{ textAlign: "center", marginTop: "5rem" }} justify="center">
        <Space direction="vertical" size={30}>
          <Col>
            <Title className="m-0 fw-light" level={1}>
              RECENT STORIES FROM
            </Title>
            <Title
              type="danger"
              style={{ margin: 0, fontWeight: 100 }}
              level={1}
            >
              DIFFERENT CITIES
            </Title>
          </Col>

          <div style={{ width: "40rem" }}>
            <Title
              className="secondFont"
              type="secondary"
              style={{ margin: 0 }}
              level={5}
            >
              Altera theophrastus his in, case ceteros mentitum no vim, causae
              offendit id vix. Eum ut utroque omittam commune, ei mel stet
              dissentiunt. Vim cu ignota contentiones. Eos cu commodo
              percipitur, ea vix eleifend torquatos rationibus.
            </Title>
          </div>
        </Space>
      </Row>

      <Row
        justify="center"
        align="top"
        style={{ textAlign: "center", marginTop: "5rem", padding: "0 5rem" }}
        gutter={25}
      >
        <Col span={12}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://image.thanhnien.vn/w1024/Uploaded/2022/kbfluaa/2021_11_02/qn-mua-may-7180.jpeg"
              />
            }
          >
            <Space direction="vertical">
              <Title className="m-0">Bình Định</Title>
              <Title className="m-0 fw-light">sub title</Title>
              <Text type="secondary">WORLD</Text>
              <Text className="secondFont fs-6">
                Version of Lorem Ipsum. Proin gravida nibh vel velit auctor
                aliquet. Aenean sollicituuis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </Text>
              <Button type="text">KEEP READING...</Button>
              <Space>
                <FacebookFilled
                  style={{ fontSize: "2rem", color: "#4267B2" }}
                />
                <TwitterSquareFilled
                  style={{ fontSize: "2rem", color: "#1DA1F2" }}
                />
                <RedditSquareFilled
                  style={{ fontSize: "2rem", color: "#FF4500" }}
                />
              </Space>
            </Space>
          </Card>
        </Col>
        <Col span={6}>
          <Space direction="vertical" size={20}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
                />
              }
            >
              <Space direction="vertical">
                <Title className="m-0" level={4}>
                  Title
                </Title>

                <Text className="secondFont" type="secondary">
                  description
                </Text>
              </Space>
            </Card>

            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
                />
              }
            >
              <Space direction="vertical">
                <Title className="m-0" level={4}>
                  Title
                </Title>

                <Text className="secondFont" type="secondary">
                  description
                </Text>
              </Space>
            </Card>
          </Space>
        </Col>

        <Col span={6}>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <Card hoverable size="small">
              <Title level={5}>Title</Title>
              <Text className="secondFont" type="secondary">
                description
              </Text>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default News;
