import * as yup from "yup";

import { passwordRegex } from "src/shared/utils/const";

export const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .notOneOf(["password"], "New email should not be the same as the old email")
    .matches(
      passwordRegex,
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*()_+\\/.-~)",
    )
    .required("Password is required"),
});

export type FormValues = yup.InferType<typeof validationSchema>;
