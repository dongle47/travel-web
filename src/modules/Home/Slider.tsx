import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./Home.scss";
import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Slider: React.FC = () => {
  return (
    <Row
      style={{ marginTop: "5rem" }}
      className="position-relative "
      justify="center"
      align="middle"
    >
      <Col className="position-relative">
        <img
          width={1150}
          height={500}
          src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
          alt=""
        />
        <img
          className="position-absolute w-70 h-25"
          style={{ top: 150, right: 90 }}
          src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h6-slider-graphic-1.png"
          alt=""
        />
        <img
          className="position-absolute w-40 h-15"
          style={{ top: 160, right: 290 }}
          width={500}
          height={100}
          src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/logo-bottom-1.png"
          alt=""
        />
        <Link to="./map">
          <Button className="position-absolute explore-btn rounded-0">
            TRẢI NGHIỆM NGAY
          </Button>
        </Link>
      </Col>
      <Col style={{ position: "absolute", left: 67 }}>
        <Button
          style={{ width: "4rem" }}
          className="rounded-0"
          size="large"
          icon={<ArrowLeftOutlined />}
        ></Button>
      </Col>
      <Col style={{ position: "absolute", right: 67 }}>
        <Button
          style={{ width: "4rem" }}
          className="rounded-0"
          size="large"
          icon={<ArrowRightOutlined />}
        ></Button>
      </Col>
    </Row>
  );
};

export default Slider;
