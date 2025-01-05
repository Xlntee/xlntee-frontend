import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { HelpCenterFormFields } from "./HelpCenterForm";

export const useValidationSchema = (): yup.ObjectSchema<HelpCenterFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    support: yup.string().required(t("validation.required-field"))
  });
};
