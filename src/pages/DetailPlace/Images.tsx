import React from "react";
import { Row, Col, Space, Divider, Image, Modal } from "antd";

interface urlImage {
  id?: string;
  url: string;
}
interface IProps {
  images: urlImage[];
}

const Images: React.FC<IProps> = ({ images }) => {
  const arrImg = images.map((item) => item.url);
  const arrImgLen = arrImg.length;
  for (let i = 0; i < 11 - arrImgLen; i++) {
    arrImg.push("");
  }

  console.log(arrImg);
  return (
    <div>
      <Image.PreviewGroup>
        <Row
          style={{
            textAlign: "center",
            marginTop: "5rem",
            width: "100%",
            height: "700px",
            padding: "0 0 0 5rem",
          }}
          justify="center"
          align="top"
          gutter={20}
        >
          <Col className="h-100" span={9}>
            {arrImg[0] !== "" ? (
              <Image style={{}} className="w-100 vh-100" src={arrImg[0]} />
            ) : (
              <></>
            )}
          </Col>

          <Col className="h-100" span={6}>
            <Space className="vh-100" direction="vertical" size={20}>
              {arrImg
                .slice(1, 3)
                .filter((item) => item !== "")
                .map((item) => (
                  <Image className="w-100" src={item} />
                ))}
            </Space>
          </Col>

          <Col className="h-100" span={5}>
            <Space className="vh-100" direction="vertical" size={15}>
              {arrImg
                .slice(3, 8)
                .filter((item) => item !== "")
                .map((item, index) => (
                  <Image className="w-100" src={item} />
                ))}
            </Space>
          </Col>

          <Col className="h-100" span={2}>
            <Space className="vh-100" direction="vertical" size={15}>
              {arrImg
                .slice(8, 12)
                .filter((item) => item !== "")
                .map((item) => (
                  <Image className="w-100" src={item} />
                ))}
            </Space>
          </Col>
        </Row>
      </Image.PreviewGroup>
    </div>
  );
};

export default Images;
