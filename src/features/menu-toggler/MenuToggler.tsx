import { FC } from "react";
import cn from "classnames";

import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./MenuToggler.scss";

type MenuTogglerProps = {
  active: boolean;
  className?: string;
  onClick: () => void;
};

const MenuToggler: FC<MenuTogglerProps> = ({ active, className, onClick }) => {
  return (
    <Button variant="black-text" className={cn("menu-toggler", className)} onClick={onClick}>
      {active ? <CloseIcon /> : <MenuIcon />}
    </Button>
  );
};

export default MenuToggler;
