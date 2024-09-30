import { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import cn from "classnames";

import { Box, Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { HeaderProfile, Notifications } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { UserRole } from "src/shared/utils/enum";
import { AppRoutes } from "src/app/routing/appRoutes";

interface PrivateLayoutProps {
  userRole: UserRole;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ userRole }) => {
  const { pathname } = useLocation();

  return (
    <>
      <HeaderProfile
        userRole={userRole}
        tools={
          <Stack direction="row" gap="10px" alignItems="center">
            {userRole === UserRole.STUDENT && (
              <Link
                to={AppRoutes.student.favoriteCourses}
                className={cn({ active: pathname === AppRoutes.student.favoriteCourses })}
              >
                <FavoriteBorderOutlinedIcon />
              </Link>
            )}
            <Notifications />
          </Stack>
        }
      />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default PrivateLayout;
