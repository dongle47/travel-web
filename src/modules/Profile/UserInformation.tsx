import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ImageUploading from "react-images-uploading";

import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

import type { DatePickerProps, MenuProps } from "antd";
import { useAppSelector } from "../../hooks";
import { selectUser } from "../Authentication/authSlice";

const UserInformation: React.FC = () => {
  const [image, setImage] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish = async (values: any) => {
    console.log(values);
  };
  const [uploading, setUploading] = useState(false);

  const handleUploadAvatar = () => {
    if (image.length === 0) {
      toast.warning("Vui lòng chọn ảnh");
      return;
    }
    if (uploading) {
      toast.warning(
        "Hình ảnh đang được cập nhật, vui lòng không thao tác quá nhiều lần"
      );
      return;
    }
    setUploading(true);
  };

  const user = useAppSelector(selectUser);

  return (
    <Row className="w-100" justify="start">
      <Col span={12}>
        <Form
          id="info-form"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 22 }}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item name="fullName" label={<Text strong>Họ tên</Text>}>
            <Input defaultValue={user?.full_name} allowClear />
          </Form.Item>

          <Form.Item name="sex" label={<Text strong>Giới tính</Text>}>
            <Radio.Group>
              <Radio className="text-center" value="male">
                Nam
              </Radio>
              <Radio className="text-center" value="female">
                Nữ
              </Radio>
              <Radio className="text-center" value="other">
                Khác
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="dateBirth" label={<Text strong>Ngày sinh</Text>}>
            <DatePicker className="w-100" />
          </Form.Item>

          <Form.Item name="phone" label={<Text strong>Số điện thoại</Text>}>
            <Input defaultValue={user?.phone} allowClear />
          </Form.Item>

          <Form.Item name="email" label={<Text strong>Email</Text>}>
            <Input defaultValue={user?.email} allowClear />
          </Form.Item>
        </Form>
      </Col>

      <Col span={12}>
        <Row className="h-100" justify="center" align="middle">
          <Space direction="vertical" align="center">
            <div className="position-relative mb-2">
              <Avatar
                size={150}
                src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Vegeta.jpeg"
              />
              <Button
                style={{ right: "1rem" }}
                className="position-absolute bottom-0"
                type="primary"
                shape="circle"
                size="small"
                icon={<PlusOutlined className="text-white" />}
                onClick={showModal}
              />
            </div>
            <Modal
              style={{ top: "8%" }}
              title="Cập nhật ảnh đại diện"
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null}
            >
              <ImageUploading
                value={image}
                onChange={onChange}
                dataURLKey="data_url"
                acceptType={["jpg"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="upload__image-wrapper">
                    {imageList.length === 0 ? (
                      <Row
                        style={{
                          width: "100%",
                          height: "30rem",
                          border: "2px dashed grey",
                          borderRadius: "5px",
                        }}
                        justify="center"
                        align="middle"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <Text
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "blue",
                          }}
                        >
                          Nhấn để chọn hoặc kéo thả hình ảnh vào khung này.
                        </Text>
                      </Row>
                    ) : (
                      <Row
                        // key={i}
                        style={{
                          width: "100%",
                          height: "30rem",
                          borderRadius: "5px",
                        }}
                        className="image-item"
                      >
                        <img
                          style={{
                            width: "25rem",
                            height: "25rem",
                            alignSelf: "center",
                          }}
                          src={imageList[0].data_url}
                          alt=""
                        />
                        <Space className="image-item__btn-wrapper" size={30}>
                          <Button onClick={() => onImageRemove(0)}>
                            Hủy bỏ
                          </Button>
                          <Button type="primary" onClick={handleUploadAvatar}>
                            {uploading} Lưu thay đổi
                          </Button>
                        </Space>
                      </Row>
                    )}
                  </div>
                )}
              </ImageUploading>
            </Modal>

            <Button
              style={{
                backgroundColor: "#FD7E14",
                width: "8rem",
                height: "2.5rem",
              }}
              className="text-white rounded"
              form="info-form"
              htmlType="submit"
            >
              <Text style={{ fontSize: "0.8rem" }} className="text-white">
                LƯU THAY ĐỔI
              </Text>
            </Button>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default UserInformation;
