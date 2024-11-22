import * as yup from "yup";
import { lectureSingleValidationSchema } from "../block-lecture/validation";

export const lessonSingleValidationSchema = yup.object().shape({
  customId: yup.string().required(),
  title: yup.string().required("Title is required"),
  lectures: yup.array().of(lectureSingleValidationSchema),
  free: yup.boolean().default(false)
});

export type LessonSingleFormValues = yup.InferType<typeof lessonSingleValidationSchema>;
