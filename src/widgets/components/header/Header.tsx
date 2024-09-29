import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Stack } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";
import { MenuToggler, Navigation, NavigationDrawer, NavigationLinkType } from "src/features";

import { LanguageSwitcher } from "../language-switcher";

import "./Header.scss";

const HeaderProfile = () => {
  const { t } = useTranslation("auth");

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const navList: NavigationLinkType[] = [
    {
      id: "1",
      name: t("public-navigation.teacher"),
      path: "/",
      type: "link",
    },
    {
      id: "2",
      name: t("public-navigation.student"),
      path: "/student",
      type: "link",
    },
  ];

  function Tools() {
    return (
      <Stack direction="row" alignItems="center" gap="10px" className="header__tools">
        <LanguageSwitcher compact />
        <Link to={AppRoutes.authRoles} className="header__action">
          {t("login")}
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
      <NavigationDrawer navigationList={navList} open={open} onClose={() => setOpen(false)}>
        <Tools />
      </NavigationDrawer>
    </Box>
  );
};

export default HeaderProfile;
