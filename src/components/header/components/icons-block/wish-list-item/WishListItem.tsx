import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./WishListItem.scss";
interface IProps {
  imageURL: string;
  title: string;
  onAddToCart: () => void;
  onRemove: () => void;
}

const WishListItem: React.FC<IProps> = ({
  imageURL,
  title,
  onAddToCart,
  onRemove,
}) => {
  return (
    <div className="wish-list-item">
      <img className="wish-list-item__image" src={imageURL} />
      <h2 className="wish-list-item__title">{title}</h2>
      <button className="wish-list-item__button" onClick={onAddToCart}>
        <AddShoppingCartOutlinedIcon />
        Додати до кошика
      </button>
      <button className="wish-list-item__button" onClick={onRemove}>
        <DeleteOutlineOutlinedIcon />
        Видалити зі списку
      </button>
    </div>
  );
};

export default WishListItem;
