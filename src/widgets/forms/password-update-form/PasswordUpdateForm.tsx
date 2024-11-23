import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Button, Stack, Box, InputLabel } from "@mui/material";
import { RootForm } from "src/widgets/forms";
import { PasswordField } from "src/features/form-fields";

import { useValidationSchema } from "./validation";

export type PasswordUpdateFormValues = {
  password: string;
  new_password: string;
  confirm_password: string;
};

type PasswordUpdateFormProps = {
  onSubmit: (props: PasswordUpdateFormValues) => void;
};

const PasswordUpdateForm: FC<PasswordUpdateFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation("auth");

  const methods = useForm<PasswordUpdateFormValues>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });

  async function onHandleSubmit(data: PasswordUpdateFormValues): Promise<void> {
    console.log(data);
    onSubmit(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onHandleSubmit} className="auth-form">
      <Stack gap="20px">
        <Box>
          <InputLabel htmlFor="current_password">{t("current-password-label")}</InputLabel>
          <PasswordField
            name="password"
            aria-label="current password input"
            placeholder={t("current-password-placeholder")}
            fullWidth
          />
        </Box>
        <Box>
          <InputLabel htmlFor="new_password">{t("new-password-label")}</InputLabel>
          <PasswordField
            name="new_password"
            aria-label="new password input"
            placeholder={t("new-password-placeholder")}
            fullWidth
          />
        </Box>
        <Box>
          <InputLabel htmlFor="new_password">{t("confirm-password-label")}</InputLabel>
          <PasswordField
            name="confirm_password"
            aria-label="confirm password input"
            placeholder={t("confirm-password-placeholder")}
            fullWidth
          />
        </Box>
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
