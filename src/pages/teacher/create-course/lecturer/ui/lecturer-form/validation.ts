import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { LectureFormFields } from "./LecturerForm";

export const useValidationSchema = (): yup.ObjectSchema<LectureFormFields> => {
  const { t } = useTranslation("common");

  return yup.object().shape({
    username: yup.string().required(t("validation.required-field")),
    tags: yup
      .array()
      .of(yup.string().required(t("validation.required-field")))
      .min(1, t("validation.items-requirements"))
  });
};
