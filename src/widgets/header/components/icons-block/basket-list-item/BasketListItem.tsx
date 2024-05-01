import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./BasketListItem.scss";
interface IProps {
  imageURL: string;
  title: string;
  totalPrice: string;
  startPrice: string;
  percentage: string;
  onAddToCart: () => void;
  onRemove: () => void;
}

const BasketListItem: React.FC<IProps> = ({
  imageURL,
  title,
  totalPrice,
  startPrice,
  percentage,
  onAddToCart,
  onRemove,
}) => {
  return (
    <div className="basket-list-item">
      <img className="basket-list-item__image" src={imageURL} />
      <h2 className="basket-list-item__title">{title}</h2>
      <div className="basket-list-item__price-block">
        <div className="basket-list-item__price-wrapp">
          <span className="basket-list-item__total-price">{`₴${totalPrice}`}</span>
          <span className="basket-list-item__first-price">{`₴${startPrice}`}</span>
        </div>
        <span className="basket-list-item__percentage">{`-${percentage}%`}</span>
      </div>
      <div className="basket-list-item__button-block">
        <button className="basket-list-item__buy-button" onClick={onAddToCart}>
          Купити зараз
        </button>
        <button className="basket-list-item__remove-button" onClick={onRemove}>
          Видалити
        </button>
        <FavoriteBorderIcon sx={{ position: "absolute", right: "4px", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default BasketListItem;
