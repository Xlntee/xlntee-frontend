import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Stack, Divider, Button, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { LanguageSwitcher } from "src/widgets/components";
import { AppRoutes } from "src/app/routing/appRoutes";
import { UserRole } from "src/shared/utils/enum";

import "./AccountMenu.scss";

const AccountMenu = () => {
  const { t } = useTranslation("auth");

  const [userRole, setUserRole] = useState<string | null>(UserRole.TEACHER);

  function onHandleToggleUser() {
    if (userRole === UserRole.STUDENT) {
      setUserRole(UserRole.TEACHER);
    }
    if (userRole === UserRole.TEACHER) {
      setUserRole(UserRole.STUDENT);
    }
  }

  return (
    <Box className="account-menu">
      <Box p="14px 20px">
        <Stack position="relative" direction="column" alignItems="center" gap="4px" className="account-menu__user">
          <AccountCircleOutlinedIcon className="account-menu__avatar" />
          <Typography variant="h6" className="account-menu__user-name">
            @leshalurn
          </Typography>
          <Link className="account-menu__user-link" to={AppRoutes.dashboard.profile}></Link>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="column" alignItems="start" gap="14px" p="14px 20px">
        <Button
          variant="black-outline"
          fullWidth
          startIcon={<SwapHorizIcon fontSize="large" />}
          sx={{ borderRadius: "30px" }}
          size="small"
          onClick={onHandleToggleUser}
        >
          {userRole === UserRole.STUDENT && t("student")}
          {userRole === UserRole.TEACHER && t("teacher")}
        </Button>
        <Stack direction="row" alignItems="center" gap="10px" width="100%">
          <LanguageIcon />
          <LanguageSwitcher />
        </Stack>
        <Button variant="black-text" className="account-menu__link">
          {t("support-center")}
        </Button>
        <Button variant="black-text" className="account-menu__link">
          {t("sign-out")}
        </Button>
      </Stack>
    </Box>
  );
};

export default AccountMenu;
