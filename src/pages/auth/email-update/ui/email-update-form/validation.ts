import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { EmailUpdateFormFields } from "./EmailUpdateForm";

export const useValidationSchema = (oldEmail: string): yup.ObjectSchema<EmailUpdateFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    new_email: yup
      .string()
      .email(t("validation.invalid-format"))
      .notOneOf([oldEmail], t("validation.new-email-requirements"))
      .required(t("validation.required-field")),
    confirm_email: yup
      .string()
      .oneOf([yup.ref("new_email")], t("validation.emails-match"))
      .required(t("validation.required-field"))
  });
};
