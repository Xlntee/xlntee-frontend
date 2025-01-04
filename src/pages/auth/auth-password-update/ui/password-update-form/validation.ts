import * as yup from "yup";
import { useTranslation } from "react-i18next";

import { passwordRegex } from "src/shared/config/regex";
import { PasswordUpdateFormFields } from "./PasswordUpdateForm";

export const useValidationSchema = (): yup.ObjectSchema<PasswordUpdateFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    email: yup.string().email(t("validation.invalid-format")).required(t("validation.required-field")),
    password: yup.string().required(t("validation.required-field")),
    confirm_password: yup
      .string()
      .notOneOf(["password"], t("validation.confirm-password"))
      .matches(passwordRegex, t("validation.required-field"))
      .required(t("validation.required-field"))
  });
};
