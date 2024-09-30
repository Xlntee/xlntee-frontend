import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Container, Stack } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

import { MenuToggler, Navigation, NavigationDrawer, NavigationLinkType } from "src/features";
import { UserRole } from "src/shared/utils/enum";
import { AppRoutes } from "src/app/routing/appRoutes";

import { User } from "../user";

import "./HeaderProfile.scss";

type HeaderProfileProps = {
  children?: React.ReactNode;
  className?: string;
  link?: React.ReactNode;
  userRole: UserRole;
  tools?: React.ReactNode;
};

const HeaderProfile: FC<HeaderProfileProps> = ({ children, link, tools, className, userRole }) => {
  const { t } = useTranslation("auth");

  const [open, setOpen] = useState<boolean>(false);

  const teacherNavList: NavigationLinkType[] = [
    {
      id: "1",
      name: t("teacher-navigation.courses"),
      path: AppRoutes.teacher.myCourses,
      icon: <VideocamIcon />,
      type: "link",
    },
    {
      id: "4",
      name: t("teacher-navigation.support"),
      path: AppRoutes.teacher.support,
      icon: <HelpOutlineIcon />,
      type: "link",
    },
  ];

  const studentNavList: NavigationLinkType[] = [
    {
      id: "1",
      name: t("student-navigation.my-learning"),
      path: AppRoutes.student.myLearning,
      icon: <VideocamIcon />,
      type: "link",
    },
    {
      id: "2",
      name: t("student-navigation.completed-courses"),
      path: AppRoutes.student.completedCourses,
      icon: <DoneOutlineIcon />,
      type: "link",
    },
    {
      id: "3",
      name: t("student-navigation.certificates"),
      path: AppRoutes.student.certificates,
      icon: <LocalActivityIcon />,
      type: "link",
    },
    {
      id: "4",
      name: t("student-navigation.support"),
      path: AppRoutes.student.support,
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
        <Box className="header-profile__logo">
          <img src="/assets/x-logo-modal-extend.png" />
        </Box>
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
            <Stack direction="row" alignItems="center" gap="10px" className="header-profile__tools">
              {tools}
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
