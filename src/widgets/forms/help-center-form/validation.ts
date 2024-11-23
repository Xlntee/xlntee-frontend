import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { HelpCenterFormValues } from "./HelpCenterForm";

export const useValidationSchema = (): yup.ObjectSchema<HelpCenterFormValues> => {
  const { t } = useTranslation("auth");

  return yup.object().shape({
    support: yup.string().required(t("validation.required-field"))
  });
};
