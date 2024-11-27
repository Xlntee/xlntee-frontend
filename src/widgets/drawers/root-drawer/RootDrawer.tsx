import { FC } from "react";

import { Box, Drawer } from "@mui/material";

import { SuspenseWrapper } from "src/shared/utils/suspense-wrapper";

import useDrawer from "src/hooks/useDrawer";
import drawers from "../index";

import "./RootDrawer.scss";

const RootDrawer: FC = () => {
  const { activeDrawerName, isDrawerOpened, drawerProps, onCloseDrawer } = useDrawer();

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
