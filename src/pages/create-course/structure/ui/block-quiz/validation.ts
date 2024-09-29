import * as yup from "yup";
import { validationSchema } from "../quiz-answer-list/validation";

export const testConfigurationSingleValidationSchema = yup.object({
  customId: yup.string().required(),
  question: yup.string().required("Question is required"),
  variants: yup.array().of(validationSchema),
  // .test("At least one answer must be true", (items) => items?.some((item) => item.answer === true)),
});

export type TestConfiguratonSingleFormValues = yup.InferType<typeof testConfigurationSingleValidationSchema>;
