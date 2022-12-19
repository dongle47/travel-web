import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

import { Header, Footer } from "../../components";

import Slider from "./Slider";

import Introduce from "./Introduce";

import News from "./News";

import { Typography, Row, Col, Card, Space, Button } from "antd";

import {
  FacebookFilled,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  TwitterSquareFilled,
  RedditSquareFilled,
} from "@ant-design/icons";
import { Slide } from "react-toastify";

const { Title, Text } = Typography;
const { Meta } = Card;

const Homepage: React.FC = () => {
  return (
    <div className="container-home">
      <Header />

      <div className="px-5">
        <Slider />

        <Row style={{ marginTop: "5rem" }} justify="center" align="middle">
          <Space size={10}>
            <Card
              className="pt-3"
              style={{ width: "10rem" }}
              size="small"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/beach-category.png"
                />
              }
            >
              <Meta title="BÃI BIỂN" description="4 địa điểm" />
            </Card>
            <Card
              style={{ width: "10rem", padding: "1rem 0 0 0" }}
              size="small"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/restorant-category.png"
                />
              }
            >
              <Meta title="NHÀ HÀNG" description="8 địa điểm" />
            </Card>
            <Card
              style={{ width: "10rem", padding: "1rem 0 0 0" }}
              size="small"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/night-category.png"
                />
              }
            >
              <Meta title="KHÁCH SẠN" description="8 địa điểm" />
            </Card>
            <Card
              style={{ width: "10rem", padding: "1rem 0 0 1rem" }}
              size="small"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/camping-category.png"
                />
              }
            >
              <Meta title="CẮM TRẠI" description="4 địa điểm" />
            </Card>
            <Card
              style={{ width: "10rem", padding: "1rem 0 0 0" }}
              size="small"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/beach-category.png"
                />
              }
            >
              <Meta title="Bãi biển" description="4 địa điểm" />
            </Card>
            <Card
              style={{ width: "10rem", padding: "1rem 0 0 0" }}
              size="small"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/beach-category.png"
                />
              }
            >
              <Meta title="Bãi biển" description="4 địa điểm" />
            </Card>
          </Space>
        </Row>

        <Row style={{ marginTop: "5rem" }} justify="center">
          <Space direction="vertical" align="center">
            <Title className="m-0" level={1}>
              DESTINATIONS
            </Title>
            <Text type="secondary" className="secondFont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
            </Text>
          </Space>
        </Row>

        <Row style={{ marginTop: "2rem" }} justify="center">
          <Space size={15}>
            <Card
              hoverable
              style={{ width: 250, textAlign: "center" }}
              cover={
                <img
                  width={250}
                  height={150}
                  alt="example"
                  src="https://image.thanhnien.vn/w1024/Uploaded/2022/kbfluaa/2021_11_02/qn-mua-may-7180.jpeg"
                />
              }
            >
              <Space size="small" direction="vertical">
                <img
                  height={150}
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/peru-img.png"
                />
                <Title className="m-0" level={3}>
                  Bình Định
                </Title>
                <Text type="secondary">abcd</Text>
                <Button style={{ width: "10rem" }} size="large">
                  KHÁM PHÁ
                </Button>
              </Space>
            </Card>

            <Card
              hoverable
              style={{ width: 250, textAlign: "center" }}
              cover={
                <img
                  width={250}
                  height={150}
                  alt="example"
                  src="http://xaviahotel.com/vnt_upload/news/11_2017/nha-trang_1.jpg"
                />
              }
            >
              <Space size="small" direction="vertical">
                <img
                  height={150}
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/peru-img.png"
                />
                <Title className="m-0" level={3}>
                  Nha Trang
                </Title>
                <Text type="secondary">abcd</Text>
                <Button style={{ width: "10rem" }} size="large">
                  KHÁM PHÁ
                </Button>
              </Space>
            </Card>

            <Card
              hoverable
              style={{ width: 250, textAlign: "center" }}
              cover={
                <img
                  width={250}
                  height={150}
                  alt="example"
                  src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
                />
              }
            >
              <Space size="small" direction="vertical">
                <img
                  height={150}
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/peru-img.png"
                />
                <Title className="m-0" level={3}>
                  Đà Nẵng
                </Title>
                <Text type="secondary">abcd</Text>
                <Button style={{ width: "10rem" }} size="large">
                  KHÁM PHÁ
                </Button>
              </Space>
            </Card>

            <Card
              hoverable
              style={{ width: 250, textAlign: "center" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Space size="small" direction="vertical">
                <img
                  height={150}
                  alt="example"
                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/peru-img.png"
                />
                <Title className="mt-0" level={3}>
                  Bình Định
                </Title>
                <Text type="secondary">abcd</Text>
                <Button style={{ width: "10rem" }} size="large">
                  KHÁM PHÁ
                </Button>
              </Space>
            </Card>
          </Space>
        </Row>

        <News />

        <Introduce />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
