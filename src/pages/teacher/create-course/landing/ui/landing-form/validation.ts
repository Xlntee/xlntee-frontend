import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { LandingFormFields } from "./LandingForm";

export const useValidationSchema = (): yup.ObjectSchema<LandingFormFields> => {
  const { t } = useTranslation("teacher-create-course");

  return yup.object().shape({
    subjects: yup
      .array()
      .of(yup.string().required(t("landing.validation.subjects")))
      .min(1, t("landing.validation.subjects-requirements")),
    requirements: yup
      .array()
      .of(yup.string().required(t("landing.validation.requirements")))
      .min(1, t("landing.validation.requirements-requirements")),
    description: yup.string().required(t("landing.validation.description")),
    image: yup.string().required(t("landing.validation.image")),
    video: yup.string().required(t("landing.validation.video"))
  });
};
