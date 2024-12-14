import * as yup from "yup";
import { useTranslation } from "react-i18next";

import { passwordRegex } from "src/shared/config/regex";
import { RegistrationFormFields } from "./RegistrationForm";

export const useValidationSchema = (): yup.ObjectSchema<RegistrationFormFields> => {
  const { t } = useTranslation("auth");

  return yup.object().shape({
    fullname: yup.string().required(t("validation.fullname")),
    email: yup.string().email(t("validation.email-invalid-format")).required(t("validation.email")),
    password: yup
      .string()
      .matches(passwordRegex, t("validation.confirm-password-requirements") + " (!@#$%^&*()_+\\/.-~)")
      .required(t("validation.password"))
  });
};
