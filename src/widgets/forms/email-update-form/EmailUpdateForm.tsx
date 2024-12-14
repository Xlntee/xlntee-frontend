import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Button, Stack, Box, FormLabel, Typography } from "@mui/material";

import { RootForm } from "src/widgets/forms";
import { TextField } from "src/shared/ui/form-fields";

import { getSecureEmail } from "src/shared/config/methods";

import { useValidationSchema } from "./validation";

export type EmailUpdateFormFields = {
  new_email: string;
  confirm_email: string;
};

type EmailUpdateFormProps = {
  oldEmail: string;
  onSubmit: (props: EmailUpdateFormFields) => void;
};

const EmailUpdateForm: FC<EmailUpdateFormProps> = ({ oldEmail, onSubmit }) => {
  const { t } = useTranslation("auth");

  const methods = useForm<EmailUpdateFormFields>({
    resolver: yupResolver(useValidationSchema(oldEmail)),
    mode: "onSubmit"
  });

  async function onHandleSubmit(data: EmailUpdateFormFields): Promise<void> {
    onSubmit(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onHandleSubmit} className="auth-form">
      <Stack gap="20px">
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("current-email-address")}</Typography>
          <TextField
            name="email"
            type="email"
            aria-label="email input"
            placeholder="Email"
            value={getSecureEmail(oldEmail)}
            fullWidth
            disabled
          />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("new-email-address")}</Typography>
          <TextField name="new_email" type="email" aria-label="new email input" placeholder="New email" fullWidth />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("confirm-new-email")}</Typography>
          <TextField
            name="confirm_email"
            type="email"
            aria-label="email input"
            placeholder={t("confirm-new-email")}
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

export default EmailUpdateForm;
