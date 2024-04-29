import React, { useState } from "react";
import { Badge, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./IconsBlock.scss";
import WishListItem from "./wish-list-item/WishListItem";
import ModalList from "./modal-list/ModalList";
import NotificationListItem from "./notification-list-item/NotificationListItem";
import BasketListItem from "./basket-list-item/BasketListItem";
import { basketItems, notifications, wishlistItems } from "./tempData";
import ProfileModal from "./profile-modal/ProfileModal";

const IconsBlock = () => {
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleWishlistOpen = () => setWishlistOpen(true);
  const handleWishlistClose = () => setWishlistOpen(false);

  const handleNotificationsOpen = () => setNotificationsOpen(true);
  const handleNotificationsClose = () => setNotificationsOpen(false);

  const handleBasketOpen = () => setBasketOpen(true);
  const handleBasketClose = () => setBasketOpen(false);

  const handleProfileOpen = () => setProfileOpen(true);
  const handleProfileClose = () => setProfileOpen(false);

  const handleAddToCart = (id: number) => {
    console.log(`Додати до кошика: ${id}`);
  };

  const handleRemoveFromWishlist = (id: number) => {
    console.log(`Видалити зі списку бажаного: ${id}`);
  };

  return (
    <div className="icons-block">
      <Badge
        badgeContent={wishlistItems.length}
        sx={{
          "& .MuiBadge-badge": {
            color: "#fff",
            backgroundColor: "#FB7576",
          },
          cursor: "pointer",
        }}
        onClick={handleWishlistOpen}
      >
        <FavoriteBorderIcon fontSize="large" />
      </Badge>
      <Badge
        badgeContent={notifications.length}
        sx={{
          "& .MuiBadge-badge": {
            color: "#fff",
            backgroundColor: "#FB7576",
          },
          cursor: "pointer",
        }}
        onClick={handleNotificationsOpen}
      >
        <NotificationsNoneIcon fontSize="large" />
      </Badge>
      <Badge
        badgeContent={basketItems.length}
        sx={{
          "& .MuiBadge-badge": {
            color: "#fff",
            backgroundColor: "#FB7576",
          },
          cursor: "pointer",
        }}
        onClick={handleBasketOpen}
      >
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Badge>
      <AccountCircleOutlinedIcon onClick={handleProfileOpen} fontSize="large" sx={{ cursor: "pointer" }} />

      {wishlistOpen && (
        <ModalList title="Список бажаного" onClose={handleWishlistClose}>
          {wishlistItems.slice(0, 3).map((item) => (
            <React.Fragment key={item.id}>
              <WishListItem
                imageURL={item.image}
                title={item.title}
                onAddToCart={() => handleAddToCart(item.id)}
                onRemove={() => handleRemoveFromWishlist(item.id)}
              />
              <Divider />
            </React.Fragment>
          ))}
        </ModalList>
      )}

      {notificationsOpen && (
        <ModalList title="Повідомлення" onClose={handleNotificationsClose}>
          {notifications.slice(0, 8).map((item) => (
            <React.Fragment key={item.id}>
              <NotificationListItem date={item.date} text={item.text} author={item.author} />
              <Divider />
            </React.Fragment>
          ))}
        </ModalList>
      )}

      {basketOpen && (
        <ModalList title="Кошик" onClose={handleBasketClose}>
          {basketItems.slice(0, 3).map((item) => (
            <React.Fragment key={item.id}>
              <BasketListItem
                imageURL={item.image}
                title={item.title}
                totalPrice={item.totalPrice}
                startPrice={item.startPrice}
                percentage={item.persent}
                onAddToCart={() => handleAddToCart(item.id)}
                onRemove={() => handleRemoveFromWishlist(item.id)}
              />
              <Divider />
            </React.Fragment>
          ))}
        </ModalList>
      )}
      {profileOpen && <ProfileModal onClose={handleProfileClose} />}
    </div>
  );
};

export default IconsBlock;
