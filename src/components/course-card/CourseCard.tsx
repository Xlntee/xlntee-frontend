import "./CourseCard.scss";
import courseImgPath from "./temp-images/course-img.png";
import courseImgLargePath from "./temp-images/course-img-large.png";
import teacherLogoImgPath from "./temp-images/teacher-logo.png";
import { FC } from "react";
import RatingComponent from "../rating/RatingComponent";
import Price from "../price/Price";
import css from "classnames";

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

const CourseCard: FC<IProps> = ({
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
}) => {
  return (
    <div
      className={css("course-card", {
        ["course-card--large"]: size === "large",
      })}
    >
      <div className="course-card__top">
        <img src={courseImg} alt="course-image" />
      </div>
      <div className="course-card__bottom">
        <div className="course-card__pfp-wrapper">
          <img className="course-card__pfp" src={teacherLogoImg} alt="teacher-logo" />
        </div>
        <div className="course-card__text-block">
          <h3 className="course-card__title">{title}</h3>
          <div className="course-card__teacher-date-block">
            <a className="course-card__teacherBtn" href="#" type="button">
              {teacherName}
            </a>
            <span className="course-card__date">{date}</span>
          </div>
          <RatingComponent size={size} rating={rating} feedbackCount={feedbackCount} />
          <Price
            size={size}
            isFree={false}
            startPrice={startPrice}
            discountPrice={discountPrice}
            persentage={persentage}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
