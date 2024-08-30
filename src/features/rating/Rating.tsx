import { FC } from "react";
import cn from "classnames";

import { Stack, Typography, Rating as MuiRating } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";

import "./Rating.scss";

interface RatingProps {
  rating: number;
  reviewCount?: number;
  max?: number;
  precision?: number;
  size?: "small" | "large";
}

const Rating: FC<RatingProps> = ({ rating, reviewCount, max = 5, precision = 0.5, size }) => {
  const sizeModification = cn({
    "rating--large": size === "large",
  });

  const classnames = cn("rating", sizeModification);
  return (
    <Stack direction="row" alignItems="center" gap="4px" className={classnames}>
      <Typography component="span" color={XlnteeColors.YellowColor} className="rating__count">
        {rating}
      </Typography>
      <MuiRating
        readOnly
        color={XlnteeColors.YellowColor}
        value={rating}
        precision={precision}
        max={max}
        size={size}
        className="rating__list"
      />
      {reviewCount && (
        <Typography
          component="span"
          fontWeight={300}
          color={XlnteeColors.GrayColor600}
          className="rating__review-count"
        >{`(${reviewCount})`}</Typography>
      )}
    </Stack>
  );
};

export default Rating;
