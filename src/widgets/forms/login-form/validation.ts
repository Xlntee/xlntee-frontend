import { useTranslation } from "react-i18next";
import * as yup from "yup";

import { LoginFormFields } from "./LoginForm";

export const useValidationSchema = (): yup.ObjectSchema<LoginFormFields> => {
  const { t } = useTranslation("auth");

  return yup.object().shape({
    // email: yup.string().email(t("validation.email-invalid-format")).required(t("validation.email")),
    email: yup.string().required(),
    password: yup.string().required(t("validation.password"))
  });
};
