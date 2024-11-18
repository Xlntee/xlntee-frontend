import { FC } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Stack } from "@mui/material";

import { MenuToggler, Navigation } from "src/features";

import useDrawer from "src/hooks/useDrawer";
import useHeaderNavigation from "src/hooks/useHeaderNavigation";
import { HideMediaContainer } from "src/features/hide-media-container";

import { User } from "../user";
import { HeaderTools } from "../header-tools";

import "./Header.scss";

const HeaderProfile: FC = () => {
  const { onOpenDrawer, isOpenDrawer } = useDrawer();
  const { navigationList } = useHeaderNavigation();

  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

  const authUser = false;

  function openMenu(): void {
    onOpenDrawer("BASE_NAVIGATION_DRAWER");
  }

  return (
    <Box component="header" className="header">
      <Container className="header__container">
        <Link to="/" className="header__logo">
          <img src="/assets/x-logo-modal-extend.png" alt="XIntee" width={86} height={30} />
        </Link>
        <Box className="header__nav">
          <Box className="header__nav-left">
            <Navigation items={navigationList} />
          </Box>
          <Stack direction="row" alignItems="center" gap="10px" className="header__nav-right">
            <HeaderTools />
            {authUser && <User />}
            <HideMediaContainer type="up" breakpoint="xl">
              <MenuToggler active={isOpen} onClick={openMenu} />
            </HideMediaContainer>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderProfile;
