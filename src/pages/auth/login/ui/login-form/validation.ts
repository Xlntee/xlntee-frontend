import { useTranslation } from "react-i18next";
import * as yup from "yup";

import { LoginFormFields } from "./LoginForm";

export const useValidationSchema = (): yup.ObjectSchema<LoginFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    email: yup.string().email(t("validation.email-invalid-format")).required(t("validation.required-field")),
    password: yup.string().required(t("validation.required-field"))
  });
};
