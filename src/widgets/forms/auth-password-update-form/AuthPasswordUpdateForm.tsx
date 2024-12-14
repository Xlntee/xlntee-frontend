import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Button, Stack } from "@mui/material";

import { useValidationSchema } from "./validation";
import { PasswordValidationPanel } from "src/shared/ui";
import { TextField, PasswordField } from "src/shared/ui/form-fields";
import { RootForm } from "../root-form";

export type PasswordUpdateFormFields = {
  email: string;
  password: string;
  confirm_password: string;
};

type AuthPasswordUpdateFormProps = {
  onSubmit: (data: PasswordUpdateFormFields) => void;
};

const AuthPasswordUpdateForm: FC<AuthPasswordUpdateFormProps> = ({ onSubmit }) => {
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
        <TextField name="email" aria-label="email input" type="email" placeholder={t("email-placeholder")} autoFocus />
        <PasswordField name="password" aria-label="password input" placeholder={t("password-placeholder")} />
        <PasswordField
          name="confirm_password"
          aria-label="password input"
          placeholder={t("confirm-password-placeholder")}
          showErrorMessage={false}
        />
        <PasswordValidationPanel isError={!!errors.password} />
        <Button type="submit" aria-label="login button" variant="contained" className="auth-form__btn-submit">
          {t("button-text")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default AuthPasswordUpdateForm;
