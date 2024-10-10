import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button, Typography, Stack } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { OtpInput } from "src/features";
import { PageProps } from "pages/type";
import { AppRoutes } from "src/app/routing/appRoutes";
import LocalStorageService from "src/shared/local-storage";
import { XlnteeColors } from "src/shared/themes/colors";

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
    const conf = LocalStorageService.getEmailFromConfirmation();
    if (conf === null) return;
    setConfirmationState({
      email: conf.email,
      role: conf.role,
    });
  }, []);

  function onRedirectToRegistration() {
    LocalStorageService.removeTokenConfirmation();
    navigate(`${AppRoutes.auth.registration}/${confirmationState.role}`);
  }

  return (
    <Stack gap="20px" className="account-verification-form">
      <Typography
        variant="body2"
        paddingBlock="12px"
        borderBottom={`1px solid ${XlnteeColors.GrayStrokeColor}`}
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
