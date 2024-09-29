import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import { HeaderProfile } from "src/widgets/components";
import Footer from "src/widgets/footer/Footer";
import { UserRole } from "src/shared/utils/enum";
import { useAppSelector } from "src/app/store/store";
import { getUser } from "src/app/store/slices/user/userSlice";

interface PrivateLayoutProps {
  userRole: UserRole;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ userRole }) => {
  const user = useAppSelector(getUser);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user.userRolePath);
  }, [user.userRolePath]);

  return (
    <>
      <HeaderProfile userRole={userRole} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default PrivateLayout;
