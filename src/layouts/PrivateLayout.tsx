import { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import cn from "classnames";

import { Box, Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { AppRoutes } from "src/app/routing/appRoutes";
import { HeaderProfile, NotificationToggler, Footer } from "src/widgets/components";
import AuthStudentContainer from "src/widgets/components/auth-student-container";
import { Role } from "src/shared/utils/user-role";

import RootLayout from "./RootLayout";

type PrivateLayoutProps = {
  userRole: Role;
};

const PrivateLayout: FC<PrivateLayoutProps> = ({ userRole }) => {
  const { pathname } = useLocation();

  return (
    <RootLayout>
      <HeaderProfile
        userRole={userRole}
        tools={
          <Stack direction="row" gap="10px" alignItems="center">
            <AuthStudentContainer>
              <Link
                to={AppRoutes.student.favoriteCourses}
                className={cn({ active: pathname === AppRoutes.student.favoriteCourses })}
                aria-label="link to favorite"
              >
                <FavoriteBorderOutlinedIcon />
              </Link>
            </AuthStudentContainer>
            <NotificationToggler />
          </Stack>
        }
      />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </RootLayout>
  );
};

export default PrivateLayout;
