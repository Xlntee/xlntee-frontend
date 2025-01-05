import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { LandingFormFields } from "./LandingForm";

export const useValidationSchema = (): yup.ObjectSchema<LandingFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    subjects: yup
      .array()
      .of(yup.string().required(t("validation.required-field")))
      .min(1, t("validation.items-requirements")),
    requirements: yup
      .array()
      .of(yup.string().required(t("validation.required-field")))
      .min(1, t("validation.items-requirements")),
    description: yup.string().required(t("validation.required-field")),
    image: yup.string().required(t("validation.required-field")),
    video: yup.string().required(t("validation.required-field"))
  });
};
