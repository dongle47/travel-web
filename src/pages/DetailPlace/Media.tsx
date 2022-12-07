import React from "react";
import { Row, Col, Space, Divider, Image, Modal } from "antd";

interface urlImage {
  id?: string;
  url: string;
}
interface IProps {
  images: urlImage[];
}

const Media: React.FC<IProps> = ({ images }) => {
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
          justify="start"
          align="top"
          gutter={25}
        >
          <Col className="h-100" span={9}>
            <Image
              style={{}}
              className="w-100 vh-100"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
              // src={images[0].url}
            />
          </Col>

          <Col className="h-100" span={6}>
            <Space className="vh-100" direction="vertical" size={20}>
              <Image
                // style={{ width: "100%", height: "40%" }}
                className="w-100"
                src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
              />
              <Image
                // style={{ width: "100%", height: "40%" }}
                className="w-100"
                src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
              />
            </Space>
          </Col>

          <Col className="h-100" span={4}>
            <Space className="vh-100" direction="vertical" size={15}>
              {[0, 1, 2, 3].map((item) => (
                <Image
                  style={{ width: "15rem", height: "7rem" }}
                  className=""
                  src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/previewImage/PowerfulReasons_hero.jpg"
                />
              ))}
            </Space>
          </Col>

          <Col className="h-100" span={3}>
            <Space className="vh-100" direction="vertical" size={15}>
              {[0, 1, 2, 3].map((item) => (
                <Image
                  style={{ width: "6rem", height: "6rem" }}
                  className=""
                  src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
                />
              ))}
            </Space>
          </Col>
        </Row>
      </Image.PreviewGroup>
    </div>
  );
};

export default Media;
