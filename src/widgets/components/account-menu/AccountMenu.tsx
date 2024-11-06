import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Stack, Divider, Button, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useAppSelector, useAppDispatch } from "src/app/store/store";
import { getUser, switchRole } from "src/app/store/slices/user/slice";
import { closeLatestDialog } from "src/app/store/slices/dialog/slice";

import { LanguageSwitcher } from "src/widgets/components";
import { UserRole } from "src/shared/utils/enum";
import { AppRoutes } from "src/app/routing/appRoutes";

import "./AccountMenu.scss";

const AccountMenu: FC = () => {
  const { t } = useTranslation("auth");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(getUser);

  function onToggleUserRole(): void {
    dispatch(closeLatestDialog());
    dispatch(switchRole());
    if (user.role === UserRole.STUDENT) {
      navigate(AppRoutes.teacher.dashboard);
    } else if (user.role === UserRole.TEACHER) {
      navigate(AppRoutes.studentLanding);
    }
  }

  return (
    <Box className="account-menu">
      <Box p="14px 20px">
        <Stack
          position="relative"
          direction="column"
          alignItems="center"
          gap="4px"
          className={cn("account-menu__user", {
            "account-menu__user--linked": user.role === UserRole.TEACHER
          })}
        >
          <Link to={`${user.role}/dashboard/profile`}>
            <AccountCircleOutlinedIcon className="account-menu__avatar" />
          </Link>
          <Typography variant="h6" className="account-menu__user-name">
            <Link to={`${user.role}/dashboard/profile`}>@leshalurn</Link>
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="column" alignItems="start" gap="14px" p="14px 20px">
        <Button
          variant="black-outline"
          startIcon={<SwapHorizIcon fontSize="large" />}
          fullWidth
          size="small"
          className="button-rounded-lg"
          onClick={onToggleUserRole}
        >
          {user.role === UserRole.STUDENT && t(UserRole.TEACHER)}
          {user.role === UserRole.TEACHER && t(UserRole.STUDENT)}
        </Button>
        <Stack direction="row" alignItems="center" gap="10px" width="100%">
          <LanguageIcon />
          <LanguageSwitcher />
        </Stack>
        <Link to={`${user.role}/dashboard/support`} className="account-menu__link">
          {t("support-center")}
        </Link>
        <Button variant="black-text" className="account-menu__link">
          {t("sign-out")}
        </Button>
      </Stack>
    </Box>
  );
};

export default AccountMenu;
