import * as yup from "yup";
import { PriceFormFields } from "./Price";

export const useValidationSchema = (): yup.ObjectSchema<PriceFormFields> => {
  return yup.object().shape({
    paid: yup.boolean().oneOf([true]).required(),
    price: yup.string().required(),
    discount: yup
      .string()
      .matches(/^-?\d+$/)
      .required(),
    promoCode: yup.string().required()
  });
};
