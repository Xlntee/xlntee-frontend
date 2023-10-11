import { FC } from "react";
import { useAppSelector } from "../../store/store";
import { selectToken } from "../../store/auth/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute: FC = () => {
  const token = useAppSelector(selectToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
