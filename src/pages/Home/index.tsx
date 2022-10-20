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
  ArrowLeftOutlined,
  ArrowRightOutlined,
  TwitterSquareFilled,
  RedditSquareFilled,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { url } from "inspector";

const { Header, Sider, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const Homepage: React.FC = () => {
  return (
    <>
      {/* header */}
      <Row style={{ marginTop: "1rem" }} justify="space-between" align="middle">
        <Col>
          <Space>
            <GlobalOutlined style={{ fontSize: "1.5rem", color: "grey" }} />
            <Text>Ngôn ngữ</Text>
          </Space>
        </Col>
        <Col span={15}>
          <Row justify="space-evenly" align="middle">
            <Button size="small" type="text">
              TRANG CHỦ
            </Button>
            <Button size="small" type="text">
              PAGE
            </Button>
            <Button size="small" type="text">
              TRAVEL
            </Button>
            <Col>
              <img height={50} src={logo} alt="" />
            </Col>
            <Button size="small" type="text">
              BLOG
            </Button>
            <Button size="small" type="text">
              CỬA HÀNG
            </Button>
            <Button size="small" type="text">
              ELEMENTS
            </Button>
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
      {/* /header */}

      <Row
        style={{ position: "relative", marginTop: "1rem" }}
        justify="center"
        align="middle"
      >
        <Col style={{ position: "relative" }}>
          <img
            width={1150}
            height={500}
            src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
            alt=""
          />
          <img
            style={{ position: "absolute", top: 150, right: 90 }}
            width={900}
            height={200}
            src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h6-slider-graphic-1.png"
            alt=""
          />
          <img
            style={{ position: "absolute", top: 180, right: 290 }}
            width={500}
            height={100}
            src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/logo-bottom-1.png"
            alt=""
          />
        </Col>
        <Col style={{ position: "absolute", left: 67 }}>
          <Button
            style={{ width: "4rem" }}
            size="large"
            icon={<ArrowLeftOutlined />}
          ></Button>
        </Col>
        <Col style={{ position: "absolute", right: 67 }}>
          <Button
            style={{ width: "4rem" }}
            size="large"
            icon={<ArrowRightOutlined />}
          ></Button>
        </Col>
      </Row>

      <Row style={{ marginTop: "5rem" }} justify="center" align="middle">
        <Space size={10}>
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
          <Title style={{ margin: 0 }} level={1}>
            DESTINATIONS
          </Title>
          <Text type="secondary" className="bodyFont">
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
              <Title style={{ margin: 0 }} level={3}>
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
              <Title style={{ margin: 0 }} level={3}>
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
              <Title style={{ margin: 0 }} level={3}>
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
              <Title style={{ margin: 0 }} level={3}>
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

      <Row style={{ textAlign: "center", marginTop: "5rem" }} justify="center">
        <Space direction="vertical" size={30}>
          <Col>
            <Title style={{ margin: 0, fontWeight: 100 }} level={1}>
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
              className="bodyFont"
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
              <Title style={{ margin: 0 }}>Bình Định</Title>
              <Title style={{ margin: 0, fontWeight: 100 }}>sub title</Title>
              <Text type="secondary">WORLD</Text>
              <Text style={{ fontSize: "1rem" }} className="bodyFont">
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
                <Title style={{ margin: 0 }} level={4}>
                  Title
                </Title>

                <Text className="bodyFont" type="secondary">
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
                <Title style={{ margin: 0 }} level={4}>
                  Title
                </Title>

                <Text className="bodyFont" type="secondary">
                  description
                </Text>
              </Space>
            </Card>
          </Space>
        </Col>

        <Col span={6}>
          <Card hoverable size="small">
            <Title style={{}} level={5}>
              Title
            </Title>
            <Text className="bodyFont" type="secondary">
              description
            </Text>
          </Card>
          <Card hoverable size="small">
            <Title style={{}} level={5}>
              Title
            </Title>
            <Text className="bodyFont" type="secondary">
              description
            </Text>
          </Card>
          <Card hoverable size="small">
            <Title style={{}} level={5}>
              Title
            </Title>
            <Text className="bodyFont" type="secondary">
              description
            </Text>
          </Card>
          <Card hoverable size="small">
            <Title style={{}} level={5}>
              Title
            </Title>
            <Text className="bodyFont" type="secondary">
              description
            </Text>
          </Card>
          <Card hoverable size="small">
            <Title style={{}} level={5}>
              Title
            </Title>
            <Text className="bodyFont" type="secondary">
              description
            </Text>
          </Card>
          <Card hoverable size="small">
            <Title style={{}} level={5}>
              Title
            </Title>
            <Text className="bodyFont" type="secondary">
              description
            </Text>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ padding: "8rem" }} gutter={10}>
        <Col
          style={{
            position: "relative",
          }}
          span={15}
        >
          <img
            style={{
              borderRadius: "0.5rem",
              filter: "brightness(80%)",
            }}
            alt=""
            src="https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2022/03/202005171129SA19.jpeg"
            width="100%"
            height="100%"
          />
          <div style={{ position: "absolute", bottom: 20, left: 50 }}>
            <Space direction="vertical">
              <Text style={{ color: "white", fontSize: "0.8rem" }}>
                PRIVATE TRIP
              </Text>
              <Title level={3} style={{ color: "white", margin: 0 }}>
                Awesome Dessert
              </Title>
              <Title level={3} style={{ color: "white" }}>
                Private Trip Adventure
              </Title>
              <Button style={{ color: "white" }} type="text">
                Take the trip <ArrowRightOutlined />
              </Button>
            </Space>
          </div>
        </Col>

        <Col span={6}>
          <img
            style={{ borderRadius: "0.5rem", filter: "brightness(80%)" }}
            alt=""
            src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/307679541_1527331077693905_5452152073450292985_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=t8MxmmmBGZ4AX8wCexj&tn=fMTxUtGiWhtZ5nW4&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdR_jXFLCUzREl6DN6jJ0FMVGnNaDgEXQoiTekmysq1P1g&oe=6375A105"
            width="100%"
            height="100%"
          />
        </Col>
        <Col span={3}>
          <img
            style={{ borderRadius: "0.5rem", filter: "brightness(80%)" }}
            alt=""
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.15752-9/310983640_5717766861615549_6444556240082191301_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=724Im6s_w8MAX8nuOic&_nc_ht=scontent.fsgn5-8.fna&oh=03_AdSUqYaf_3iD2eS6kMhVfWRnA7k-GoE3cgBBni3uutXzxw&oe=637812AE"
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
          margin: "0 auto 8rem auto",
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
          style={{ position: "absolute", bottom: 110, left: 30 }}
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
          width={350}
          height={350}
          style={{
            borderRadius: "100%",
            border: "1.5rem solid #D7D7D7",
            position: "absolute",
            left: 250,
            bottom: -90,
          }}
          alt=""
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/169dbf9a76c2571e8373e379/photo-1504870712357-65ea720d6078.jpg"
        />
        <div
          style={{ position: "absolute", bottom: -80, right: 10 }}
          className="doughnut2"
        ></div>
      </Row>

      <Row style={{ textAlign: "center" }} justify="center">
        <Space direction="vertical">
          <Title style={{ margin: 0, fontSize: "3rem" }}>
            Backpacking Trips
          </Title>
          <div style={{ width: "50rem", fontSize: "1rem" }}>
            <Text style={{ margin: "0 auto" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dolorem voluptate ipsa veniam veritatis, nemo ratione cumque
              cupiditate? Consequatur, labore id sunt cum corporis dignissimos
              facere aspernatur ipsum enim esse?
            </Text>
          </div>
          <Button
            style={{ width: "10rem", height: "3rem" }}
            shape="round"
            type="primary"
          >
            XEM THÊM
          </Button>
        </Space>
      </Row>

      <Row
        style={{
          position: "relative",
          padding: "0 15rem",
          margin: "5rem auto 10rem auto",
        }}
        justify="end"
      >
        <Space direction="vertical">
          <Space>
            <Title
              style={{
                position: "absolute",
                fontSize: "5rem",
                top: 260,
                left: 350,
              }}
            >
              Freedom
            </Title>
            <img
              width={500}
              height={500}
              style={{
                borderRadius: "100%",
              }}
              alt=""
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img3.jpg"
            />
          </Space>
          <div
            style={{ width: "22rem", textAlign: "center", marginTop: "3rem" }}
          >
            <Title level={5}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Title>
          </div>
        </Space>
        <div
          style={{
            position: "absolute",
            bottom: 200,
            left: 210,
            width: "8rem",
            height: "8rem",
            border: "1.5rem solid #6C738A",
          }}
          className="doughnut2"
        ></div>
      </Row>

      <Row
        style={{
          position: "relative",
          marginLeft: "10rem",
          marginBottom: "10rem",
        }}
      >
        <img
          width={600}
          height={600}
          style={{
            borderRadius: "100%",
          }}
          alt=""
          src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
        />
        <Space
          size={30}
          direction="vertical"
          style={{
            position: "absolute",
            borderRadius: "2rem",
            padding: "2rem",
            width: "30rem",
            height: "18rem",
            backgroundColor: "#2a9d8f",
            right: 200,
            bottom: -50,
          }}
        >
          <Title style={{ color: "white", margin: 0 }} level={2}>
            Hot Air Balloon Festival
          </Title>
          <Text style={{ color: "white" }}>
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too.
          </Text>
          <Button style={{backgroundColor:'#4B4F5F', width:'10rem', height:'2.5rem'}} type="primary" shape="round">
            XEM THÊM
          </Button>
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
          style={{
            position: "absolute",
            top: 30,
            right: 310,
            border: "2.5rem solid #6C738A",
          }}
          className="doughnut2"
        ></div>
      </Row>

      <Row style={{ height: "20rem" }} justify="center">
        <Col span={12}>
          <Space direction="vertical" size={20}>
            <Title style={{ margin: 0 }}>Virtual Travel</Title>
            <div style={{ width: "30rem" }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                repellat saepe nesciunt similique asperiores cumque voluptate
                nemo iure placeat eaque ratione at, libero, praesentium dolorem
              </Text>
            </div>

            <Space size={30}>
              <FacebookOutlined />
              <InstagramOutlined />
              <TwitterOutlined />
              <RedditOutlined />
              <YoutubeOutlined />
            </Space>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Title level={3}>Navigate</Title>
            <Text>Trang chủ</Text>
            <Text>Destination</Text>
            <Text>Expedition</Text>
            <Text>Timeline</Text>
            <Text>Review</Text>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Title level={3}>Support Us</Title>
            <Text>FAQ</Text>
            <Text>Contact Us</Text>
            <Text>Suport Center</Text>
            <Text>Security</Text>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Title level={3}>Partner</Title>
            <Text>Our Parner</Text>
            <Text>Subscribe</Text>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
