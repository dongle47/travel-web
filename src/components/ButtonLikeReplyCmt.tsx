import { Button, Space } from "antd";
import React, { useState } from "react";

interface IProps {
  status: -1 | 0 | 1;
}

const ButtonLikeReplyCmt: React.FC<IProps> = ({ status }) => {
  const [newStatus, setNewStatus] = useState(status);

  const handleLike = () => {
    if (newStatus === 1) setNewStatus(0);
    else setNewStatus(1);
  };

  const handleDislike = () => {
    if (newStatus === -1) setNewStatus(0);
    else setNewStatus(-1);
  };
  return (
    <Space>
      {newStatus === 1 ? (
        <Button
          style={{ width: "4.5rem" }}
          type="primary"
          size="small"
          shape="round"
          onClick={handleLike}
        >
          Like
        </Button>
      ) : (
        <Button
          style={{ width: "4.5rem" }}
          type="primary"
          size="small"
          shape="round"
          ghost
          onClick={handleLike}
        >
          Like
        </Button>
      )}
      {newStatus === -1 ? (
        <Button
          style={{ width: "4.5rem" }}
          type="primary"
          size="small"
          shape="round"
          danger
          onClick={handleDislike}
        >
          Dislike
        </Button>
      ) : (
        <Button
          style={{ width: "4.5rem" }}
          type="primary"
          size="small"
          shape="round"
          danger
          ghost
          onClick={handleDislike}
        >
          Dislike
        </Button>
      )}
    </Space>
  );
};

export default ButtonLikeReplyCmt;
