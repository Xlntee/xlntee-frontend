import { FC } from "react";
import { Outlet } from "react-router-dom";

import { HeaderUserManager } from "src/widgets/user-manager";

const UserManagerLayout: FC = () => {
  return (
    <>
      <HeaderUserManager />
      <Outlet />
    </>
  );
};

export default UserManagerLayout;
