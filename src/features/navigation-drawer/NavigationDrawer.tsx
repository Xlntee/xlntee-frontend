import { FC, useEffect, useState } from "react";

import { Box, Stack, Drawer, Divider } from "@mui/material";

import { MenuToggler, Navigation, NavigationLinkType } from "src/features";

import "./NavigationDrawer.scss";

type HeaderProfileProps = {
  children?: React.ReactNode;
  navigationList: NavigationLinkType[];
  open: boolean;
  onClose: () => void;
};

const HeaderProfile: FC<HeaderProfileProps> = ({ children, navigationList, open = false, onClose }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  return (
    <Drawer anchor="left" open={visible} onClose={onClose} className="navigation-drawer">
      <Stack direction="column" gap="20px" width="320px">
        <Box className="navigation-drawer__header">
          <Box className="header-profile__logo">
            <img src="/assets/x-logo-modal-extend.png" />
          </Box>
          <MenuToggler active={true} onClick={onClose} />
        </Box>
        <Box paddingInline="20px">
          <Navigation items={navigationList} />
          <Box marginBlock="20px">
            <Divider />
          </Box>
          {children}
        </Box>
      </Stack>
    </Drawer>
  );
};

export default HeaderProfile;
