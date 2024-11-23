import { useTranslation } from "react-i18next";
import * as yup from "yup";

export type GeneralFormValues = {
  title: string;
  description: string;
  tags?: string[];
  category: string;
  level: string;
  subcategory: string;
  language: string;
  certificate?: boolean | null;
};

export const useValidationSchema = (): yup.ObjectSchema<GeneralFormValues> => {
  const { t } = useTranslation("teacher-create-course");

  return yup.object().shape({
    title: yup.string().required(t("general.validation.title")),
    description: yup.string().required(t("general.validation.short-description")),
    tags: yup
      .array()
      .of(yup.string().required(t("general.validation.tags")))
      .min(1, t("general.validation.tags-requirements")),
    category: yup.string().required(t("general.validation.category")),
    level: yup.string().required(t("general.validation.level")),
    subcategory: yup.string().required(t("general.validation.subcategory")),
    language: yup.string().required(t("general.validation.language")),
    certificate: yup.boolean().nullable().notRequired()
  });
};
