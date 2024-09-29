import * as yup from "yup";

export const validationSchema = (oldEmail: string) =>
  yup.object().shape({
    new_email: yup
      .string()
      .email("Invalid email format")
      .notOneOf([oldEmail], "New email should not be the same as the old email")
      .required("New email is required"),
    confirm_email: yup
      .string()
      .oneOf([yup.ref("new_email")], "Emails must match")
      .required("Confirm email is required"),
  });

export type FormValues = {
  new_email: string;
  confirm_email: string;
};
