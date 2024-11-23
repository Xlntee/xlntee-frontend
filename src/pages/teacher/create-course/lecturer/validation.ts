import * as yup from "yup";
import { useTranslation } from "react-i18next";

export type LectureFormValues = {
  username: string;
  tags?: string[];
};

export const useValidationSchema = (): yup.ObjectSchema<LectureFormValues> => {
  const { t } = useTranslation("teacher-create-course");

  return yup.object().shape({
    username: yup.string().required(t("lecturer.validation.username")),
    tags: yup
      .array()
      .of(yup.string().required(t("lecturer.validation.tags")))
      .min(1, t("lecturer.validation.tags-requirements"))
  });
};
