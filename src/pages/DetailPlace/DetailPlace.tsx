import React, { useState } from "react";
import "./DetailPlace.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import {
  Typography,
  Row,
  Col,
  Card,
  Space,
  Button,
  Divider,
  Menu,
  Avatar,
  Image,
  Input,
  Rate,
  AutoComplete,
  Carousel,
  Modal,
  Upload,
} from "antd";

import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

import Icon, {
  CommentOutlined,
  FullscreenExitOutlined,
  StarOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  StarTwoTone,
  PlayCircleOutlined,
  StarFilled,
  LikeTwoTone,
  DislikeTwoTone,
  CheckOutlined,
  LikeFilled,
  LikeOutlined,
  DislikeOutlined,
  PlusOutlined,
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
    <div style={{ height: "200rem" }} className="primary-font">
      <Row style={{}} className="pdlr-4">
        <Row
          style={{ marginTop: "6rem" }}
          className="bg-img rounded"
          justify="center"
        >
          <Space
            className="layer rounded"
            direction="vertical"
            align="center"
            size={25}
          >
            {/* <i
              style={{ fontSize: "3rem" }}
              className="fa-solid fa-mountain-sun text-white mt-5"
            ></i> */}

            <i
              style={{ fontSize: "3rem" }}
              className="fa-solid fa-umbrella-beach text-white mt-5"
            ></i>

            <div style={{ textAlign: "center", width: "40rem" }}>
              <Text style={{ fontSize: "3rem" }} className="text-white">
                TÊN ĐỊA ĐIỂM
              </Text>
            </div>

            <div
              style={{
                margin: "0 auto",
                textAlign: "center",
                backgroundColor: "white",
                width: "15rem",
                height: "0.4rem",
              }}
            ></div>
            <div style={{ textAlign: "center", width: "40rem" }}>
              <Text style={{ fontSize: "1rem" }} className="text-white" strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                cum animi aperiam recusandae quia consectetur, nobis adipisci
                officiis eaque tenetur est deserunt obcaecati iste optio vitae
                quibusdam sapiente maxime neque.
              </Text>
            </div>

            <Button
              style={{ width: "12rem", height: "2.5rem" }}
              className="mt-3"
            >
              <Text className="" strong>
                READ MORE
              </Text>
            </Button>
          </Space>
        </Row>

        <Row
          style={{ marginTop: "5rem", padding: "0" }}
          justify="center"
          align="middle"
          gutter={100}
        >
          <Col span={9}>
            <Space direction="vertical" size={10}>
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

              <Text className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore id iure maxime repellendus a rem quisquam eum nisi et
                aliquam deserunt quam architecto ducimus magnam, doloribus sint,
                consequatur, nemo ipsam!
              </Text>

              <Text className="fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore id iure maxime repellendus a rem quisquam eum nisi et
              </Text>

              <Button
                style={{ width: "15rem", height: "3rem" }}
                className="bg-black mt-5"
              >
                <Text className="text-white fs-6">Check in</Text>
                <i
                  style={{ width: "1.5rem" }}
                  className="fa-solid fa-arrow-right text-white "
                ></i>
              </Button>
            </Space>
          </Col>

          <Col
            style={{
              backgroundColor: "#FF7424",
              height: "50%",
              width: "9rem",
            }}
            className="p-0 d-flex justify-content-center align-items-center m-0"
          >
            <Space direction="vertical" align="center" size={20}>
              <Row justify="center">
                <Space direction="vertical" align="center" size={3}>
                  <i className="fa-solid fa-location-dot text-white fs-3"></i>
                  <Text className="text-white fw-lighter">Lượt check in</Text>
                </Space>
              </Row>

              <Row justify="center">
                <Space direction="vertical" align="center" size={3}>
                  <CommentOutlined className="text-white fs-3" />
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
              // width={480}
              className="w-100 video-detail"
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

        <Swiper
          loop={true}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              width={500}
              height={250}
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={250}
              src="https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2022/03/202005171129SA19.jpeg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={250}
              src="https://hoangthinhtravel.com/images/hoangthinhtravel.com/2021/11/bai-tam-quy-nhon-1637689113-1301686.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={250}
              src="https://www.icisequynhon.com/wp-content/uploads/2020/05/quynhon-binhdinh.jpg"
            />
          </SwiperSlide>
        </Swiper>

        <div
          style={{
            backgroundColor: "#F7FAFB",
            marginTop: "5rem",
            padding: "2rem 3rem",
          }}
          className="w-100  bg-img-reviews"
        >
          {/* <Row>
            <Title>ĐÁNH GIÁ</Title>
          </Row> */}

          <Space direction="vertical">
            <Title className="m-0">Bình luận và</Title>
            <Title style={{ color: "#FF7424" }}>Đánh giá</Title>
          </Space>

          <Row justify="center" align="middle" gutter={100}>
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

          <Divider style={{ borderTop: "#FF7424" }} className="mt-5" plain>
            <Text style={{ color: "#FF7424" }} className="fs-5" strong>
              Tất cả các bài đánh giá
            </Text>
          </Divider>

          {/* <Row justify="center">
            <Row className="w-50">
              <Space className="w-100" direction="vertical" align="start">
                <Space size={30}>
                  <Avatar
                    size={50}
                    src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                  />
                  <Text className="fs-6" strong>
                    Tên người dùng
                  </Text>
                </Space>

                <Space direction="vertical" size={10}>
                  <Rate
                    style={{ color: "#FF7424" }}
                    disabled
                    defaultValue={2}
                  />

                  <Space align="start" size={15}>
                    <i
                      style={{ color: "#FF7424" }}
                      className="fa-solid fa-quote-left fs-1"
                    ></i>

                    <Text className="fs-6" strong>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed nesciunt officiis provident similique reprehenderit
                      optio nihil sequi, corporis neque earum voluptatum ratione
                      pariatur deserunt placeat tempora rem a, modi ipsum!
                    </Text>
                  </Space>

                  <Row className="ms-5">
                    <Image.PreviewGroup>
                      {[0, 1, 2].map((item) => (
                        <div className="me-2">
                          <Image
                            height={70}
                            width={70}
                            src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
                          />
                        </div>
                      ))}
                    </Image.PreviewGroup>
                  </Row>
                </Space>
              </Space>

              <Space className="w-100 d-flex justify-content-start ms-5 mt-3">
                <Button
                  className="d-flex align-items-center justify-content-center"
                  type="primary"
                  style={{
                    width: "5rem",
                    height: "2rem",
                    // backgroundColor: "#FF7424",
                  }}
                  icon={<LikeOutlined className="text-primary" />}
                  ghost
                >
                  5
                </Button>
                <Button
                  className="d-flex align-items-center justify-content-center"
                  type="primary"
                  style={{
                    width: "5rem",
                    height: "2rem",
                    // backgroundColor: "#FF7424",
                  }}
                  icon={<DislikeOutlined className="text-danger" />}
                  danger
                  ghost
                >
                  2
                </Button>
              </Space>
            </Row>
          </Row> */}

          <Row justify="start">
            <Row style={{ marginLeft: "8rem" }} className="w-75">
              <Row className="w-100" align="middle">
                <Space size={25}>
                  <Avatar
                    size={64}
                    src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                  />
                  <Text className="fs-5 text-center" strong>
                    Tên người dùng
                  </Text>
                </Space>
              </Row>

              <Row className="mt-2">
                <Rate
                  style={{ color: "#FF7424" }}
                  className="fs-5"
                  disabled
                  allowHalf={true}
                  defaultValue={2.5}
                />
              </Row>

              <Row className="mt-3">
                <Col span={2}>
                  <i
                    style={{ color: "#FF7424" }}
                    className="fa-solid fa-quote-left fs-1"
                  ></i>
                </Col>
                <Col span={22}>
                  <Row>
                    <Text className="fs-6" strong>
                      A Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed nesciunt officiis provident similique reprehenderit
                      optio nihil sequi, corporis neque earum voluptatum ratione
                      pariatur deserunt placeat tempora rem a, modi ipsum!
                    </Text>
                  </Row>

                  <Row className="mt-3">
                    <Image.PreviewGroup>
                      {[0, 1, 2].map((item) => (
                        <div className="me-2">
                          <Image
                            height={100}
                            width={100}
                            src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
                          />
                        </div>
                      ))}
                    </Image.PreviewGroup>
                  </Row>

                  <Row className="mt-3" gutter={100}>
                    <Col>
                      <Space className="w-100 d-flex justify-content-start">
                        <Button
                          className="d-flex align-items-center justify-content-center"
                          type="primary"
                          style={{
                            width: "5rem",
                            height: "2rem",
                            // backgroundColor: "#FF7424",
                          }}
                          icon={<LikeOutlined className="text-primary" />}
                          ghost
                        >
                          5
                        </Button>
                        <Button
                          className="d-flex align-items-center justify-content-center"
                          type="primary"
                          style={{
                            width: "5rem",
                            height: "2rem",
                            // backgroundColor: "#FF7424",
                          }}
                          icon={<DislikeOutlined className="text-danger" />}
                          danger
                          ghost
                        >
                          2
                        </Button>
                      </Space>
                    </Col>
                    <Col>
                      <Button
                        className="d-flex align-items-center"
                        type="text"
                        icon={<CommentOutlined className="fs-6" />}
                      >
                        <Text strong>Phản hồi</Text>
                      </Button>
                    </Col>
                  </Row>

                  <div>
                    {[0, 1, 2].map((item) => (
                      <Row style={{ marginLeft: "0" }} className="w-75 mt-4">
                        <Row className="w-100" align="middle">
                          <Space size={25}>
                            <Avatar
                              size={40}
                              src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                            />
                            <Text
                              style={{ fontSize: "0.9rem" }}
                              className="text-center"
                              strong
                            >
                              Tên người dùng
                            </Text>
                          </Space>
                        </Row>

                        <Row className="mt-2">
                          <Col span={2}>
                            <i
                              style={{ color: "#FF7424" }}
                              className="fa-solid fa-quote-left fs-3"
                            ></i>
                          </Col>
                          <Col span={22}>
                            <Row>
                              <Text
                                style={{ fontSize: "0.8rem" }}
                                className=""
                                strong
                              >
                                A Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sed nesciunt officiis
                                provident similique reprehenderit optio nihil
                                sequi, corporis neque earum voluptatum ratione
                                pariatur deserunt placeat tempora rem a, modi
                                ipsum!
                              </Text>
                            </Row>

                            {/* <Row className="mt-3">
                          <Image.PreviewGroup>
                            {[0, 1, 2].map((item) => (
                              <div className="me-2">
                                <Image
                                  height={100}
                                  width={100}
                                  src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
                                />
                              </div>
                            ))}
                          </Image.PreviewGroup>
                        </Row> */}

                            <Row className="mt-1 ms-1" gutter={100}>
                              <Space className="w-100 d-flex justify-content-start">
                                <Button
                                  className="d-flex align-items-center justify-content-center"
                                  type="text"
                                  style={{
                                    width: "100%",
                                    height: "1.5rem",
                                    // backgroundColor: "#FF7424",
                                  }}
                                  icon={
                                    <LikeOutlined className="text-primary" />
                                  }
                                  ghost
                                >
                                  5
                                </Button>
                                <Button
                                  className="d-flex align-items-center justify-content-center"
                                  type="text"
                                  style={{
                                    width: "100%",
                                    height: "1.5rem",
                                    // backgroundColor: "#FF7424",
                                  }}
                                  icon={
                                    <DislikeOutlined className="text-danger" />
                                  }
                                  danger
                                  ghost
                                >
                                  2
                                </Button>
                              </Space>
                            </Row>
                          </Col>
                        </Row>
                      </Row>
                    ))}
                  </div>
                </Col>
              </Row>
            </Row>
          </Row>

          {/* {[0, 1, 2].map((item) => (
            <Row
              style={{ marginTop: "4rem" }}
              className="bg-white p-4"
              justify="start"
              align="middle"
            >
              <Col span={10} className="">
                <Space className="d-flex" direction="vertical" align="center">
                  <Avatar
                    size={100}
                    src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                  />
                  <Text className="fs-3" strong>
                    Tên người dùng
                  </Text>
                  <Text className="fs-4" type="secondary">
                    Ngày đăng
                  </Text>
                </Space>
              </Col>

              <Col className="" span={14}>
                <Space className="d-flex " direction="vertical" size={5}>
                  <Row>
                    <Space>
                      <StarFilled className="fs-3 text-warning" />
                      <StarFilled className="fs-3 text-warning" />
                      <StarFilled className="fs-3 text-warning" />
                      <StarOutlined className="fs-3" />
                      <StarOutlined className="fs-3" />
                    </Space>
                  </Row>

                  <Row>
                    <Text className="fs-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae hic quis facilis quae perspiciatis, ullam sint
                      aut autem molestias! Natus, incidunt impedit? Soluta odit
                      sequi nemo possimus laudantium fugit? Animi.
                    </Text>
                  </Row>

                  <Row>
                    <Image.PreviewGroup>
                      {[0, 1, 2].map((item) => (
                        <div className="me-3">
                          <Image
                            height={100}
                            width={100}
                            src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
                          />
                        </div>
                      ))}
                    </Image.PreviewGroup>
                  </Row>

                  <Row className="mt-1">
                    <Button
                      className="bg-white text-primary me-3"
                      type="text"
                      icon={<LikeTwoTone className="fs-2" />}
                    >
                      5
                    </Button>
                    <Button
                      className="bg-white text-danger"
                      type="text"
                      danger
                      icon={
                        <DislikeTwoTone
                          className="fs-2"
                          twoToneColor="#FF0000"
                        />
                      }
                    >
                      1
                    </Button>
                  </Row>
                </Space>
              </Col>
            </Row>
          ))} */}

          {/* {[0, 1, 2, 3, 4].map((item) => (
            <div style={{ marginTop: "5rem" }} className="">
              <Row justify="start" align="top">
                <Col span={5}>
                  <Space direction="vertical" align="center">
                    <Avatar
                      size={60}
                      src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
                    />
                    <Space direction="vertical">
                      <Text strong>Tên người dùng</Text>
                      <Text type="secondary">Tên người dùng</Text>
                    </Space>
                  </Space>
                </Col>

                <Col span={18}>
                  <Row>
                    <Rate disabled defaultValue={2} />
                  </Row>

                  <Row>
                    <Text className="fs-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae hic quis facilis quae perspiciatis, ullam sint
                      aut autem molestias! Natus, incidunt impedit? Soluta odit
                      sequi nemo possimus laudantium fugit? Animi.
                    </Text>
                  </Row>

                  <Row>
                    <Image.PreviewGroup>
                      <div className="me-3">
                        <Image
                          height={150}
                          width={150}
                          src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg"
                        />
                      </div>
                      <div>
                        <Image
                          height={150}
                          width={150}
                          src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
                        />
                      </div>
                    </Image.PreviewGroup>
                  </Row>

                  <Row className="mt-4">
                    <Button
                      className="bg-white text-primary me-3"
                      type="primary"
                    >
                      Like (50)
                    </Button>
                    <Button
                      className="bg-white text-danger"
                      type="primary"
                      danger
                    >
                      Dislike (3)
                    </Button>
                  </Row>
                </Col>
              </Row>
            </div>
          ))} */}
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
    </div>
  );
};

export default DetailPlace;
