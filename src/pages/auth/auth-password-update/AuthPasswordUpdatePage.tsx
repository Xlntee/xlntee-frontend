import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Stack, Typography } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";

import { XlnteeColors } from "src/shared/themes/colors";
import { PageProps } from "pages/type";
import useTitle from "src/hooks/useTitle";
import { AuthPasswordUpdateForm, PasswordUpdateFormValues } from "src/widgets/forms";

const AuthPasswordUpdatePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("auth");

  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  function onSubmit(data: PasswordUpdateFormValues): void {
    console.log(data);
    setIsSubmit(true);
    setSelectedEmail(data.email);
  }

  return (
    <Box className="auth-form">
      <Typography
        variant="body2"
        paddingBlock="12px"
        borderBottom={`1px solid ${XlnteeColors.GrayStrokeColor}`}
        fontWeight={300}
        className="account-verification-form__title"
      >
        {isSubmit ? t("credential-update-content.title-password") : t("password-change")}
      </Typography>
      {isSubmit ? (
        <Box mb="20px">
          <Typography variant="body2" fontWeight={300}>
            {t("credential-update-content.subtitle1")}
            {""}
            <Typography component="span" variant="body2" marginInline="4px" fontWeight="500" display="inline">
              {selectedEmail}
            </Typography>
            {""}
            {t("credential-update-content.subtitle2")}
          </Typography>
        </Box>
      ) : (
        <AuthPasswordUpdateForm onSubmit={onSubmit} />
      )}
      <Stack direction="column" gap="4px">
        <Typography variant="caption" className="auth-form__caption-text">
          {t("have-account")}? <Link to={AppRoutes.auth.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default AuthPasswordUpdatePage;
