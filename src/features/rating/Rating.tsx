import { FC, useEffect, useState } from "react";
import cn from "classnames";

import { Stack, Typography, Rating as MuiRating, RatingProps as MuiRatingProps } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { XlnteeColors } from "src/shared/themes/colors";

import "./Rating.scss";

type RatingProps = MuiRatingProps & {
  reviewCount?: number;
  showRating?: boolean;
  max?: number;
  precision?: number;
  typeIcon?: "outline" | "contained";
};

const Rating: FC<RatingProps> = ({
  reviewCount = 0,
  showRating = true,
  max = 5,
  typeIcon = "outline",
  size,
  value,
  ...rest
}) => {
  const [valueRating, setValueRating] = useState<number | null | undefined>(null);
  const sizeModification = cn({
    "rating--medium": size === "medium",
    "rating--large": size === "large"
  });

  useEffect(() => {
    setValueRating(value);
  }, [value]);

  const classnames = cn("rating", sizeModification);
  return (
    <Stack direction="row" alignItems="center" gap="4px" className={classnames}>
      {showRating && (
        <Typography variant="caption" color={XlnteeColors.YellowColor} className="rating__count">
          {valueRating}
        </Typography>
      )}
      <MuiRating
        color={XlnteeColors.YellowColor}
        value={valueRating}
        max={max}
        size={size}
        className="rating__list"
        emptyIcon={typeIcon === "outline" ? <StarBorderIcon /> : <StarIcon />}
        {...rest}
      />
      {reviewCount ? (
        <Typography
          fontWeight={300}
          variant="caption"
          color={XlnteeColors.GrayColor600}
          className="rating__review-count"
        >
          ({`${reviewCount}`})
        </Typography>
      ) : null}
    </Stack>
  );
};

export default Rating;
