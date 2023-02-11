import React, { useEffect, useState } from "react";
import "./DetailPlace.scss";
import { useSelector } from "react-redux";
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
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { selectUser } from "../Authentication/authSlice";
import uploadApi from "../../apis/uploadApi";

const { Title, Text } = Typography;

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const Review: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [rate, setRate] = useState(0);

  const [loading, setLoading] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [valueReview, setValueReview] = useState("");

  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: "-4",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "1000",
    //   name: "rose",
    //   status: "done",
    //   url: "https://travel-api.huytx.com/stag/upload-service/files/avatar/ce508995-a9e4-11ed-98b0-0242c0a80002.jpeg",
    // },
    // {
    //   uid: "-5",
    //   name: "image.png",
    //   status: "error",
    // },
  ]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const showModal = () => {
    setOpenReview(true);
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

  const handleChangeImage: UploadProps["onChange"] = (
    //   {
    //   fileList: newFileList,
    // }
    value: any
  ) => {
    const fileObj = value.file.originFileObj;
    uploadApi
      .uploadAvatar({ file: fileObj, type: "review" })
      .then((res) => {
        const resImage = res.data;
        const file: UploadFile = {
          uid: resImage.id,
          name: resImage.name,
          status: "done",
          url: resImage.full_path,
        };
        setFileList((prev) => [...prev, file]);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setOpenReview(false);
    // }, 3000);
    console.log("rate", rate);
    console.log("content", valueReview);
    console.log(
      "image list",
      fileList.map((item) => item.url)
    );
  };

  const handleCancel = () => {
    setOpenReview(false);
  };

  const [statusCheckIn, setStatusCheckIn] = useState(-1);

  const historyCheckInId: any = ["sdad", "dsada"];

  const { id } = useParams();

  useEffect(() => {
    if (user) {
      if (historyCheckInId.includes(id)) setStatusCheckIn(1);
      else setStatusCheckIn(1);
    } else {
      setStatusCheckIn(-1);
    }
  }, []);

  return (
    <Row className="m-0 mt-5" justify="center" align="middle" gutter={100}>
      <Space direction="vertical" align="center">
        <Text className="fs-1 text-center" strong>
          {statusCheckIn === -1 && "Bạn chưa đăng nhập"}{" "}
          {statusCheckIn === 0 && "Bạn chưa check in địa điểm này"}{" "}
          {statusCheckIn === 1 && "Bạn đã check in"}{" "}
          <CheckOutlined className="text-success fs-3 font-weight-bold" />
        </Text>

        <Text className="fs-1" strong>
          {statusCheckIn === -1 && (
            <>
              Hãy <span style={{ color: "#FF7424" }}>đăng nhập</span> để có thể
              check in và đánh giá
            </>
          )}
          {statusCheckIn === 0 && (
            <>
              Hãy <span style={{ color: "#FF7424" }}>check in</span> ngay
            </>
          )}
          {statusCheckIn === 1 && (
            <>
              Hãy <span style={{ color: "#FF7424" }}>đánh giá</span> ngay
            </>
          )}
        </Text>

        {statusCheckIn === -1 && (
          <Button
            className="border-0 mt-3 btn-rating"
            type="primary"
            onClick={() => navigate("/login")}
          >
            <Text className="text-white fs-5" strong>
              Đăng nhập
            </Text>
          </Button>
        )}
        {statusCheckIn === 0 && (
          <Button
            className="border-0 mt-3 btn-rating"
            type="primary"
            onClick={() => navigate("/")}
          >
            <Text className="text-white fs-5" strong>
              Check in
            </Text>
          </Button>
        )}
        {statusCheckIn === 1 && (
          <Button
            className="border-0 mt-3 btn-rating"
            type="primary"
            onClick={showModal}
          >
            <Text className="text-white fs-5" strong>
              Đánh giá
            </Text>
          </Button>
        )}
      </Space>

      <Modal
        open={openReview}
        title="Đánh giá"
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Thoát
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleSubmit}
          >
            Xác nhận
          </Button>,
        ]}
      >
        <Space className="w-100" direction="vertical" size={15}>
          <Rate allowHalf onChange={setRate} value={rate} />

          <TextArea
            value={valueReview}
            onChange={(e) => setValueReview(e.target.value)}
            placeholder="Viết bình luận"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />

          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChangeImage}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>

          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancelUpload}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </Space>
      </Modal>
    </Row>
  );
};

export default Review;
