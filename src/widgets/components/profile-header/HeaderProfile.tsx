import { FC } from "react";
import cn from "classnames";

import { Box, Container, Stack } from "@mui/material";

import useDrawer from "src/shared/hooks/useDrawer";

import { MenuToggler, Navigation, HideMediaContainer } from "src/shared/ui";
import { Role } from "src/shared/config/user-role";
import useHeaderNavigation from "src/shared/hooks/useHeaderNavigation";
import useAuth from "src/shared/hooks/useAuth";

import { User } from "../user";
import { ThemeModeToggler } from "../theme-mode-toggler";

import "./HeaderProfile.scss";

type HeaderProfileProps = {
  children?: React.ReactNode;
  className?: string;
  link?: React.ReactNode;
  userRole: Role;
  tools?: React.ReactNode;
};

const HeaderProfile: FC<HeaderProfileProps> = ({ children, link, tools, className, userRole }) => {
  const { isOpenDrawer, onOpenDrawer } = useDrawer();
  const { navigationList } = useHeaderNavigation(userRole);
  const { isStudentRole, isTeacherRole } = useAuth();
  const isOpen = isOpenDrawer("STUDENT_COURSE_NAVIGATION_DRAWER");

  function toggleDrawer(): void {
    if (isStudentRole) {
      onOpenDrawer("STUDENT_COURSE_NAVIGATION_DRAWER");
    }
    if (isTeacherRole) {
      onOpenDrawer("TEACHER_CREATE_COURSE_NAVIGATION_DRAWER");
    }
  }

  return (
    <Box component="header" className={cn("header-profile", className)}>
      <Container className="header-profile__container">
        <Box className="header-profile__logo">
          <img src="/assets/x-logo-modal-extend.png" alt="XIntee" width={86} height={30} />
        </Box>
        <Box className="header-profile__nav">
          {children ? (
            <Box className="header-profile__nav-center">
              {link}
              <Box className="header-profile__nav-content">{children}</Box>
            </Box>
          ) : (
            <Box className="header-profile__nav-left">
              <Navigation items={navigationList} />
            </Box>
          )}
          <Stack direction="row" alignItems="center" gap="10px" className="header-profile__nav-right">
            <ThemeModeToggler />
            <Stack direction="row" alignItems="center" gap="10px" className="header-profile__tools">
              {tools}
              <User />
            </Stack>
            <HideMediaContainer type="up" breakpoint="xl">
              <MenuToggler active={isOpen} onClick={toggleDrawer} className="header-profile__menu-toggler" />
            </HideMediaContainer>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderProfile;
