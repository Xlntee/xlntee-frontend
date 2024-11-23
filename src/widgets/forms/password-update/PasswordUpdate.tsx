import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { AppRoutes } from "src/app/routing/appRoutes";

import { PasswordUpdateFormValues, useValidationSchema } from "./validation";
import { XlnteeColors } from "src/shared/themes/colors";
import { PasswordValidationPanel } from "src/features";

const PasswordUpdate: FC = () => {
  const { t } = useTranslation("auth");

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const {
    formState: { errors, defaultValues },
    register,
    handleSubmit,
    getValues
  } = useForm<PasswordUpdateFormValues>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });
  console.log("errors", errors);

  function onSubmit(data: PasswordUpdateFormValues): void {
    console.log(data);
    setIsSubmit(true);
  }

  console.log("defaultValues", defaultValues);

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
              {getValues().email}
            </Typography>
            {""}
            {t("credential-update-content.subtitle2")}
          </Typography>
        </Box>
      ) : (
        <Stack component="form" direction="column" gap="20px" mb="20px" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email")}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            aria-label="email input"
            type="email"
            placeholder={t("email-placeholder")}
            autoFocus
          />
          <TextField
            {...register("password")}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            aria-label="password input"
            type="password"
            placeholder={t("password-placeholder")}
          />
          <TextField
            {...register("confirm_password")}
            error={!!errors.confirm_password?.message}
            aria-label="password input"
            type="password"
            placeholder={t("confirm-password-placeholder")}
          />
          <PasswordValidationPanel isError={!!errors.password} />
          <Button type="submit" aria-label="login button" variant="contained" className="auth-form__btn-submit">
            {t("button-text")}
          </Button>
        </Stack>
      )}
      <Stack direction="column" gap="4px">
        <Typography variant="caption" className="auth-form__caption-text">
          {t("have-account")}? <Link to={AppRoutes.auth.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default PasswordUpdate;
