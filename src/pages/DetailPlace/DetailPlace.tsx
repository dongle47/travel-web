import React from "react";
import "./DetailPlace.scss";

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
} from "antd";

import {
  AimOutlined,
  SaveOutlined,
  SearchOutlined,
  EllipsisOutlined,
  LikeTwoTone,
  DislikeTwoTone,
  DislikeOutlined,
  LikeOutlined,
  CommentOutlined,
  ExclamationCircleFilled,
  MessageFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const DetailPlace: React.FC = () => {
  const items = [
    { label: "Trang chính", key: "home" },
    { label: "Giới thiệu", key: "about" },
    { label: "Ảnh", key: "photos" },
    { label: "Video", key: "videos" },
  ];
  return (
    <>
      <Row className="w-100 bg-white border-bottom pdlr-15" justify="center">
        <Row justify="center">
          <img
            alt=""
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/311568354_5608662802555169_5709832402571559746_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=pEQ8f1fnD28AX-5_OvI&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfAsJNxoWutcPwqePlf8C_mXJmOKn1PHjK31KJPl1X8U6A&oe=6361EA20"
          />
        </Row>

        <Row className="w-100 mt-3" justify="space-between" align="middle">
          <Col className="ms-5">
            <Title level={3}>Title</Title>
            <Text type="secondary">subtitle</Text>
          </Col>
          <Col>
            <Button
              className="d-inline-flex align-items-center justify-content-center rounded"
              style={{ width: "18rem", height: "2.5rem" }}
              type="primary"
              icon={<AimOutlined className=" fs-5" />}
            >
              <Text className="fs-5 text-white" strong>
                Check in
              </Text>
            </Button>
          </Col>
        </Row>

        <Divider />

        <Row className="w-100" justify="space-between">
          <Col>
            <Menu
              style={{ width: "25rem" }}
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              items={items}
            />
          </Col>
          <Col>
            <Space>
              <Button
                className="d-inline-flex align-items-center justify-content-center rounded"
                style={{ width: "10rem" }}
                icon={<SaveOutlined />}
              >
                Lưu
              </Button>
              <Button className="rounded " icon={<SearchOutlined />}></Button>
              <Button className="rounded" icon={<EllipsisOutlined />}></Button>
            </Space>
          </Col>
        </Row>
      </Row>

      <div className="row2-detail-place ">
        <Row className="" justify="center">
          <Col style={{ width: "100rem" }} className=" p-3" span={8}>
            {/* giới thiệu */}
            <Row className="bg-white mb-5 p-2 border rounded shadow-sm">
              <Space direction="vertical">
                <Title level={4}>Giới thiệu</Title>

                <Space align="start">
                  <ExclamationCircleFilled className="fs-5" />
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas similique beatae reprehenderit quasi commodi aspernatur
                    ratione minima praesentium. Totam, alias vero?
                    Reprehenderit, repellendus suscipit fuga praesentium aut
                    aperiam tenetur harum.
                  </Text>
                </Space>

                <Space align="start">
                  <MessageFilled className="fs-5" />
                  <Text>Lượt check in</Text>
                </Space>

                <Space align="start">
                  <MessageFilled className="fs-5" />
                  <Text>Lượt đánh giá</Text>
                </Space>
              </Space>
            </Row>
            {/* end giơi thiẹu */}

            {/* photo */}
            <Row className="bg-white mb-5 p-2 rounded border shadow-sm">
              <Space className="w-100" direction="vertical">
                <Row justify="space-between" align="middle">
                  <Title className="m-0" level={4}>
                    Ảnh
                  </Title>
                  <Button type="link">Xem tất cả</Button>
                </Row>
                <Row justify="start">
                  <Image.PreviewGroup>
                    <div className="m-1">
                      <Image
                        height={88}
                        width={88}
                        src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                      />
                    </div>
                    <div className="m-1">
                      <Image
                        height={88}
                        width={88}
                        src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                      />
                    </div>
                    <div className="m-1">
                      <Image
                        height={88}
                        width={88}
                        src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                      />
                    </div>
                    <div className="m-1">
                      <Image
                        height={88}
                        width={88}
                        src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                      />
                    </div>
                    <div className="m-1">
                      <Image
                        height={88}
                        width={88}
                        src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                      />
                    </div>
                    <div className="m-1">
                      <Image
                        height={88}
                        width={88}
                        src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                      />
                    </div>
                  </Image.PreviewGroup>
                </Row>
              </Space>
            </Row>
            {/* end photo */}

            {/* video */}
            <Row className="bg-white mb-5 p-2 rounded border shadow-sm">
              <Space className="w-100" direction="vertical">
                <Row justify="space-between" align="middle">
                  <Title className="m-0" level={4}>
                    Video
                  </Title>
                  <Button type="link">Xem tất cả</Button>
                </Row>
                <Row justify="start">
                  <Image.PreviewGroup>
                    <div className="m-1">
                      <Image
                        height={120}
                        width={120}
                        src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                      />
                    </div>
                  </Image.PreviewGroup>
                </Row>
              </Space>
            </Row>
            {/* end video */}
          </Col>

          <Col span={12}>
            <Row
              style={{ height: "5rem" }}
              className="bg-white mb-3 mt-3 py-2 rounded border shadow-sm "
              justify="space-evenly"
              align="middle"
            >
              <Avatar
                size="large"
                src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
              />
              <Button
                className="rounded"
                style={{
                  width: "25rem",
                  height: "2.5rem",
                  backgroundColor: "#C9CCD1",
                }}
                type="text"
              >
                <Text className="fs-5" strong>
                  Viết đánh giá
                </Text>
              </Button>
            </Row>

            <div className="bg-white p-3 border shadow-sm">
              <Row gutter={10}>
                <Col>
                  <Avatar
                    size="large"
                    src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                  />
                </Col>
                <Col>
                  <Space
                    style={{ fontSize: "0.9rem", lineHeight: "1" }}
                    direction="vertical"
                    size={0}
                  >
                    <Text strong className="m-0">
                      Tên người dùng
                    </Text>
                    <Text style={{ fontSize: "0.8rem" }} type="secondary">
                      ngày đăng
                    </Text>
                  </Space>
                </Col>
              </Row>

              <Row className="mb-3 mt-3">
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam exercitationem voluptas est laborum fugiat aliquid
                  debitis soluta cum, in voluptatibus. Excepturi voluptate nihil
                  praesentium modi dolore? Labore quaerat ullam rem.
                </Text>
              </Row>

              {/* media */}
              <Row className="mb-2">
                <Image.PreviewGroup>
                  <Image
                    height={240}
                    width={240}
                    src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                  />
                  <Image
                    height={240}
                    width={240}
                    src="https://i.annihil.us/u/prod/marvel/i/mg/3/60/6227804f029af/clean.jpg"
                  />
                  <Image
                    height={240}
                    width={240}
                    src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/313418996_5628226030598846_2373029767883782986_n.png?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=-TRGKFfRrVgAX_43RpR&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfCoWiATJNRT5i0NSN_-G377Im9VvoG7YhsDaydN1hLbYA&oe=63643C95"
                  />
                  <Image
                    height={240}
                    width={240}
                    src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/312611914_5628310480590401_4324712743630064791_n.png?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=DUT_HCWZaekAX_oAY2U&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfC5ZP35CrPSyyYNg5vFUktBoOvz6SCl1UbandbQ3BsRjg&oe=6364A11D"
                  />
                </Image.PreviewGroup>
              </Row>
              {/* end media */}
              <Divider
                style={{ backgroundColor: "#c9c9c9" }}
                className=" m-2"
              />

              <Row align="top" justify="space-between">
                <Col>
                  <Button
                    className="d-inline-flex align-items-center justify-content-center"
                    type="text"
                    icon={<LikeTwoTone className="fs-4" />}
                  >
                    145
                  </Button>
                  <Button
                    className="d-inline-flex align-items-center justify-content-center"
                    type="text"
                    icon={<DislikeTwoTone className="fs-4" />}
                  >
                    145
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="d-inline-flex align-items-center justify-content-center"
                    type="text"
                    icon={<CommentOutlined className="fs-4" />}
                  >
                    Trả lời
                  </Button>
                </Col>
              </Row>

              <Divider style={{ backgroundColor: "#c9c9c9" }} className="m-2" />

              {/* write comment */}
              <Row>
                <Col>
                  <Space>
                    <Avatar
                      size="large"
                      src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                    />
                    <Input
                      style={{ width: "25rem" }}
                      className="rounded"
                      placeholder="Viết bình luận..."
                    />
                  </Space>
                </Col>
              </Row>
              {/* end write comment */}

              <Space className="mt-3" direction="vertical">
                <Row>
                  <Col span={3}>
                    <Avatar
                      size="large"
                      src="https://upload.wikimedia.org/wikipedia/vi/0/05/Black_Adam_New_52.jpg"
                    />
                  </Col>
                  <Col span={21}>
                    <Space
                      style={{ fontSize: "1rem", lineHeight: "1" }}
                      direction="vertical"
                      size={0}
                    >
                      <Text strong className="m-0">
                        Tên người dùng
                      </Text>
                      <Text style={{ fontSize: "1rem", width: "5rem" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga quaerat suscipit, autem quos distinctio placeat!
                        Molestias voluptatibus tempore nobis labore nesciunt
                        fugit maiores, eum odit dignissimos placeat cumque
                        laborum soluta.
                      </Text>
                    </Space>
                  </Col>
                </Row>

                <Row className="ms-5">
                  <Button type="text">
                    <Text style={{ fontSize: "0.8rem" }} strong>
                      Thích
                    </Text>
                  </Button>
                  <Button type="text">
                    <Text style={{ fontSize: "0.8rem" }} strong>
                      Không thích
                    </Text>
                  </Button>
                </Row>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DetailPlace;
