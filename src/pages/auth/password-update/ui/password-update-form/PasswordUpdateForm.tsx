import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Button, Stack, Box, FormLabel, Typography } from "@mui/material";

import { PasswordField, RootForm } from "src/shared/ui";

import { useValidationSchema } from "./validation";

export type PasswordUpdateFormFields = {
  password: string;
  new_password: string;
  confirm_password: string;
};

type PasswordUpdateFormProps = {
  onSubmit: (props: PasswordUpdateFormFields) => void;
};

const PasswordUpdateForm: FC<PasswordUpdateFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation("auth");

  const methods = useForm<PasswordUpdateFormFields>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });

  async function onHandleSubmit(data: PasswordUpdateFormFields): Promise<void> {
    console.log(data);
    onSubmit(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onHandleSubmit} className="auth-form">
      <Stack gap="20px">
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("current-password-label")}</Typography>
          <PasswordField
            name="password"
            aria-label="current password input"
            placeholder={t("current-password-placeholder")}
            fullWidth
          />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("new-password-label")}</Typography>
          <PasswordField
            name="new_password"
            aria-label="new password input"
            placeholder={t("new-password-placeholder")}
            fullWidth
          />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("confirm-password-label")}</Typography>
          <PasswordField
            name="confirm_password"
            aria-label="confirm password input"
            placeholder={t("confirm-password-placeholder")}
            fullWidth
          />
        </FormLabel>
        <Box textAlign="center">
          <Button type="submit" variant="contained" className="auth-form__btn-submit">
            Next
          </Button>
        </Box>
      </Stack>
    </RootForm>
  );
};

export default PasswordUpdateForm;
