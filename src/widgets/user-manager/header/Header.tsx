import { FC, useState } from "react";

import { Box, Container, Typography, Stack } from "@mui/material";

import { MenuToggler, Navigation, NavigationDrawer, NavigationLinkType } from "src/features";
import { LanguageSwitcher } from "src/widgets/components";
import { useTranslation } from "react-i18next";
import { AppUserManagerRoutes } from "src/app/routing/appRoutes";

const Header: FC = () => {
  const { t } = useTranslation("user-manager");

  const [open, setOpen] = useState<boolean>(false);

  function toggleDrawer(): void {
    setOpen((prevState) => !prevState);
  }

  const navList: NavigationLinkType[] = [
    {
      id: "1",
      name: t("navigation.finances"),
      path: AppUserManagerRoutes.home
    },
    {
      id: "2",
      name: t("navigation.users"),
      path: AppUserManagerRoutes.users
    },
    {
      id: "3",
      name: t("navigation.requests"),
      path: AppUserManagerRoutes.requests
    },
    {
      id: "4",
      name: t("navigation.courses"),
      path: AppUserManagerRoutes.courses
    },
    {
      id: "5",
      name: t("navigation.courseCategories"),
      path: AppUserManagerRoutes.courseCategories
    }
  ];

  return (
    <Box component="header" className="header header--user-manager">
      <Container className="header__container">
        <Typography variant="caption" fontWeight={700}>
          User manager
        </Typography>
        <Box className="header__nav">
          <Box className="header__nav-left">
            <Navigation items={navList} large={true} />
          </Box>
          <Stack direction="row" alignItems="center" gap="10px" className="header__nav-right">
            <LanguageSwitcher compact />
            <MenuToggler active={open} onClick={toggleDrawer} />
          </Stack>
        </Box>
      </Container>
      <NavigationDrawer navigationList={navList} open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Header;
