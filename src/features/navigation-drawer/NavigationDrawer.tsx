import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Box, Drawer, Divider } from "@mui/material";

import { MenuToggler, Navigation, NavigationLinkType } from "src/features";

type HeaderProfileProps = {
  children?: React.ReactNode;
  navigationList: NavigationLinkType[];
  open: boolean;
  onClose: () => void;
};

const HeaderProfile: FC<HeaderProfileProps> = ({ children, navigationList, open = false, onClose }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Drawer anchor="left" open={visible} onClose={onClose} className="navigation-drawer drawer">
      <Box className="drawer__inner">
        <Box className="drawer__header">
          <img src="/assets/x-logo-modal-extend.png" alt="XIntee" width={100} height={36} />
          <MenuToggler active={true} onClick={onClose} className="drawer__close" />
        </Box>
        <Box className="drawer__body">
          <Navigation items={navigationList} />
          <Box marginBlock="20px">
            <Divider />
          </Box>
          {children}
        </Box>
      </Box>
    </Drawer>
  );
};

export default HeaderProfile;
