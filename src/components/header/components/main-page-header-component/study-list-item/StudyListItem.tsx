import React from "react";
import "./StudyListItem.scss";
import ProgressBar from "../../progress-bar/ProgressBar";
interface IProps {
  imageURL: string;
  title: string;
  percentage: number;
}

const StudyListItem: React.FC<IProps> = ({ imageURL, title, percentage }) => {
  return (
    <div className="study-list-item">
      <img className="study-list-item__image" src={imageURL} />
      <h2 className="study-list-item__title">{title}</h2>
      <ProgressBar percentage={percentage} />
      <button className="study-list-item__button">Продовжити &gt;&gt;</button>
    </div>
  );
};

export default StudyListItem;
