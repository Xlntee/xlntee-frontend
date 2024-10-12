import * as yup from "yup";

import { passwordRegex } from "src/shared/utils/const";

export const validationSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  new_password: yup
    .string()
    .notOneOf(["password"], "New email should not be the same as the old email")
    .matches(
      passwordRegex,
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*()_+\\/.-~)"
    )
    .required("Password is required"),
  confirm_password: yup.string().oneOf([yup.ref("new_password")], "Passwords must match")
});

export type FormValues = yup.InferType<typeof validationSchema>;
