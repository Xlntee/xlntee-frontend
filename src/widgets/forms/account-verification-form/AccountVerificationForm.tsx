import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button, Typography, Stack, useTheme } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { OtpInput } from "src/shared/ui";
import { PageProps } from "pages/type";
import { AppRoutes } from "src/shared/routes";
import LocalStorageService from "src/shared/local-storage";

type ConfirmationFormFields = {
  email: string;
  role: string;
};

const AccountVerificationPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const theme = useTheme();

  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  const [confirmationState, setConfirmationState] = useState<ConfirmationFormFields>({
    email: "",
    role: ""
  });

  const getShortEmail = (email: string): string => {
    return email;
  };

  useEffect(() => {
    const conf = LocalStorageService.getEmailFromConfirmation();
    if (conf === null) return;
    setConfirmationState({
      email: conf.email,
      role: conf.role
    });
  }, []);

  function onRedirectToRegistration(): void {
    LocalStorageService.removeTokenConfirmation();
    navigate(AppRoutes.auth.registration);
  }

  return (
    <Stack gap="20px" className="account-verification-form">
      <Typography
        variant="body2"
        paddingBlock="12px"
        borderBottom={`1px solid ${theme.palette.grey["200"]}`}
        fontWeight={300}
        className="account-verification-form__title"
      >
        {t("account-verification.title")}
      </Typography>
      <Typography variant="body2" textAlign="left" fontWeight={300} className="account-verification-form__question">
        {t("account-verification.text1")} {getShortEmail(confirmationState.email)} {t("account-verification.text2")}?{" "}
        <Button className="button-link" onClick={onRedirectToRegistration}>
          {t("account-verification.enter-another-email")}
        </Button>
      </Typography>
      <OtpInput length={4} onUpdate={(value) => console.log(value)} />
      <Typography variant="body2" fontWeight={300}>
        {t("account-verification.question")}{" "}
        <Button className="button-link">{t("account-verification.resend-link")}</Button>
      </Typography>
      <Button variant="contained">{t("account-verification.send")}</Button>
    </Stack>
  );
};

export default AccountVerificationPage;
