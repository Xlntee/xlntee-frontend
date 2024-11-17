import { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import cn from "classnames";

import { Box, Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { RootDialog } from "src/widgets/dialogs/RootDialog";
import { HeaderProfile, NotificationToggler } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { Role } from "src/shared/utils/user-role";
import { AppRoutes } from "src/app/routing/appRoutes";
import AuthStudentContainer from "src/widgets/components/auth-student-container";
import RootDrawer from "src/widgets/drawers/RootDrawers";

interface PrivateLayoutProps {
  userRole: Role;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ userRole }) => {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderProfile
        userRole={userRole}
        tools={
          <Stack direction="row" gap="10px" alignItems="center">
            <AuthStudentContainer>
              <Link
                to={AppRoutes.student.favoriteCourses}
                className={cn({ active: pathname === AppRoutes.student.favoriteCourses })}
              >
                <FavoriteBorderOutlinedIcon />
              </Link>
            </AuthStudentContainer>
            <NotificationToggler />
          </Stack>
        }
      />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <RootDialog />
      <RootDrawer />
    </>
  );
};

export default PrivateLayout;
