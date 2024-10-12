import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup.string().email("Wrong email").required("Email is required"),
  password: yup.string().required("Password is required")
});

export type LoginFormValues = yup.InferType<typeof validationSchema>;
