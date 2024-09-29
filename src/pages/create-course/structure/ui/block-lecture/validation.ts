import * as yup from "yup";
import { testConfigurationSingleValidationSchema } from "../block-quiz/validation";

export const lectureSingleValidationSchema = yup.object({
  customId: yup.string().required(),
  title: yup.string().required("Lecture name is required"),
  description: yup.string(),
  video: yup.string().notRequired(),
  files: yup.array().of(yup.string()).notRequired(),
  testConfigurations: yup.array().of(testConfigurationSingleValidationSchema).notRequired(),
});

const lecturesArrayValidationSchema = yup.object({
  lectures: yup.array().of(lectureSingleValidationSchema),
});

export type LectureSingleFormValues = Required<yup.InferType<typeof lectureSingleValidationSchema>>;
export type LecturesArrayFormValues = Required<yup.InferType<typeof lecturesArrayValidationSchema>>;
