import { FC } from "react";
import "./Rating.scss";
import Rating from "@mui/material/Rating";
import css from "classnames";

interface IProps {
  rating?: number;
  feedbackCount?: number;
  size?: "small" | "large";
}

const RatingComponent: FC<IProps> = ({ rating = 4.5, feedbackCount = 108, size = "small" }) => {
  return (
    <div className={css("rating", { ["rating--large"]: size === "large" })}>
      <span className="rating__number">{rating}</span>
      <Rating readOnly value={rating} precision={0.5} max={5} />
      <span className="rating__rating-amount">{`(${feedbackCount})`}</span>
    </div>
  );
};

export default RatingComponent;
