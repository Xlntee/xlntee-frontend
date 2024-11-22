import { FC } from "react";
import cn from "classnames";

import { Box, Container, Stack } from "@mui/material";

import useDrawer from "src/hooks/useDrawer";

import { MenuToggler, Navigation, NavigationLinkType } from "src/features";
import { Role, UserRoles } from "src/shared/utils/user-role";

import useHeaderNavigationStudent from "src/hooks/useHeaderNavigationStudent";
import useHeaderNavigationTeacher from "src/hooks/useHeaderNavigationTeacher";
import { useAuth } from "src/hooks/useAuth";
import { HideMediaContainer } from "src/features/hide-media-container";

import { User } from "../user";

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
  const { navigationList: studentNavigationList } = useHeaderNavigationStudent();
  const { navigationList: teacherNavigationList } = useHeaderNavigationTeacher();
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

  function getNavigation(): NavigationLinkType[] {
    if (userRole === UserRoles.student) {
      return studentNavigationList;
    }
    if (userRole === UserRoles.teacher) {
      return teacherNavigationList;
    }
    return [];
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
              <Navigation items={getNavigation()} />
            </Box>
          )}
          <Stack direction="row" alignItems="center" gap="10px" className="header-profile__nav-right">
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
