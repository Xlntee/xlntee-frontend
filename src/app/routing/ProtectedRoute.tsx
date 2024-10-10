import { ReactNode, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { selectToken } from "pages/auth/login/store/authSlice";

import { useAppSelector } from "../store/store";
import { AppRoutes } from "./appRoutes";
import { getUser } from "src/app/store/slices/user/userSlice";

export const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const token = useAppSelector(selectToken);
  const location = useLocation();

  const user = useAppSelector(getUser);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user.userRolePath);
  }, [user.userRolePath]);

  return token ? element : <Navigate to={AppRoutes.auth.login} state={{ from: location.pathname }} replace />;
};
