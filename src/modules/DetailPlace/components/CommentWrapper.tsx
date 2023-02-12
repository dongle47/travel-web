import { Button, Row, Typography } from "antd";
import * as React from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { Review } from "../../../models/review";
import reviewApi from "../../../apis/reviewApi";
import { FastBackwardFilled, LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const { Title, Text } = Typography;
// export interface ICommentWrapperProps {
// }
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function CommentWrapper(props: any) {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);

  const [listCmt, setListCmt] = React.useState<Review[]>([]);

  const [page, setPage] = React.useState(1);

  const [fullReview, setFullReview] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    if (id) {
      reviewApi
        .getReviews(id, { page: page, limit: 5 })
        .then((res) => {
          setListCmt((prev: any) => [...prev, ...res.data.rows]);

          if (res.data.page === res.data.total_pages) setFullReview(true);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
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
            review_img={item.review_img ? item.review_img : []}
            created_at={item.created_at}
          />
        ))}
      </Row>

      <Row className="w-100 mt-3" justify="center" gutter={25}>
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
          <Spin className="mr-2" spinning={loading} />{" "}
          {/* <Spin indicator={antIcon} /> */}
          <Text className="text-white fs-6" strong>
            {fullReview ? "Đã hết đánh giá" : "Xem thêm"}
          </Text>
        </Button>
      </Row>
    </div>
  );
}
