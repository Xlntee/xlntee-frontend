import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { selectToken } from "src/pages/login/store/authSlice";

import { useAppSelector } from "../store/store";
import { AppRoutes } from "./appRoutes";

export const ProtectedRoute: FC = () => {
  const token = useAppSelector(selectToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to={AppRoutes.login} state={{ from: location.pathname }} replace />;
};
