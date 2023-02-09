import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const Introduce: React.FC = () => {
  return (
    <div>
      <Row className="p-5" justify="center" gutter={10}>
        <Col className="position-relative" span={15}>
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
              <Title className="text-white m-0" level={3}>
                Awesome Dessert
              </Title>
              <Title className="text-white" level={3}>
                Private Trip Adventure
              </Title>
              <Button className="text-white" type="text">
                Take the trip <ArrowRightOutlined />
              </Button>
            </Space>
          </div>
        </Col>

        <Col span={6}>
          <img
            style={{ borderRadius: "0.5rem", filter: "brightness(80%)" }}
            alt=""
            src="https://cdna.artstation.com/p/assets/images/images/030/790/238/large/sergey-vasnev-stations2.jpg?1601653727"
            width="100%"
            height="100%"
          />
        </Col>
        <Col span={3}>
          <img
            style={{ borderRadius: "0.5rem", filter: "brightness(80%)" }}
            alt=""
            src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
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

        <div className="doughnut1"></div>

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
          className="position-absolute rounded-circle"
          width={350}
          height={350}
          style={{
            border: "1.5rem solid #D7D7D7",
            left: 250,
            bottom: -90,
          }}
          alt=""
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/169dbf9a76c2571e8373e379/photo-1504870712357-65ea720d6078.jpg"
        />
        <div className="doughnut2" style={{ bottom: -80, right: 10 }}></div>
      </Row>

      <Row style={{ textAlign: "center" }} justify="center">
        <Space direction="vertical">
          <Title className="m-0 fs-1">Backpacking Trips</Title>
          <div className="fs-6" style={{ width: "50rem" }}>
            <Text className="my-0 mx-auto">
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
        className="position-relative"
        style={{
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
        <div className="doughnut3"></div>
      </Row>

      <Row
        style={{
          position: "relative",
          marginLeft: "10rem",
          marginBottom: "10rem",
        }}
      >
        <img
          className="rounded-circle"
          width={600}
          height={600}
          alt=""
          src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
        />
        <Space
          className="home-panel1"
          size={30}
          direction="vertical"
          style={stylePanel1}
        >
          <Title style={{ color: "white", margin: 0 }} level={2}>
            Hot Air Balloon Festival
          </Title>
          <Text className="text-white">
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too.
          </Text>
          <Button
            style={{
              backgroundColor: "#4B4F5F",
              width: "10rem",
              height: "2.5rem",
            }}
            type="primary"
            shape="round"
          >
            XEM THÊM
          </Button>
        </Space>
        <div className="home-reddot" style={styleRedDot}></div>
        <div
          style={{
            top: 30,
            right: 310,
            border: "2.5rem solid #6C738A",
          }}
          className="doughnut2"
        ></div>
      </Row>
    </div>
  );
};

export default Introduce;

const stylePanel1: object = {
  position: "absolute",
  borderRadius: "2rem",
  padding: "2rem",
  width: "30rem",
  height: "18rem",
  backgroundColor: "#2a9d8f",
  right: 200,
  bottom: -50,
};

const styleRedDot: object = {
  position: "absolute",
  width: 100,
  height: 100,
  backgroundColor: "#EF2853",
  borderRadius: "100%",
  bottom: 10,
  left: 30,
};
