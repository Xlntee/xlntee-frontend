import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import { Box, FormLabel, Divider, Stack, Typography, Grid, Button } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { XlnteeColors } from "src/shared/themes/colors";
import { RootForm } from "src/widgets/forms";
import { CheckboxField, TextField } from "src/features/form-fields";

import { defaultValuesForm } from "./initialDate";
import { BlockPromoCodes } from "./ui";
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

const PricePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
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
    <Box>
      <Box mb="20px">
        <Typography variant="h6" mb="8px">
          {t("price.title")}
        </Typography>
        <Divider />
      </Box>
      <RootForm methods={methods} onSubmit={onSubmit}>
        <Grid container columnSpacing="20px" rowGap="20px">
          <Grid item xs={12} md={6}>
            <CheckboxField name="paid" label={t("price.checkbox-label")} className="field-box" />
            <FormLabel className="field-box">
              <Typography mb="8px" className="field-box__title">
                {t("price.price-field-label")}
              </Typography>
              <TextField
                name="price"
                variant="outlined"
                fullWidth
                placeholder={`${t("price.price-field-placeholder")}...`}
              />
            </FormLabel>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box borderRadius="20px" padding="10px 20px" bgcolor={XlnteeColors.LightElementColor}>
              <Typography variant="h6" color={XlnteeColors.BlackElementColor}>
                {t("price.info-box-title")}
              </Typography>
              <Typography fontWeight={300} fontSize="14px !important" color={XlnteeColors.GrayColor600}>
                {t("price.info-box-text")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mb="20px">
          <BlockPromoCodes />
        </Box>
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }} mb="20px">
          <Button type="submit" variant="black-contain" size="medium" sx={{ minWidth: "190px" }}>
            {tCommon("button-save")}
          </Button>
          <Button variant="black-text" size="medium">
            {tCommon("button-discard-changes")}
          </Button>
        </Stack>
      </RootForm>
    </Box>
  );
};

export default PricePage;
