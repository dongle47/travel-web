import React from "react";
import "./Home.scss";

import { Header, Footer } from "../../components";

import Slider from "./Slider";

import Introduce from "./Introduce";

import News from "./News";

import { Typography, Row, Card, Space, Button, Divider } from "antd";

const { Title, Text } = Typography;
const { Meta } = Card;

const placeType = [
  {
    imgSrc:
      "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/beach-category.png",
    title: "BÃI BIỂN",
    description: "4 địa điểm",
  },
  {
    imgSrc:
      "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/restorant-category.png",
    title: "NHÀ HÀNG",
    description: "8 địa điểm",
  },
  {
    imgSrc:
      "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/night-category.png",
    title: "KHÁCH SẠN",
    description: "8 địa điểm",
  },
  {
    imgSrc:
      "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/camping-category.png",
    title: "CẮM TRẠI",
    description: "8 địa điểm",
  },
  {
    imgSrc:
      "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/beach-category.png",
    title: "BÃI BIỂN",
    description: "4 địa điểm",
  },
  {
    imgSrc:
      "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/night-category.png",
    title: "BÃI BIỂN",
    description: "4 địa điểm",
  },
];

const suggestPlace = [
  {
    imgSrc:
      "https://image.thanhnien.vn/w1024/Uploaded/2022/kbfluaa/2021_11_02/qn-mua-may-7180.jpeg",
    title: "BÌNH ĐỊNH",
    description: "abcd",
  },
  {
    imgSrc: "http://xaviahotel.com/vnt_upload/news/11_2017/nha-trang_1.jpg",
    title: "NHA TRANG",
    description: "4 địa điểm",
  },
  {
    imgSrc:
      "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
    title: "ĐÀ NẴNG",
    description: "4 địa điểm",
  },
  {
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    title: "BÌNH ĐỊNH",
    description: "4 địa điểm",
  },
];

const Homepage: React.FC = () => {
  return (
    <div className="container-home">
      <Header />

      <div className="px-5">
        <Slider />

        <Row style={{ marginTop: "5rem" }} justify="center" align="middle">
          <Space size={10}>
            {placeType.map((item, index) => (
              <Card
                key={index}
                style={{ width: "10rem" }}
                className="pt-3 rounded-0"
                size="small"
                hoverable
                cover={<img alt="example" src={item.imgSrc} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            ))}
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
            {suggestPlace.map((item, index) => (
              <Card
                key={index}
                hoverable
                style={{ width: 250, textAlign: "center" }}
                cover={
                  <img
                    width={250}
                    height={150}
                    alt="example"
                    src={item.imgSrc}
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
                    {item.title}
                  </Title>
                  <Text type="secondary">{item.description}</Text>
                  <Button
                    style={{ width: "10rem" }}
                    className="rounded-0"
                    size="large"
                  >
                    KHÁM PHÁ
                  </Button>
                </Space>
              </Card>
            ))}
          </Space>
        </Row>

        <News />

        <Introduce />
      </div>

      <Divider />

      <Footer />
    </div>
  );
};

export default Homepage;
