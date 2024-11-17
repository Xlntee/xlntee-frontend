import { FC } from "react";

import { Box } from "@mui/material";

import "./DrawerBody.scss";

type DrawerBodyProps = {
  children?: React.ReactNode;
};

const DrawerBody: FC<DrawerBodyProps> = ({ children }) => {
  return <Box className="drawer-body">{children}</Box>;
};

export default DrawerBody;
