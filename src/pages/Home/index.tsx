import React from "react";

import "./Home.scss";
import logo from "../../assets/img/logo.png";

import {
  Typography,
  Layout,
  Row,
  Col,
  Avatar,
  Card,
  Space,
  Button,
  Divider,
} from "antd";

import {
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
  YoutubeFilled,
  RedditOutlined,
  GlobalOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  TwitterSquareFilled,
  RedditSquareFilled,
} from "@ant-design/icons";
import { url } from "inspector";

const { Header, Sider, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const Homepage: React.FC = () => {
  return (
    <>
      {/* header */}
      <Row justify="space-between" align="middle">
        <Col>
          <Space>
            <GlobalOutlined style={{ fontSize: "1.5rem" }} />
            <Text>Destination</Text>
          </Space>
        </Col>
        <Col span={14}>
          <Row justify="space-evenly" align="middle">
            <Button type="text">Home</Button>
            <Button type="text">Page</Button>
            <Button type="text">Travel</Button>
            <Col>
              <img height={100} src={logo} alt="" />
            </Col>
            <Button type="text">Blog</Button>
            <Button type="text">Shop</Button>
            <Button type="text">Elements</Button>
          </Row>
        </Col>
        <Col>
          <Space size="middle">
            <InstagramOutlined />
            <TwitterOutlined />
            <FacebookFilled />
            <RedditOutlined />
            <YoutubeFilled />
          </Space>
        </Col>
      </Row>
      {/* /header */}

      <Row justify="center" align="middle">
        <Col>
          <Button
            style={{ width: "4rem" }}
            size="large"
            icon={<ArrowLeftOutlined />}
          ></Button>
        </Col>
        <Col>
          <img
            width={1100}
            height={500}
            src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
            alt=""
          />
        </Col>
        <Col>
          <Button
            style={{ width: "4rem" }}
            size="large"
            icon={<ArrowRightOutlined />}
          ></Button>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Card
          size="small"
          hoverable
          cover={
            <img
              alt="example"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/beach-category.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          size="small"
          hoverable
          cover={
            <img
              alt="example"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/dog-category.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          size="small"
          hoverable
          cover={
            <img
              alt="example"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/restorant-category.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          size="small"
          hoverable
          cover={
            <img
              alt="example"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/night-category.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          size="small"
          hoverable
          cover={
            <img
              alt="example"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/camping-category.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          size="small"
          hoverable
          cover={
            <img
              alt="example"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/low-budget-category.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Row>

      <Row justify="center">
        <Space direction="vertical" align="center">
          <Title level={2}>Destinations</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A error
          </Text>
        </Space>
      </Row>

      <Row justify="center">
        <Space>
          <Card
            hoverable
            style={{ width: 250, textAlign: "center" }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            //actions={[<Button>EXPLORE</Button>]}
          >
            <Space size="small" direction="vertical">
              <img
                height={150}
                alt="example"
                src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/peru-img.png"
              />
              <Text>adasdasd</Text>
              <Text>dấd</Text>
              <Button style={{ width: "8rem" }} size="large">
                EXPLORE
              </Button>
            </Space>
          </Card>
        </Space>
      </Row>

      <Row style={{ textAlign: "center" }} justify="center">
        <Space direction="vertical">
          <Col>
            <Title style={{ margin: 0 }} level={2}>
              abcdef
            </Title>
            <Title type="danger" style={{ margin: 0 }} level={2}>
              ghijk
            </Title>
          </Col>

          <Title type="secondary" style={{ margin: 0 }} level={4}>
            adaskldhsadksahdska
          </Title>
        </Space>
      </Row>

      <Row justify="center" align="top" style={{ textAlign: "center" }}>
        <Col span={12}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Space direction="vertical">
              <Title style={{ margin: 0 }}>dasdasdasdasd</Title>
              <Title style={{ margin: 0 }}>dasdasdasdasd</Title>
              <Text>asd</Text>
              <Text>
                Version of Lorem Ipsum. Proin gravida nibh vel velit auctor
                aliquet. Aenean sollicituuis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </Text>
              <Button type="text">KEEP READING...</Button>
              <Space>
                <FacebookFilled />
                <TwitterSquareFilled />
                <RedditSquareFilled />
              </Space>
            </Space>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Space direction="vertical">
              <Title style={{ margin: 0 }}>dasdasdasdasd</Title>
              <Title style={{ margin: 0 }}>dasdasdasdasd</Title>
              <Text>asd</Text>
            </Space>
          </Card>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Space direction="vertical">
              <Title style={{ margin: 0 }}>dasdasdasdasd</Title>
              <Title style={{ margin: 0 }}>dasdasdasdasd</Title>
              <Text>asd</Text>
            </Space>
          </Card>
        </Col>

        <Col span={6}>
          <Card size="small" title="Small size card">
            <p>Card content</p>
          </Card>
          <Card size="small" title="Small size card">
            <p>Card content</p>
          </Card>
          <Card size="small" title="Small size card">
            <p>Card content</p>
          </Card>
          <Card size="small" title="Small size card">
            <p>Card content</p>
          </Card>
          <Card size="small" title="Small size card">
            <p>Card content</p>
          </Card>
          <Card size="small" title="Small size card">
            <p>Card content</p>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ padding: "8rem" }} gutter={10}>
        <Col style={{ position: "relative" }} span={15}>
          <img
            alt=""
            src="https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2022/03/202005171129SA19.jpeg"
            width="100%"
            height="100%"
          />
          <div style={{ position: "absolute", top: 0 }}>
            <Space direction="vertical">
              <Title style={{ color: "white" }}>adads</Title>
              <Title style={{ color: "white" }}>adads</Title>
              <Title style={{ color: "white" }}>adads</Title>
              <Button style={{ color: "white" }} type="text">
                take the trip <ArrowRightOutlined />
              </Button>
            </Space>
          </div>
        </Col>
        <Col span={6}>
          <img
            alt=""
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/b46896e762a25dc681edea4e/ertt.jpg"
            width="100%"
            height="100%"
          />
        </Col>
        <Col span={3}>
          <img
            alt=""
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/2f06f199e82f5d2e80d4b930/gbcabcf627c179e3070fef24a69f43a814d1e55e6d1d1ec1b7d9d6d10d78509c61a93daa84dbaa63ffdd8cde1f8329d25c6593e42c3a1abd2746cb689f7c87497_1280.jpg"
            width="100%"
            height="100%"
          />
        </Col>
      </Row>

      <Row
        style={{
          position: "relative",
          width: "80%",
          alignSelf: "center",
          margin: "0 auto 10rem auto",
        }}
        justify="center"
      >
        <img
          width={300}
          height={300}
          style={{ borderRadius: "100%" }}
          alt=""
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/78c2a90df1ac561790a74491/photo-1418065460487-3e41a6c84dc5.jpg"
        />
        <div
          style={{ position: "absolute", bottom: 100, left: 10 }}
          className="doughnut1"
        ></div>
        <img
          width={550}
          height={550}
          style={{
            borderRadius: "100%",
            border: "1rem solid #D7D7D7",
            position: "relative",
            left: 100,
          }}
          alt=""
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f9bf585de71b58019a321e7f/photo-1483197452165-7abc4b248905.jpg"
        />
        <img
          width={400}
          height={400}
          style={{
            borderRadius: "100%",
            border: "1.5rem solid #D7D7D7",
            position: "absolute",
            left: 200,
            bottom: -100,
          }}
          alt=""
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/169dbf9a76c2571e8373e379/photo-1504870712357-65ea720d6078.jpg"
        />
        <div
          style={{ position: "absolute", bottom: -80, right: 10 }}
          className="doughnut2"
        ></div>
      </Row>
      <Row justify="center">
        <Space direction="vertical">
          <Title style={{ margin: 0 }} level={1}>
            abc
          </Title>
          <Title style={{ margin: 0 }} level={5}>
            abcasdasdasdadad
          </Title>
          <Button style={{ width: "10rem", height: "3rem" }}>read more</Button>
        </Space>
      </Row>

      <Row
        style={{
          position: "relative",
          padding: "0 10rem",
          margin: "0 auto 10rem auto",
        }}
        justify="end"
      >
        <Space direction="vertical">
          <Space>
            <Title style={{ position: "absolute" }} level={1}>
              abc
            </Title>
            <img
              width={400}
              height={400}
              style={{
                borderRadius: "100%",
              }}
              alt=""
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img3.jpg"
            />
          </Space>
          <div style={{ width: "18rem", textAlign: "center" }}>
            <Title level={4}>
              asdasdsdasdsfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
            </Title>
          </div>
        </Space>
        <div
          style={{ position: "absolute", bottom: 80, left: 100 }}
          className="doughnut2"
        ></div>
      </Row>

      <Row
        style={{
          position: "relative",
          marginLeft: "20rem",
          marginBottom: "10rem",
        }}
      >
        <img
          width={500}
          height={500}
          style={{
            borderRadius: "100%",
          }}
          alt=""
          src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
        />
        <Space
          direction="vertical"
          style={{
            position: "absolute",
            borderRadius: "2rem",
            padding: "3rem",
            width: "25rem",
            height: "15rem",
            backgroundColor: "#132456",
            right: 200,
            bottom: -50,
          }}
        >
          <Title style={{ color: "white" }} level={1}>
            asdasda
          </Title>
          <Text style={{ color: "white" }}>asdadasdasdasdasdadadasd</Text>
          <Button shape="round">Xem them</Button>
        </Space>
        <div
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            backgroundColor: "#EF2853",
            borderRadius: "100%",
            bottom: 10,
            left: 30,
          }}
        ></div>
        <div
          style={{ position: "absolute", bottom: 50, left: 100 }}
          className="doughnut2"
        ></div>
      </Row>

      <Row justify="center">
        <Col span={12}>
          <Space direction="vertical">
            <Title>Virtual Travel</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              repellat saepe nesciunt similique asperiores cumque voluptate nemo
              iure placeat eaque ratione at, libero, praesentium dolorem, rerum
              hic corporis consectetur consequatur?
            </Text>
            <Space>
              <InstagramOutlined />
              <TwitterOutlined />
              <FacebookFilled />
              <RedditOutlined />
              <YoutubeFilled />
            </Space>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Title>navigation</Title>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Title>navigation</Title>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Title>navigation</Title>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
