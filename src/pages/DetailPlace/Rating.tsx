import React, { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Space,
  Button,
  Image,
  Rate,
  Modal,
  Upload,
} from "antd";

import Icon, { CheckOutlined, PlusOutlined } from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactReadMoreReadLess from "react-read-more-read-less";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import TextArea from "antd/lib/input/TextArea";

const { Title, Text } = Typography;

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const Rating: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const showModal = () => {
    setOpen(true);
  };

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
  );
};

export default Rating;
