import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Button, FormLabel, Stack, Typography } from "@mui/material";

import { TextField, PasswordField, PasswordValidationPanel, RootForm } from "src/shared/ui";
import { useValidationSchema } from "./validation";

export type PasswordUpdateFormFields = {
  email: string;
  password: string;
  confirm_password: string;
};

type PasswordUpdateFormProps = {
  onSubmit: (data: PasswordUpdateFormFields) => void;
};

const PasswordUpdateForm: FC<PasswordUpdateFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation("auth");

  const methods = useForm<PasswordUpdateFormFields>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });
  const {
    formState: { errors }
  } = methods;

  function onHandleSubmit(data: PasswordUpdateFormFields): void {
    onSubmit(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onHandleSubmit}>
      <Stack direction="column" gap="20px" mb="20px">
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("email-label")}</Typography>
          <TextField
            fullWidth
            name="email"
            type="email"
            aria-label="email input"
            placeholder={t("email-placeholder")}
          />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("password-label")}</Typography>
          <PasswordField
            fullWidth
            name="password"
            aria-label="password input"
            placeholder={t("password-placeholder")}
          />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("confirm-password-label")}</Typography>
          <PasswordField
            fullWidth
            name="confirm_password"
            aria-label="password input"
            placeholder={t("confirm-password-placeholder")}
          />
        </FormLabel>
        <PasswordValidationPanel isError={!!errors.password} />
        <Button type="submit" aria-label="login button" variant="contained" className="auth-form__btn-submit">
          {t("button-text")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default PasswordUpdateForm;
