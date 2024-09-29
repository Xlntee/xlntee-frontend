import * as yup from "yup";

export const validationSchema = yup.object({
  customId: yup.string().required(),
  title: yup.string().required("Answer is required"),
  answer: yup.boolean(),
});

export const variantsValidationSchema = yup.object({
  variants: yup.array().of(validationSchema).required(),
});

const variants = yup.array().required().of(validationSchema).required();

// TestConfiguratonSingleFormValues
export type VariantSingleFormValues = yup.InferType<typeof validationSchema>;
export type FormValuesVariantsArr = yup.InferType<typeof variants>;
export type FormValuesVariants = yup.InferType<typeof variantsValidationSchema>;
