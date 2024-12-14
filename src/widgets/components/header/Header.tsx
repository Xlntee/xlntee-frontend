import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Button, Container, Stack } from "@mui/material";

import { MenuToggler, Navigation } from "src/shared/ui";
import { AppRoutes } from "src/shared/routes";

import { useAuth } from "src/shared/hooks/useAuth";
import useDrawer from "src/shared/hooks/useDrawer";
import useHeaderNavigation from "src/shared/hooks/useHeaderNavigation";
import { HideMediaContainer } from "src/shared/ui/hide-media-container";

import { User } from "../user";
import { LanguageSwitcher } from "../language-switcher";
import { ThemeModeToggler } from "../theme-mode-toggler";

import "./Header.scss";

const HeaderProfile: FC = () => {
  const { t } = useTranslation("auth");
  const { onOpenDrawer, isOpenDrawer } = useDrawer();
  const { navigationList } = useHeaderNavigation();

  const { isAuth, isAppLoading } = useAuth();

  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

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
            <ThemeModeToggler />
            <LanguageSwitcher compact />
            {!isAppLoading && (
              <>
                {isAuth ? (
                  <User />
                ) : (
                  <Button
                    component={Link}
                    to={AppRoutes.auth.login}
                    variant="black-contain"
                    size="small"
                    className="button-rounded-sm"
                    sx={{ paddingInline: "20px" }}
                  >
                    {t("login")}
                  </Button>
                )}
              </>
            )}
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
