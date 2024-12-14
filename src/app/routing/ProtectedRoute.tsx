import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "src/shared/hooks/useAuth";

import { AppRoutes, rolePrivateRoutes } from "src/shared/routes";

type ProtectedRouteProps = {
  element: ReactNode;
};

const NavigateToNotFound: FC = () => {
  return <Navigate to={AppRoutes.notFound} state={{ from: window.location.pathname }} replace />;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const { isAppLoading, isAuth, userRole } = useAuth();
  const { pathname } = useLocation();

  if (isAppLoading === false) {
    if (!isAuth) return <NavigateToNotFound />;
    if (userRole !== null && !pathname.includes(rolePrivateRoutes[userRole])) {
      return <NavigateToNotFound />;
    }
  }

  return element;
};
