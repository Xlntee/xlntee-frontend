import React, { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./PriceFilterMenu.scss";

interface IProps {
  toPrice: string;
  fromPrice: string;
  handleSetToPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetFromPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceFilterMenu: React.FC<IProps> = ({
  toPrice,
  fromPrice,
  handleSetToPrice,
  handleSetFromPrice,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const handleShowDialog = () => setShowDialog(true);
  const handleHideDialog = () => setShowDialog(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      handleHideDialog();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showPriceDiapazone = (fromInputValue: string, toInputValue: string) => {
    if (fromInputValue && !toInputValue) {
      return `Ціна ${fromInputValue}₴`;
    }

    if (!fromInputValue && toInputValue) {
      return `Ціна ${toInputValue}₴`;
    }
    if (fromInputValue && toInputValue) {
      return `Ціна ${fromInputValue}₴ - ${toInputValue}₴`;
    }
    return "Ціна";
  };

  return (
    <div className="price-filter-menu">
      <div onClick={handleShowDialog} className="price-filter-menu__btn">
        <span className="priceFilterMenu__btn-title">
          {showPriceDiapazone(fromPrice, toPrice)}
        </span>
        {showDialog ? (
          <ArrowDropDownIcon sx={{ rotate: "180deg" }} />
        ) : (
          <ArrowDropDownIcon />
        )}
      </div>
      {showDialog && (
        <div ref={dialogRef} className="price-filter-menu__dialog">
          <div className="price-filter-menu__dialog-element">
            <span className="price-filter-menu__dialog-title">Від</span>
            <input
              onChange={handleSetFromPrice}
              value={fromPrice}
              className="price-filter-menu__dialog-input"
              type="number"
            />
          </div>
          <div className="price-filter-menu__dialog-element">
            <span className="price-filter-menu__dialog-title">До</span>
            <input
              onChange={handleSetToPrice}
              value={toPrice}
              className="price-filter-menu__dialog-input"
              type="number"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilterMenu;
