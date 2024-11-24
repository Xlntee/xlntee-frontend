import * as yup from "yup";
import { useTranslation } from "react-i18next";

import { passwordRegex } from "src/shared/utils/const";
import { PasswordUpdateFormValues } from "./AuthPasswordUpdateForm";

export const useValidationSchema = (): yup.ObjectSchema<PasswordUpdateFormValues> => {
  const { t } = useTranslation("auth");

  return yup.object().shape({
    email: yup.string().email(t("validation.email-invalid-format")).required(t("validation.email")),
    password: yup.string().required(t("validation.password")),
    confirm_password: yup
      .string()
      .notOneOf(["password"], t("validation.confirm-password"))
      .matches(passwordRegex, t("validation.confirm-password-requirements") + " (!@#$%^&*()_+\\/.-~)")
      .required(t("validation.password"))
  });
};
