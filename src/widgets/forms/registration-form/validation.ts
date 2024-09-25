import * as yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\/\\.\-~])[A-Za-z\d!@#$%^&*()_+\/\\.\-~]{8,}$/;

export const validationSchema = yup.object().shape({
  email: yup.string().email("Wrong email").required("Email is required"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*()_+\\/.-~)",
    )
    .required("Password is required"),
  confirm_password: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
  agreement: yup.boolean().oneOf([true], "You must accept the terms and conditions").required(),
});

export type RegistrationFormValues = yup.InferType<typeof validationSchema>;
