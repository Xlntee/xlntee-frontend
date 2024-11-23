import { useTranslation } from "react-i18next";
import * as yup from "yup";

export type LoginFormValues = {
  email: string;
  password: string;
};

export const useValidationSchema = (): yup.ObjectSchema<LoginFormValues> => {
  const { t } = useTranslation("auth");

  return yup.object().shape({
    email: yup.string().email(t("validation.email-invalid-format")).required(t("validation.email")),
    password: yup.string().required(t("validation.password"))
  });
};
