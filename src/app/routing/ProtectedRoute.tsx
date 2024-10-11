import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { selectToken } from "pages/auth/login/store/authSlice";
import { AppRoutes } from "./appRoutes";
import { useAppSelector } from "../store/store";

export const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const token = useAppSelector(selectToken);

  return token ? element : <Navigate to={AppRoutes.auth.login} state={{ from: location.pathname }} replace />;
};
