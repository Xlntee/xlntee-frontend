import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Container, Stack, Button, Badge } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

import { useAppSelector } from "src/app/store/store";
import { getUserRole } from "src/app/store/slices/user/userSlice";

import { MenuToggler, Navigation, NavigationDrawer, NavigationLinkType } from "src/features";
import { UserRole } from "src/shared/utils/enum";
import { AppRoutes } from "src/app/routing/appRoutes";

import { Tools, User } from "./ui";

import "./HeaderProfile.scss";

type HeaderProfileProps = {
  children?: React.ReactNode;
  className?: string;
  link?: React.ReactNode;
};

const HeaderProfile: FC<HeaderProfileProps> = ({ children, link, className }) => {
  const { t } = useTranslation("auth");
  const userRole = useAppSelector(getUserRole);

  const [open, setOpen] = useState<boolean>(false);

  const teacherNavList: NavigationLinkType[] = [
    {
      id: "1",
      name: t("dashboard"),
      path: AppRoutes.dashboard.base,
      icon: <DashboardCustomizeIcon />,
      type: "link",
    },
    {
      id: "2",
      name: t("teacher-navigation.courses"),
      path: AppRoutes.dashboard.myCourses,
      icon: <VideocamIcon />,
      type: "link",
    },
    {
      id: "3",
      name: t("teacher-navigation.statistic"),
      path: AppRoutes.dashboard.statistic,
      icon: <EqualizerIcon />,
      type: "link",
    },
    {
      id: "4",
      name: t("teacher-navigation.billing"),
      path: AppRoutes.dashboard.billing,
      icon: <CreditCardIcon />,
      type: "link",
    },
    {
      id: "5",
      name: t("teacher-navigation.support"),
      path: AppRoutes.dashboard.support,
      icon: <HelpOutlineIcon />,
      type: "link",
    },
    {
      id: "6",
      name: t("teacher-navigation.pricing"),
      path: AppRoutes.dashboard.pricing,
      type: "action",
    },
  ];

  const studentNavList: NavigationLinkType[] = [
    {
      id: "1",
      name: t("dashboard"),
      path: AppRoutes.dashboard.base,
      icon: <DashboardCustomizeIcon />,
      type: "link",
    },
    {
      id: "2",
      name: t("student-navigation.my-learning"),
      path: AppRoutes.dashboard.myLearning,
      icon: <VideocamIcon />,
      type: "link",
    },
    {
      id: "3",
      name: t("student-navigation.completed-courses"),
      path: AppRoutes.dashboard.completedCourses,
      icon: <DoneOutlineIcon />,
      type: "link",
    },
    {
      id: "4",
      name: t("student-navigation.certificates"),
      path: AppRoutes.dashboard.certificates,
      icon: <LocalActivityIcon />,
      type: "link",
    },
    {
      id: "5",
      name: t("student-navigation.support"),
      path: AppRoutes.dashboard.support,
      icon: <HelpOutlineIcon />,
      type: "link",
    },
  ];

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  function onClose() {
    setOpen(false);
  }

  function getNavigation() {
    if (userRole === UserRole.STUDENT) {
      return studentNavList;
    }
    return teacherNavList;
  }

  return (
    <Box component="header" className={cn("header-profile", className)}>
      <Container className="header-profile__container">
        <Link to="/" className="header-profile__logo">
          <img src="/assets/x-logo-modal-extend.png" />
        </Link>
        <Box className="header-profile__nav">
          {children ? (
            <Box className="header-profile__nav-center">
              {link}
              <Box className="header-profile__nav-content">{children}</Box>
            </Box>
          ) : (
            <Box className="header-profile__nav-left">
              <Navigation items={getNavigation()} />
            </Box>
          )}
          <Stack direction="row" alignItems="center" gap="10px" className="header-profile__nav-right">
            <Stack direction="row" alignItems="center" gap="10px">
              {userRole === UserRole.STUDENT && <Tools />}
              <Button variant="black-text">
                <Badge variant="dot" color="primary">
                  <NotificationsNoneIcon />
                </Badge>
              </Button>
              <User />
            </Stack>
            <MenuToggler active={open} onClick={toggleDrawer} />
          </Stack>
        </Box>
      </Container>
      <NavigationDrawer navigationList={getNavigation()} children={children} open={open} onClose={onClose} />
    </Box>
  );
};

export default HeaderProfile;
