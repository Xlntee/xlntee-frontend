import * as yup from "yup";
import { useTranslation } from "react-i18next";

import { passwordRegex } from "src/shared/utils/const";

export type PasswordUpdateFormValues = {
  password: string;
  new_password: string;
  confirm_password?: string;
};

export const useValidationSchema = (): yup.ObjectSchema<PasswordUpdateFormValues> => {
  const { t } = useTranslation("auth");

  return yup.object().shape({
    password: yup.string().required(t("validation.password")),
    new_password: yup
      .string()
      .notOneOf(["password"], t("validation.confirm-password"))
      .matches(passwordRegex, t("validation.confirm-password-requirements") + " (!@#$%^&*()_+\\/.-~)")
      .required(t("validation.password")),
    confirm_password: yup.string().oneOf([yup.ref("new_password")], t("validation.passwords-match"))
  });
};
