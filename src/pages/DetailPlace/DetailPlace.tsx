import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPlace.scss";

import { Header, Footer, Comment } from "../../components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactReadMoreReadLess from "react-read-more-read-less";

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
  Modal,
  Upload,
} from "antd";

import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

import Icon, {
  CommentOutlined,
  StarOutlined,
  PlayCircleOutlined,
  StarFilled,
  CheckOutlined,
  PlusOutlined,
  EllipsisOutlined,
  MessageOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import ggMapIcon from "../../assets/img/Google_Maps.svg.png";
import { url } from "inspector";
import TextArea from "antd/lib/input/TextArea";

const { Title, Text } = Typography;

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });



const DetailPlace: React.FC = () => {
  const {id} = useParams()
  console.log(id)

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);

  const handleCancelUpload = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
                HIKING & TREKKING
              </Text>
              <Title
                style={{ fontSize: "2.8rem" }}
                className="text-white fw-light m-0 mt-4"
              >
                Hike the amazing mountains
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
                Tên địa điểm
              </Text>
              <Text
                style={{ fontSize: "1.2rem", color: "#FF7424" }}
                className="mt-0"
                strong
              >
                Loại địa điểm
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
            <Space
              className="trapezoid pt-5"
              direction="vertical"
              align="center"
              size={20}
            >
              <Row className="mt-3" justify="center">
                <Space direction="vertical" align="center" size={3}>
                  <EnvironmentOutlined className="text-white fs-3" />
                  <Text className="text-white fw-lighter">Lượt check in</Text>
                </Space>
              </Row>

              <Row justify="center">
                <Space direction="vertical" align="center" size={3}>
                  <MessageOutlined className="text-white fs-3" />
                  <Text className="text-white fw-lighter">Lượt đánh giá</Text>
                </Space>
              </Row>

              <Row justify="center">
                <Space direction="vertical" align="center" size={3}>
                  <StarOutlined className="text-white fs-3" />
                  <Text className="text-white fw-lighter">Số sao</Text>
                </Space>
              </Row>
            </Space>
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

            <Col className="h-100" span={4}>
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
            <Col>
              <img
                className="rounded-circle"
                height={500}
                width={400}
                alt=""
                src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/previewImage/PowerfulReasons_hero.jpg"
              />
            </Col>
            <Col>
              <Space direction="vertical" align="center">
                <Text className="fs-3 text-center" strong>
                  Bạn đã check in{" "}
                  <CheckOutlined className="text-success fs-3 font-weight-bold" />
                </Text>
                <Text className="fs-3" strong>
                  Hãy <span style={{ color: "#FF7424" }}>đánh giá</span> ngay
                </Text>
                <Button
                  style={{
                    backgroundColor: "#FF7424",
                    width: "10rem",
                    height: "3rem",
                  }}
                  className="border-0 mt-3"
                  type="primary"
                  onClick={showModal}
                >
                  <Text className="text-white" strong>
                    Đánh giá
                  </Text>
                </Button>

                <Modal
                  open={open}
                  title="Đánh giá"
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="back" onClick={handleCancel}>
                      Thoát
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      loading={loading}
                      onClick={handleOk}
                    >
                      Xác nhận
                    </Button>,
                  ]}
                >
                  <Space direction="vertical" size={15}>
                    <Rate allowHalf defaultValue={2.5} />
                    <TextArea
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Viết bình luận"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />

                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>

                    <Modal
                      open={previewOpen}
                      title={previewTitle}
                      footer={null}
                      onCancel={handleCancelUpload}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage}
                      />
                    </Modal>
                  </Space>
                </Modal>
              </Space>
            </Col>
          </Row>

          <Divider style={{ borderTop: "#FF7424" }} className="mt-5 mb-5" plain>
            <Text style={{ color: "#FF7424" }} className="fs-5" strong>
              Tất cả các bài đánh giá
            </Text>
          </Divider>

          <Row className="w-100" justify="center">
            <Comment />

            <Row
              style={{ width: "75%", marginBottom: "5rem", marginLeft: "9rem" }}
              className=""
              gutter={20}
            >
              <Col span={1}>
                <EllipsisOutlined
                  style={{ marginTop: "3.5rem" }}
                  className="fs-5"
                />
              </Col>

              <Col className="d-flex justify-content-center" span={3}>
                <Space className="" direction="vertical">
                  <Button
                    style={{ width: "5.5rem", marginTop: "3.5rem" }}
                    type="primary"
                    size="small"
                    shape="round"
                    ghost
                  >
                    Like
                  </Button>
                  <Button
                    style={{ width: "5.5rem" }}
                    type="primary"
                    size="small"
                    shape="round"
                    ghost
                    danger
                  >
                    Dislike
                  </Button>

                  <Button
                    style={{ width: "5.5rem" }}
                    className="mt-1 d-flex align-items-center justify-content-center"
                    type="text"
                    size="large"
                    icon={<CommentOutlined className="fs-4 text-secondary" />}
                  >
                    <Text
                      style={{ fontSize: "0.9rem" }}
                      className="text-secondary"
                    >
                      Trả lời
                    </Text>
                  </Button>
                </Space>
              </Col>

              <Col span={13}>
                <Row className="mb-1" justify="end">
                  <Space size={3}>
                    <StarFilled
                      style={{ color: "#292D33", fontSize: "1.2rem" }}
                    />
                    <StarFilled
                      style={{ color: "#292D33", fontSize: "1.2rem" }}
                    />
                    <StarFilled
                      style={{ color: "#292D33", fontSize: "1.2rem" }}
                    />
                    <StarFilled
                      style={{ color: "#E0E0E3", fontSize: "1.2rem" }}
                    />
                    <StarFilled
                      style={{ color: "#E0E0E3", fontSize: "1.2rem" }}
                    />
                  </Space>
                </Row>

                <Row className="mb-1" justify="end">
                  <Text strong>Highly Recommended Coffee</Text>
                </Row>

                <Row className="mb-1 text-secondary text-end" justify="end">
                  <ReactReadMoreReadLess
                    charLimit={190}
                    readMoreText={
                      <Text style={{ color: "#5449A3" }} strong>
                        Xem thêm
                      </Text>
                    }
                    readLessText={
                      <Text style={{ color: "#5449A3" }} strong>
                        Thu gọn
                      </Text>
                    }
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cumque, debitis corrupti. Reprehenderit ullam modi excepturi
                    eaque dolorum. Dolorum sint asperiores ratione repellat
                    fugit quam dignissimos quibusdam. Ut, saepe? Dicta,
                    laudantium.
                  </ReactReadMoreReadLess>
                </Row>

                <Image.PreviewGroup>
                  <Space className="d-flex justify-content-end">
                    {[0, 1, 2].map((item) => (
                      <Image
                        style={{ marginRight: "1rem" }}
                        width={120}
                        height={120}
                        src="https://image.thanhnien.vn/w1024/Uploaded/2022/kbfluaa/2021_11_02/qn-mua-may-7180.jpeg"
                      />
                    ))}
                  </Space>
                </Image.PreviewGroup>

                {/* trả lời */}
                <div>
                  <Row
                    style={{}}
                    className="mt-3"
                    justify="end"
                    align="top"
                    gutter={10}
                  >
                    <Col span={21}>
                      <Row
                        className="mb-2"
                        gutter={15}
                        justify="end"
                        align="middle"
                      >
                        <Col>
                          <Space direction="vertical" size={0}>
                            <Text style={{ fontSize: "0.8rem" }} strong>
                              Tên người dùng
                            </Text>
                            <Text
                              style={{ fontSize: "0.8rem" }}
                              className="text-secondary m-0"
                            >
                              Ngày đăng
                            </Text>
                          </Space>
                        </Col>
                        <Col>
                          <Avatar
                            size={40}
                            src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta-1200x900.jpeg"
                          />
                        </Col>
                      </Row>

                      <Row
                        style={{ fontSize: "0.8rem" }}
                        className="mb-2 text-secondary text-end"
                        justify="end"
                      >
                        <ReactReadMoreReadLess
                          charLimit={150}
                          readMoreText={
                            <Text style={{ color: "#5449A3" }} strong>
                              Xem thêm
                            </Text>
                          }
                          readLessText={
                            <Text style={{ color: "#5449A3" }} strong>
                              Thu gọn
                            </Text>
                          }
                        >
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Cumque, debitis corrupti. Reprehenderit ullam
                          modi excepturi eaque dolorum. Dolorum sint asperiores
                          ratione repellat fugit quam dignissimos quibusdam. Ut,
                          saepe? Dicta, laudantium.
                        </ReactReadMoreReadLess>
                      </Row>

                      <Row className="" justify="end">
                        <Space>
                          <Button
                            style={{ width: "5rem" }}
                            type="primary"
                            size="small"
                            shape="round"
                            ghost
                          >
                            Like
                          </Button>
                          <Button
                            style={{ width: "5rem" }}
                            type="primary"
                            size="small"
                            shape="round"
                            ghost
                            danger
                          >
                            Dislike
                          </Button>
                        </Space>
                      </Row>
                    </Col>

                    <Col span={3}>
                      <Text
                        style={{
                          color: "#FD665E",
                          fontSize: "5rem",
                          lineHeight: "5rem",
                        }}
                      >
                        ”
                      </Text>
                    </Col>
                  </Row>
                </div>
                {/* end trả lời */}
              </Col>

              <Col span={6}>
                <Row gutter={10} align="middle">
                  <Col>
                    <Space direction="vertical" size={0} align="end">
                      <Text strong>Tên người dùng</Text>
                      <Text className="text-secondary">Ngày đăng</Text>
                    </Space>
                  </Col>
                  <Col>
                    <Avatar
                      size={50}
                      src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta-1200x900.jpeg"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
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
