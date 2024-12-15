import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { EmailUpdateFormFields } from "./EmailUpdateForm";

export const useValidationSchema = (oldEmail: string): yup.ObjectSchema<EmailUpdateFormFields> => {
  const { t } = useTranslation("auth");

  return yup.object().shape({
    new_email: yup
      .string()
      .email(t("validation.email-invalid-format"))
      .notOneOf([oldEmail], t("validation.new-email-requirements"))
      .required(t("validation.new-email")),
    confirm_email: yup
      .string()
      .oneOf([yup.ref("new_email")], t("validation.emails-match"))
      .required(t("validation.confirm-email"))
  });
};
