import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Button, Container, Typography, Stack } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { OtpInput } from "src/features";
import { PageProps } from "pages/type";
import { AppRoutes } from "src/app/routing/appRoutes";
import LocalStorageService from "src/shared/local-storage";

import "./AccountVerificationPage.scss";

const AccountVerificationPage = ({ title }: PageProps) => {
  useTitle(title);

  const [confirmationState, setConfirmationState] = useState<{ email: string; role: string }>({
    email: "",
    role: "",
  });

  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  const getShortEmail = (email: string) => {
    return email;
  };

  useEffect(() => {
    if (!LocalStorageService.isWaitingConfirmation()) {
      navigate(AppRoutes.home);
    } else {
      const conf = LocalStorageService.getEmailFromConfirmation();
      if (conf === null) return;
      setConfirmationState({
        email: conf.email,
        role: conf.role,
      });
    }
  }, []);

  function onRedirectToRegistration() {
    LocalStorageService.removeTokenConfirmation();
    navigate(`${AppRoutes.auth.registration}/${confirmationState.role}`);
  }

  return (
    <Box component="section" className="section-account-verification" py="40px">
      <Container>
        <Stack gap="10px" maxWidth="360px" marginInline="auto" className="section-account-verification__content">
          <img src="/assets/account-verification.png" alt={t("account-verification.title")} />
          <Typography variant="h4" fontWeight={400}>
            {t("account-verification.title")}
          </Typography>
          <Typography variant="body2" textAlign="left" mb="20px">
            {t("account-verification.text1")} {getShortEmail(confirmationState.email)} {t("account-verification.text2")}
            ?{" "}
            <Button className="button-link" onClick={onRedirectToRegistration}>
              {t("account-verification.link")}
            </Button>
          </Typography>
          <Box maxWidth="280px" marginInline="auto">
            <Box mb="20px">
              <OtpInput length={4} onUpdate={(value) => console.log(value)} />
            </Box>
            <Typography variant="body2">
              {t("account-verification.question")}{" "}
              <Button className="button-link">{t("account-verification.resend-link")}</Button>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AccountVerificationPage;
