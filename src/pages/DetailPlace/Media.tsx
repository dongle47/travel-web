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
            {/* <Image
              style={{}}
              className="w-100 vh-100"
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
            /> */}
            {arrImg[0] !== "" ? (
              <Image style={{}} className="w-100 vh-100" src={arrImg[0]} />
            ) : (
              <></>
            )}
          </Col>

          <Col className="h-100" span={6}>
            <Space className="vh-100" direction="vertical" size={20}>
              {/* <Image
                // style={{ width: "100%", height: "40%" }}
                className="w-100"
                src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
              />
              <Image
                // style={{ width: "100%", height: "40%" }}
                className="w-100"
                src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/blog-post-h6-img2.jpg"
              /> */}
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
              {/* {[0, 1, 2, 3].map((item) => (
                <Image
                  style={{ width: "15rem", height: "7rem" }}
                  className=""
                  src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/previewImage/PowerfulReasons_hero.jpg"
                />
              ))} */}
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
              {/* {[0, 1, 2, 3].map((item) => (
                <Image
                  style={{ width: "6rem", height: "6rem" }}
                  className=""
                  src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
                />
              ))} */}
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

export default Media;
