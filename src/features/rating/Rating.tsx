import { FC } from "react";
import { Rating as MuiRating } from "@mui/material";
import css from "classnames";
import "./Rating.scss";

interface IProps {
  rating?: number;
  feedbackCount?: number;
  size?: "small" | "large";
}

const Rating: FC<IProps> = ({ rating = 4.5, feedbackCount = 108, size = "small" }) => {
  return (
    <div className={css("rating", { ["rating--large"]: size === "large" })}>
      <span className="rating__number">{rating}</span>
      <MuiRating readOnly value={rating} precision={0.5} max={5} />
      <span className="rating__rating-amount">{`(${feedbackCount})`}</span>
    </div>
  );
};

export default Rating;
