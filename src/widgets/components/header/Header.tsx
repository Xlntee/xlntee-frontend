import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Container, Stack } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";
import { MenuToggler, Navigation, NavigationDrawer, NavigationLinkType } from "src/features";

import { LanguageSwitcher } from "../language-switcher";

import "./Header.scss";

const navList: NavigationLinkType[] = [
  {
    id: "1",
    name: "Creators",
    path: "/",
    type: "link",
  },
  {
    id: "2",
    name: "Students",
    path: "/students",
    type: "link",
  },
];

const HeaderProfile = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  function onClose() {
    setOpen(false);
  }

  function Tools() {
    return (
      <Stack direction="row" alignItems="center" gap="10px" className="header__tools">
        <LanguageSwitcher compact />
        <Link to={AppRoutes.authRoles} className="header__action">
          Login
        </Link>
      </Stack>
    );
  }

  return (
    <Box component="header" className="header">
      <Container className="header__container">
        <Link to="/" className="header__logo">
          <img src="/assets/x-logo-modal-extend.png" />
        </Link>
        <Box className="header__nav">
          <Box className="header__nav-left">
            <Navigation items={navList} />
          </Box>
          <Stack direction="row" alignItems="center" gap="10px" className="header__nav-right">
            <Tools />
            <MenuToggler active={open} onClick={toggleDrawer} />
          </Stack>
        </Box>
      </Container>
      <NavigationDrawer navigationList={navList} open={open} onClose={onClose}>
        <Tools />
      </NavigationDrawer>
    </Box>
  );
};

export default HeaderProfile;
