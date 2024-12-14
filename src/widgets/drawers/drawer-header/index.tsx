import { FC } from "react";

import { Box } from "@mui/material";

import { MenuToggler } from "src/shared/ui";
import useDrawer from "src/shared/hooks/useDrawer";

import "./DrawerHeader.scss";

type DrawerHeaderProps = {
  children?: React.ReactNode;
};

const DrawerHeader: FC<DrawerHeaderProps> = ({ children }) => {
  const { onCloseDrawer } = useDrawer();

  return (
    <Box className="drawer-header">
      {children}
      <MenuToggler active={true} onClick={onCloseDrawer} className="drawer-header__close" />
    </Box>
  );
};

export default DrawerHeader;
