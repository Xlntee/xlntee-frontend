import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { Box, Drawer } from "@mui/material";

import { SuspenseWrapper } from "src/shared/utils/suspense-wrapper";

import useDrawer from "src/hooks/useDrawer";
import drawers from "../index";

import "./RootDrawer.scss";

const RootDrawer: FC = () => {
  const { pathname } = useLocation();
  const pathRef = useRef<string>("");
  const { activeDrawerName, isDrawerOpened, drawerProps, onCloseDrawer } = useDrawer();

  useEffect(() => {
    pathRef.current = pathname;
  }, []);

  useEffect(() => {
    if (pathRef.current !== pathname) {
      onCloseDrawer();
    }
  }, [pathname]);

  return (
    <Drawer anchor={drawerProps.direction} open={isDrawerOpened} onClose={onCloseDrawer} className="drawer">
      <Box className="drawer__inner">
        <SuspenseWrapper>
          {Object.keys(drawers).map((key) => {
            if (key === activeDrawerName) {
              const Component = drawers[key as keyof typeof drawers];
              return <Component key={key} />;
            }
            return null;
          })}
        </SuspenseWrapper>
      </Box>
    </Drawer>
  );
};

export default RootDrawer;
