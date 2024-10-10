import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { Box, Container, Stack } from "@mui/material";

import LocalStorageService from "src/shared/local-storage";
import { AppRoutes } from "src/app/routing/appRoutes";

import "./AuthLayout.scss";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lastPathUrl = pathname.split("/")[2];
  const pageVerification = "account-verification";

  const isWaitingVerification = lastPathUrl === pageVerification && !LocalStorageService.isWaitingConfirmation();

  useEffect(() => {
    if (isWaitingVerification) {
      navigate(AppRoutes.notFound);
    } else if (lastPathUrl !== pageVerification && LocalStorageService.isWaitingConfirmation()) {
      navigate(AppRoutes.auth.accountVerification);
    }
  }, [pathname]);

  if (isWaitingVerification) return null;

  return (
    <Box component="section" className="section-auth">
      <Container className="section-auth__container">
        <Stack
          direction={{ md: "row" }}
          alignItems="start"
          justifyContent={{ md: "space-between" }}
          gap={{ xs: "20px", lg: "60px" }}
        >
          <Box mt={{ md: "40px" }} display={{ xs: "none", md: "block" }}>
            <img src="/assets/auth-image.webp" alt="auth" className="section-auth__image" />
          </Box>
          <Box className="section-auth__content">
            <Outlet />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AuthLayout;
