import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { selectToken } from "pages/auth/login/store/authSlice";

import { useAppSelector } from "../store/store";
import { AppRoutes } from "./appRoutes";

export const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const token = useAppSelector(selectToken);
  const location = useLocation();

  return token ? element : <Navigate to={AppRoutes.login} state={{ from: location.pathname }} replace />;
};
