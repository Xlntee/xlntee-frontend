import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Stack, Divider, Button, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useAppSelector, useAppDispatch } from "src/app/store/store";
import { getUserRole, switchRole } from "src/app/store/slices/user/userSlice";

import { LanguageSwitcher } from "src/widgets/components";
import { AppRoutes } from "src/app/routing/appRoutes";
import { UserRole } from "src/shared/utils/enum";

import "./AccountMenu.scss";

const AccountMenu = () => {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userRole = useAppSelector(getUserRole);

  function onToggleUserRole() {
    dispatch(switchRole());
    navigate(AppRoutes.dashboard.base);
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
          onClick={onToggleUserRole}
        >
          {userRole === UserRole.STUDENT && t("teacher")}
          {userRole === UserRole.TEACHER && t("student")}
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
