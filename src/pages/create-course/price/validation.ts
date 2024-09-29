import * as yup from "yup";

export default yup.object().shape({
  paid: yup.boolean().nullable().notRequired(),
  price: yup.string().nullable().notRequired(),
});
