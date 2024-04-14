import { FC } from "react";
import { useAppSelector } from "../../store/store";
import { selectToken } from "../../store/auth/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AppRoutes } from "components/routing/appRoutes";

export const ProtectedRoute: FC = () => {
  const token = useAppSelector(selectToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to={AppRoutes.login} state={{ from: location.pathname }} replace />;
};
