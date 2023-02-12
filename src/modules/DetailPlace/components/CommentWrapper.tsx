import { Button, Row, Typography } from "antd";
import * as React from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { Review } from "../../../models/review";
import reviewApi from "../../../apis/reviewApi";

const { Title, Text } = Typography;

// export interface ICommentWrapperProps {
// }

export default function CommentWrapper(props: any) {
  const { id } = useParams();
  const [listCmt, setListCmt] = React.useState<Review[]>([]);

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    if (id) {
      reviewApi
        .getReviews(id, { page: page, limit: 5 })
        .then((res) => {
          setListCmt(res.data.rows);
        })
        .catch((err) => console.log(err));
    }
  }, [page]);

  return (
    <div>
      <Row className="w-100" justify="center">
        {/* <Comment avatar="" full_name="" /> */}
        {listCmt.map((item) => (
          <Comment
            avatar={item.user.avatar}
            full_name={item.user.full_name}
            rate={item.rate}
            description={item.description}
            review_img={item.review_img}
            created_at={item.created_at}
          />
        ))}
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
          onClick={() => setPage((prev) => prev + 1)}
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
