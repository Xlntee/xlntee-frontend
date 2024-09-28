import { FC } from "react";

import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./MenuToggler.scss";

type MenuTogglerProps = {
  active: boolean;
  onClick: () => void;
};

const MenuToggler: FC<MenuTogglerProps> = ({ active, onClick }) => {
  return (
    <Button variant="black-text" className="menu-toggler" onClick={onClick}>
      {active ? <CloseIcon /> : <MenuIcon />}
    </Button>
  );
};

export default MenuToggler;
