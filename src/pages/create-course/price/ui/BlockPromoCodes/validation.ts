import * as yup from "yup";

export default yup.object().shape({
  discount: yup
    .string()
    .matches(/^-?\d+$/)
    .required("Must be a number"),
  promoCode: yup
    .string()
    .matches(/^-?\d+$/)
    .required("Must be a number"),
});
