import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { PasswordUpdateFormFields } from "./PasswordUpdateForm";
import { passwordRegex } from "src/shared/config/regex";

export const useValidationSchema = (): yup.ObjectSchema<PasswordUpdateFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    password: yup.string().required(t("validation.required-field")),
    new_password: yup
      .string()
      .notOneOf([yup.ref("password")], t("validation.confirm-password"))
      .matches(passwordRegex, t("validation.passwords-match") + " (!@#$%^&*()_+\\/.-~)")
      .required(t("validation.required-field")),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("new_password")], t("validation.passwords-match"))
      .required()
  });
};
