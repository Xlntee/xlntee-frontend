import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import { FormLabel, Stack, Typography, Button } from "@mui/material";

import { RootForm } from "src/widgets/forms";
import { CheckboxField, TextField } from "src/shared/ui/form-fields";

import { defaultValuesForm } from "./initialData";
import { yupResolver } from "@hookform/resolvers/yup";

export type PriceFormFields = {
  paid: boolean;
  price: string;
};

const useValidationSchema = (): yup.ObjectSchema<PriceFormFields> => {
  return yup.object().shape({
    paid: yup.boolean().oneOf([true], "Error").required(),
    price: yup.string().required("Required !!!")
  });
};

const PriceForm: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  const methods = useForm<PriceFormFields>({
    resolver: yupResolver(useValidationSchema()),
    defaultValues: defaultValuesForm,
    mode: "onSubmit"
  });

  function onSubmit(data: PriceFormFields): void {
    console.log(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <CheckboxField name="paid" label={t("price.checkbox-label")} className="field-box" />
      <FormLabel className="field-box">
        <Typography className="field-box__title" mb="8px">
          {t("price.price-field-label")}
        </Typography>
        <TextField name="price" variant="outlined" fullWidth placeholder={`${t("price.price-field-placeholder")}...`} />
      </FormLabel>
      <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }} mb="20px">
        <Button type="submit" variant="black-contain" size="medium" sx={{ minWidth: "190px" }}>
          {tCommon("button-save")}
        </Button>
        <Button variant="black-text" size="medium">
          {tCommon("button-discard-changes")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default PriceForm;
