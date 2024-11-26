import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button, Stack, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Rating } from "src/features";

import "./StudentCourseCard.scss";

type StudentCourseCardProps = {
  id: string;
  image: string;
  title: string;
  date: string;
  rating?: number;
  reviews?: number;
  discount?: number;
  price: number;
  newPrice?: number;
  href: string;
};

const StudentCourseCard: FC<StudentCourseCardProps> = ({
  image,
  title,
  date,
  price,
  newPrice,
  discount,
  rating = 0,
  reviews = 0,
  href
}) => {
  const { t } = useTranslation("common");

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function onToggleFavorite(): void {
    setIsFavorite((prev) => !prev);
  }

  return (
    <Box className="student-course-card">
      <Box className="student-course-card__image">
        <img src={image} alt={title} />
        <Link to={href} className="student-course-card__link" />
      </Box>
      <Box className="student-course-card__body">
        <Typography variant="body2" className="student-course-card__title" mb="10px">
          <Link to={href}>{title}</Link>
        </Typography>
        <Stack direction="column" gap="20px" mb="20px">
          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="10px">
            <Box className="student-course-card__date">{date}</Box>
            <Rating readOnly value={rating} reviewCount={reviews} size="small" />
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="10px">
            <Box className="student-course-card__price">
              ${newPrice && <>{newPrice} /</>}
              <s>{price}</s>
            </Box>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" gap="10px">
              {discount && <Box className="student-course-card__discount">-{discount}%</Box>}
              <Button className="student-course-card__favorite-toggler" onClick={onToggleFavorite}>
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" gap="10px" flexWrap="wrap">
          <Button variant="black-outline" size="small" className="student-course-card__action">
            {t("preview")}
          </Button>
          <Button variant="contained" size="small" className="student-course-card__action">
            {t("buy-now")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default StudentCourseCard;
