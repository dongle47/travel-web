import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPlace.scss";

import { Header, Footer, Comments } from "../../components";

import Media from "./Media";
import Summary from "./Summary";
import Rating from "./Rating";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactReadMoreReadLess from "react-read-more-read-less";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Typography,
  Row,
  Col,
  Space,
  Button,
  Divider,
  Avatar,
  Image,
  Rate,
} from "antd";

import Icon, {
  CommentOutlined,
  PlayCircleOutlined,
  StarFilled,
  EllipsisOutlined,
} from "@ant-design/icons";

import { url } from "inspector";
import TextArea from "antd/lib/input/TextArea";
import apiPlaces from "../../apis/apiPlaces";

const { Title, Text } = Typography;

interface urlImage {
  url: string;
}
interface place {
  name: string;
  place_type: {
    name: string;
  };
  place_img: urlImage[];
}

const DetailPlace: React.FC = () => {
  const { id } = useParams();

  const [place, setPlace] = useState<place>({
    name: "",
    place_type: { name: "" },
    place_img: [
      {
        url: "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg",
      },
      {
        url: "https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg",
      },
    ],
  });

  useEffect(() => {
    const getDetailPlace = async () => {
      apiPlaces
        .getPlace(id)
        .then((res) => {
          setPlace(res.data);
        })
        .catch((err) => console.log(err));
    };
    getDetailPlace();
  }, []);

  // console.log(place.place_img);

  return (
    <div style={{ minHeight: "200rem" }} className="primary-font">
      <Header />

      <Row style={{}} className="mb-5">
        <Row
          style={{ marginTop: "5rem" }}
          className="bg-img rounded"
          justify="center"
        >
          <Col span={12} className="position-relative">
            <div
              style={{
                width: "70%",
                backgroundColor: "#292D33",
                padding: "2rem",
                zIndex: 1,
                top: 80,
              }}
              className="h-50 ms-5 p-5 position-absolute"
            >
              <Text style={{ fontSize: "1.6rem" }} className="text-white">
                {place.place_type.name}
              </Text>
              <Title
                style={{ fontSize: "2.8rem" }}
                className="text-white fw-light m-0 mt-4"
              >
                {place.name}
              </Title>
            </div>
            <div
              style={{
                backgroundColor: "#F86449",
                width: "14rem",
                height: "90%",
                top: 40,
                left: 410,
                zIndex: 0,
              }}
              className="position-absolute"
            ></div>
          </Col>
          <Col className="position-relative" span={12}>
            <div
              style={{
                width: "85%",
                bottom: 100,
              }}
              className="bg-white position-absolute shadow p-5"
            >
              <Space direction="vertical" size={25}>
                <Title className="fw-light" level={2}>
                  Check out all of these physical benefits of hiking
                </Title>
                <Text className="fs-6">
                  Massa ultricies mi quis hendrerit. Ac ut consequat semper
                  viverra nam. Libero id faucibus nisl tincidunt eget nullam non
                  nisi est. Arcu odio ut sem nulla. Amet tellus cras adipiscing
                  enim. Et magnis dis parturient montes. Imperdiet sed euismod
                  nisi porta lorem mollis.
                </Text>
                <Button
                  style={{ width: "10rem", height: "2.5rem" }}
                  className=""
                >
                  LEARN MORE
                </Button>
              </Space>
            </div>
          </Col>
        </Row>

        <Row
          style={{ marginTop: "5rem", padding: "0 6rem" }}
          justify="center"
          align="middle"
        >
          <Col span={6}>
            <Space style={{}} className="" direction="vertical" size={15}>
              <Text style={{ fontSize: "2rem" }} className="" strong>
                {place.name}
              </Text>
              <Text
                style={{ fontSize: "1.2rem", color: "#FF7424" }}
                className="mt-0"
                strong
              >
                {place.place_type.name}
              </Text>

              <Text style={{ fontSize: "0.9rem" }}>
                Lorem ipsum dolor sit amet adipisicing elit. Inventore id iure
                maxime repellendus a rem quisquam eum nisi et aliquam deserunt
                quam architecto ducimus magnam, doloribus sint, consequatur,
                nemo ipsam!
              </Text>

              <Button
                style={{ width: "15rem", height: "3rem" }}
                className="bg-black mt-2"
              >
                <Text className="text-white fs-6">Check in</Text>
                <i
                  style={{ width: "2rem" }}
                  className="fa-solid fa-arrow-right text-white "
                ></i>
              </Button>
            </Space>
          </Col>

          <Col
            style={{
              height: "60%",
              width: "9rem",
            }}
            className="d-flex justify-content-center"
            span={6}
          >
            <Summary />
          </Col>

          <Col className="position-relative" span={10}>
            <img
              width={480}
              className="video-detail"
              height={500}
              alt=""
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
            />
            <PlayCircleOutlined
              style={{ fontSize: "4rem", top: "43%", right: "43%" }}
              className="position-absolute text-white"
            />
          </Col>
        </Row>

        <Media images={place.place_img} />

        <div
          style={{
            backgroundColor: "#F7FAFB",
            margin: "3rem 4rem",
            padding: "2rem 0rem",
          }}
          className="w-100 "
        >
          <Space direction="vertical">
            <Title className="m-0">Bình luận và</Title>
            <Title style={{ color: "#FF7424" }}>Đánh giá</Title>
          </Space>

          <Row className="m-0" justify="center" align="middle" gutter={100}>
            <Rating />
          </Row>

          <Divider style={{ borderTop: "#FF7424" }} className="mt-5 mb-5" plain>
            <Text style={{ color: "#FF7424" }} className="fs-5" strong>
              Tất cả các bài đánh giá
            </Text>
          </Divider>

          <Row className="w-100" justify="center">
            <Comments />
          </Row>
        </div>

        <Row className="w-100 mt-5" justify="center" gutter={25}>
          <Button
            style={{
              width: "10rem",
              height: "3rem",
              backgroundColor: "#FF7424",
            }}
            className="border-0"
            type="primary"
          >
            {" "}
            <Text className="text-white fs-6" strong>
              Load more
            </Text>
          </Button>
        </Row>
      </Row>

      <Footer />
    </div>
  );
};

export default DetailPlace;
