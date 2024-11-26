import { FC } from "react";

import { Box, Divider } from "@mui/material";

import { Navigation, NavigationLinkType } from "src/features";
import DrawerHeader from "../drawer-header";
import DrawerBody from "../drawer-body";

type NavigationDrawerProps = {
  children?: React.ReactNode;
  navigationList: NavigationLinkType[];
  open: boolean;
  onClose: () => void;
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({ children, navigationList }) => {
  return (
    <>
      <DrawerHeader>
        <img src="/assets/x-logo-modal-extend.png" alt="XIntee" width={100} height={36} />
      </DrawerHeader>
      <DrawerBody>
        <Navigation items={navigationList} />
        <Box marginBlock="20px">
          <Divider />
        </Box>
        {children}
      </DrawerBody>
    </>
  );
};

export default NavigationDrawer;
