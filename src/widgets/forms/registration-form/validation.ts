import * as yup from "yup";

import { passwordRegex } from "src/shared/utils/const";

export const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Wrong email").required("Email is required"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*()_+\\/.-~)"
    )
    .required("Password is required")
});

export type RegistrationFormValues = yup.InferType<typeof validationSchema>;
