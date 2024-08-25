import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Rating } from "src/features";
import Price from "../../legacy/price/Price";

import courseImgPath from "./temp-images/course-img.png";
import courseImgLargePath from "./temp-images/course-img-large.png";
import teacherLogoImgPath from "./temp-images/teacher-logo.png";

import "./CourseCard.scss";

interface IProps {
  title?: string;
  size?: "small" | "large";
  courseImg?: string;
  teacherLogoImg?: string;
  teacherName?: string;
  date?: string;
  rating?: number;
  feedbackCount?: number;
  startPrice?: number;
  discountPrice?: number;
  persentage?: number;
}

// тимчасова функція для відображення статичних картинок в залежності від розміру courseCard
const logoPath = (size: string): string => (size === "small" ? courseImgPath : courseImgLargePath);

const CourseCard = ({
  title = "Основи шрифта і як його правильно построїти",
  size = "small",
  courseImg = logoPath(size),
  teacherLogoImg = teacherLogoImgPath,
  teacherName = "Teacher Name",
  date = "14.05.2022",
  rating = 4.8,
  feedbackCount = 108,
  startPrice = 999,
  discountPrice = 999,
  persentage = 25,
}: IProps) => {
  return (
    <Card className="course-card">
      <CardActionArea>
        <CardMedia image={courseImg} title="green iguana" />
        <CardContent sx={{ display: "flex" }}>
          <Box className="course-card__pfp-wrapper" sx={{ p: 1 }}>
            <img className="course-card__pfp" src={teacherLogoImg} alt="teacher-logo" />
          </Box>
          <Box className="course-card__body">
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <div className="course-card__text-block">
              <div className="course-card__teacher-date-block">
                <a className="course-card__teacherBtn" href="#" type="button">
                  {teacherName}
                </a>
                <span className="course-card__date">{date}</span>
              </div>
              <Rating size={size} rating={rating} feedbackCount={feedbackCount} />
              <Price
                size={size}
                isFree={false}
                startPrice={startPrice}
                discountPrice={discountPrice}
                persentage={persentage}
              />
            </div>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
