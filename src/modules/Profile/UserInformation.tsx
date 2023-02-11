import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ImageUploading from "react-images-uploading";
import dayjs from "dayjs";
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

import nullAvatar from "../../assets/img/null-avatar.jpg";

const { Title, Text } = Typography;

import type { DatePickerProps, MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authActions, selectUser } from "../Authentication/authSlice";
import profileApi from "../../apis/profileApi";
import uploadApi from "../../apis/uploadApi";

const UserInformation: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [avatarFile, setAvatarFile] = useState<any>([]);

  const [avatarURL, setAvatarURL] = useState<string>(
    user?.avatar ? user?.avatar : ""
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  const onChange = (imageList: any, addUpdateIndex: any) => {
    setAvatarFile(imageList);
  };

  console.log(avatarFile);

  const onFinish = async (values: any) => {
    if (values.date_of_birth)
      values.date_of_birth = dayjs(values.date_of_birth).format("DD/MM/YYYY");
    values.avatar = avatarURL;

    profileApi
      .updateProfile(values)
      .then((res) => {
        toast.success(res.message);
        dispatch(authActions.updateUser(values));
      })
      .catch((err) => {
        toast.error("Cập nhật thất bại");
      });
  };

  const [uploading, setUploading] = useState(false);

  const handleUploadAvatar = () => {
    if (avatarFile.length === 0) {
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

    uploadApi
      .uploadAvatar({ file: avatarFile[0].file, type: "avatar" })
      .then((res) => {
        setAvatarURL(res.data.full_path);
        setIsModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

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
          <Form.Item
            initialValue={user?.full_name}
            name="full_name"
            label={<Text strong>Họ tên</Text>}
          >
            <Input allowClear />
          </Form.Item>

          <Form.Item
            initialValue={
              user?.date_of_birth
                ? dayjs(user?.date_of_birth, "DD/MM/YYYY")
                : null
            }
            name="date_of_birth"
            label={<Text strong>Ngày sinh</Text>}
          >
            <DatePicker className="w-100" format={"DD/MM/YYYY"} />
          </Form.Item>

          <Form.Item
            initialValue={user?.phone === "string" ? "" : user?.phone}
            name="phone"
            label={<Text strong>Số điện thoại</Text>}
          >
            <Input allowClear />
          </Form.Item>

          <Form.Item
            initialValue={user?.email}
            name="email"
            label={<Text strong>Email</Text>}
          >
            <Input allowClear />
          </Form.Item>
        </Form>
      </Col>

      <Col span={12}>
        <Row className="h-100" justify="center" align="middle">
          <Space direction="vertical" align="center">
            <div className="position-relative mb-2">
              <Avatar size={150} src={avatarURL ? avatarURL : nullAvatar} />

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
              onCancel={handleCancelModal}
              footer={null}
            >
              <ImageUploading
                value={avatarFile}
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
