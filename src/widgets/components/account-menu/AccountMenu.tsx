import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Stack, Divider, Button, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useAppDispatch } from "src/app/store/store";
import { switchRole } from "src/app/store/slices/user/slice";
import { closeLatestDialog } from "src/app/store/slices/dialog/slice";

import { LanguageSwitcher } from "src/widgets/components";
import { UserRoles } from "src/shared/utils/user-role";
import { AppRoutes } from "src/app/routing/appRoutes";
import { useAuth } from "src/hooks/useAuth";
import useDialog from "src/hooks/useDialog";
import { logOut } from "src/app/store/slices/auth/logout";

import AuthStudentContainer from "../auth-student-container";
import AuthTeacherContainer from "../auth-teacher-container";

import "./AccountMenu.scss";

const AccountMenu: FC = () => {
  const { t } = useTranslation("auth");

  const { userRole, isStudentRole, isTeacherRole } = useAuth();
  const { closeDialogs } = useDialog();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onToggleUserRole(): void {
    dispatch(closeLatestDialog());
    dispatch(switchRole());
    if (isStudentRole) {
      navigate(AppRoutes.teacher.dashboard);
    }
    if (isTeacherRole) {
      navigate(AppRoutes.studentLanding);
    }
  }

  function onLogout(): void {
    dispatch(closeLatestDialog());
    dispatch(logOut());
    navigate(AppRoutes.home);
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
            "account-menu__user--linked": isTeacherRole
          })}
        >
          <Link to={`${userRole}/dashboard/profile`}>
            <AccountCircleOutlinedIcon className="account-menu__avatar" />
          </Link>
          <Typography variant="h6" className="account-menu__user-name">
            <Link to={`${userRole}/dashboard/profile`} onClick={closeDialogs}>
              @leshalurn
            </Link>
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
          <AuthStudentContainer>{t(UserRoles.teacher)}</AuthStudentContainer>
          <AuthTeacherContainer>{t(UserRoles.student)}</AuthTeacherContainer>
        </Button>
        <Stack direction="row" alignItems="center" gap="10px" width="100%">
          <LanguageIcon />
          <LanguageSwitcher />
        </Stack>
        <Link to={`${userRole}/dashboard/support`} className="account-menu__link">
          {t("support-center")}
        </Link>
        <Button variant="black-text" className="account-menu__link" onClick={onLogout}>
          {t("sign-out")}
        </Button>
      </Stack>
    </Box>
  );
};

export default AccountMenu;
