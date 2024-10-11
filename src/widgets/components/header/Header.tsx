import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Stack } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";
import { MenuToggler, Navigation, NavigationDrawer, NavigationLinkType } from "src/features";

import { LanguageSwitcher } from "../language-switcher";
import { User } from "../user";

import "./Header.scss";

const HeaderProfile = () => {
  const { t } = useTranslation("auth");

  const authUser = false;

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const navList: NavigationLinkType[] = [
    {
      id: "1",
      name: t("teacher"),
      path: "/",
      type: "link",
    },
    {
      id: "2",
      name: t("student"),
      path: "/student",
      type: "link",
    },
  ];

  function Tools() {
    return (
      <Stack direction="row" alignItems="center" gap="10px" className="header__tools">
        <LanguageSwitcher compact />
        {!authUser && (
          <Link to={AppRoutes.auth.login} className="header__action">
            {t("login")}
          </Link>
        )}
      </Stack>
    );
  }

  return (
    <Box component="header" className="header">
      <Container className="header__container">
        <Link to="/" className="header__logo">
          <img src="/assets/x-logo-modal-extend.png" alt="XIntee" width={86} height={30} />
        </Link>
        <Box className="header__nav">
          <Box className="header__nav-left">
            <Navigation items={navList} />
          </Box>
          <Stack direction="row" alignItems="center" gap="10px" className="header__nav-right">
            <Tools />
            {authUser && <User />}
            <MenuToggler active={open} onClick={toggleDrawer} className="header__menu-toggler" />
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
