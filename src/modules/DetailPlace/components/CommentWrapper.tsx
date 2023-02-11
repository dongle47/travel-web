import { Button, Row, Typography } from "antd";
import * as React from "react";
import Comment from "./Comment";

const { Title, Text } = Typography;

// export interface ICommentWrapperProps {
// }

export default function CommentWrapper(props: any) {
  return (
    <div>
      <Row className="w-100" justify="center">
        <Comment />
      </Row>

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
    </div>
  );
}
