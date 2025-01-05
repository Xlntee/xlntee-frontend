import * as yup from "yup";
import { useTranslation } from "react-i18next";

import { passwordRegex } from "src/shared/config/regex";
import { RegistrationFormFields } from "./RegistrationForm";

export const useValidationSchema = (): yup.ObjectSchema<RegistrationFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    fullname: yup.string().required(t("validation.required-field")),
    email: yup.string().email(t("validation.email-invalid-format")).required(t("validation.required-field")),
    password: yup
      .string()
      .matches(passwordRegex, t("validation.required-field") + " (!@#$%^&*()_+\\/.-~)")
      .required(t("validation.required-field"))
  });
};
