import { useState } from "react";
import { Link } from "react-router-dom";
import "./MainPageHeaderComponent.scss";
import HeaderDropdown from "./header-dropdown/HeaderDropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconsBlock from "../icons-block/IconsBlock";
import StudyModal from "./study-modal/StudyModal";
import StudyListItem from "./study-list-item/StudyListItem";
import { studyData } from "./tempData";
import { Divider } from "@mui/material";
import React from "react";

const MainPageHeaderComponent = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [isLogin] = useState(true);
  const [showStudyModal, setShowStudyModal] = useState(false);

  const handleOpenStudyModal = () => setShowStudyModal(true);
  const handleCloseStudyModal = () => setShowStudyModal(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="main-page">
      <div className="main-page__categories-block">
        <div className="main-page__categories-btn" onClick={toggleCategories}>
          <span className="main-page__categories-btn-text">Категорії</span>
          {showCategories ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {showCategories && <HeaderDropdown onClose={toggleCategories} />}
        <h2 className="main-page__courses-text">Курси</h2>
      </div>
      <div className="main-page__btns-block">
        <Link to="#" className="main-page__teach-btn">
          + Навчати
        </Link>
        {isLogin ? (
          <div className="main-page__login-block">
            <h2 onClick={handleOpenStudyModal} className="main-page__study-btn">
              Моє навчання
            </h2>
            {showStudyModal && (
              <StudyModal title="Моє навчання" onClose={handleCloseStudyModal}>
                {studyData.map((item) => (
                  <React.Fragment key={item.id}>
                    <StudyListItem title={item.title} imageURL={item.imageUrl} percentage={item.percentage} />
                    <Divider />
                  </React.Fragment>
                ))}
              </StudyModal>
            )}
            <IconsBlock />
          </div>
        ) : (
          <Link to="/registration" className="main-page__sign-btn">
            Вхід
            <br />
            Реєстрація
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainPageHeaderComponent;
