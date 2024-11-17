import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { selectToken } from "pages/auth/login/store/authSlice";
import { AppRoutes } from "./appRoutes";
import { useAppSelector } from "../store/store";

interface ProtectedRouteProps {
  element: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const token = useAppSelector(selectToken);

  return token ? element : <Navigate to={AppRoutes.auth.login} state={{ from: window.location.pathname }} replace />;
};
