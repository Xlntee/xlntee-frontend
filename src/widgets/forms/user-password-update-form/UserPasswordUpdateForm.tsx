import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Button, Stack, Box, FormLabel, Typography } from "@mui/material";

import { RootForm } from "src/widgets/forms";
import { PasswordField } from "src/features/form-fields";

import { useValidationSchema } from "./validation";

export type UserPasswordUpdateFormFields = {
  password: string;
  new_password: string;
  confirm_password: string;
};

type UserPasswordUpdateFormProps = {
  onSubmit: (props: UserPasswordUpdateFormFields) => void;
};

const UserPasswordUpdateForm: FC<UserPasswordUpdateFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation("auth");

  const methods = useForm<UserPasswordUpdateFormFields>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });

  async function onHandleSubmit(data: UserPasswordUpdateFormFields): Promise<void> {
    console.log(data);
    onSubmit(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onHandleSubmit} className="auth-form">
      <Stack gap="20px">
        <FormLabel>
          <Typography variant="h5" className="field-box__title">
            {t("current-password-label")}
          </Typography>
          <PasswordField
            name="password"
            aria-label="current password input"
            placeholder={t("current-password-placeholder")}
            fullWidth
          />
        </FormLabel>
        <FormLabel>
          <Typography variant="h5" className="field-box__title">
            {t("new-password-label")}
          </Typography>
          <PasswordField
            name="new_password"
            aria-label="new password input"
            placeholder={t("new-password-placeholder")}
            fullWidth
          />
        </FormLabel>
        <FormLabel>
          <Typography variant="h5" className="field-box__title">
            {t("confirm-password-label")}
          </Typography>
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

export default UserPasswordUpdateForm;
