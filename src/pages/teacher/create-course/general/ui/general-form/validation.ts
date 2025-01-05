import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { GeneralFormFields } from "./GeneralForm";

export const useValidationSchema = (): yup.ObjectSchema<GeneralFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    title: yup.string().required(t("validation.required-field")),
    description: yup.string().required(t("validation.required-field")),
    tags: yup
      .array()
      .of(yup.string().required(t("validation.required-field")))
      .min(1, t("validation.items-requirements"))
      .required(),
    category: yup.string().required(t("validation.required-field")),
    level: yup.string().required(t("validation.required-field")),
    subcategory: yup.string().required(t("validation.required-field")),
    language: yup.string().required(t("validation.required-field")),
    certificate: yup.boolean().nullable().notRequired()
  });
};
