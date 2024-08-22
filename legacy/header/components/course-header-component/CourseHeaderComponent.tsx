import { useState } from "react";
import { Link } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";

import ProgressBar from "../progress-bar/ProgressBar";
import ApealRefundBtn from "./apeal-refund-button/ApealRefundBtn";

import RatingModal from "./rating-modal/RatingModal";
import ShareModal from "./share-modal/ShareModal";
import "./CourseHeaderComponent.scss";

const CourseHeaderComponent = () => {
  const [isOpenRatingModal, setIsOpenRatingModal] = useState(false);
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);

  const handleOpenRatingModal = () => setIsOpenRatingModal(true);
  const handleCloseRatingModal = () => setIsOpenRatingModal(false);

  const handleOpenShareModal = () => setIsOpenShareModal(true);
  const handleCloseShareModal = () => setIsOpenShareModal(false);

  return (
    <div className="course-header">
      <Link className="course-header__back-btn" to="#">
        {" < На головну"}
      </Link>
      <div className="course-header__progress-bar">
        <span className="course-header__progress-name">Прогрес:</span>
        <ProgressBar percentage={62} />
      </div>
      <div className="course-header__icons-block">
        <button onClick={handleOpenRatingModal} className="course-header__share-rating-btn">
          <StarIcon fontSize="large" sx={{ color: "#fff" }} />
          <span>Оцінити</span>
        </button>
        <button onClick={handleOpenShareModal} className="course-header__share-rating-btn">
          <ShareIcon fontSize="large" sx={{ color: "#fff" }} />
          <span>Поділитись</span>
        </button>
        <ApealRefundBtn />
      </div>
      <RatingModal isOpen={isOpenRatingModal} handleClose={handleCloseRatingModal} />
      <ShareModal isOpen={isOpenShareModal} handleClose={handleCloseShareModal} />
    </div>
  );
};

export default CourseHeaderComponent;
