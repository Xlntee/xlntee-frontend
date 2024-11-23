import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Button, Stack, Box, InputLabel } from "@mui/material";
import { RootForm } from "src/widgets/forms";
import { TextField } from "src/features/form-fields";

import { getSecureEmail } from "src/shared/utils/methods";

import { useValidationSchema } from "./validation";

export type EmailUpdateFormValues = {
  new_email: string;
  confirm_email: string;
};

interface EmailUpdateFormProps {
  oldEmail: string;
  onSubmit: (props: EmailUpdateFormValues) => void;
}

const EmailUpdateForm: FC<EmailUpdateFormProps> = ({ oldEmail, onSubmit }) => {
  const { t } = useTranslation("auth");

  const methods = useForm<EmailUpdateFormValues>({
    resolver: yupResolver(useValidationSchema(oldEmail)),
    mode: "onSubmit"
  });

  async function onHandleSubmit(data: EmailUpdateFormValues): Promise<void> {
    onSubmit(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onHandleSubmit} className="auth-form">
      <Stack gap="20px">
        <Box>
          <InputLabel htmlFor="email">{t("current-email-address")}</InputLabel>
          <TextField
            name="email"
            type="email"
            aria-label="email input"
            placeholder="Email"
            value={getSecureEmail(oldEmail)}
            fullWidth
            disabled
          />
        </Box>
        <Box>
          <InputLabel htmlFor="new_email">{t("new-email-address")}</InputLabel>
          <TextField name="new_email" type="email" aria-label="new email input" placeholder="New email" fullWidth />
        </Box>
        <Box>
          <InputLabel htmlFor="confirm_email">{t("confirm-new-email")}</InputLabel>
          <TextField
            name="confirm_email"
            type="email"
            aria-label="email input"
            placeholder={t("confirm-new-email")}
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

export default EmailUpdateForm;
