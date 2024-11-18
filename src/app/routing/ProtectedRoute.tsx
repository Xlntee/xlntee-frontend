import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "src/hooks/useAuth";

import { AppRoutes } from "./appRoutes";

interface ProtectedRouteProps {
  element: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuth } = useAuth();

  return isAuth ? element : <Navigate to={AppRoutes.auth.login} state={{ from: window.location.pathname }} replace />;
};
