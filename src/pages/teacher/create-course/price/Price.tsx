import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, FormLabel, Divider, Stack, Typography, Grid, Button, useTheme } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { RootForm } from "src/widgets/forms";
import { CheckboxField, TextField } from "src/features/form-fields";

import { defaultValuesForm } from "./initialDate";
import BlockPromoCodes from "./ui/block-promo-codes";
import { PromoCodeCreateFormFields } from "./ui/promo-code-create";
import { useValidationSchema } from "./validation";

export type PriceFormFields = PromoCodeCreateFormFields & {
  paid: boolean;
  price: string;
};

const PricePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const theme = useTheme();
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  const methods = useForm<PriceFormFields>({
    resolver: yupResolver(useValidationSchema()),
    defaultValues: defaultValuesForm,
    mode: "onSubmit"
  });
  const { trigger } = methods;

  function onSubmit(): void {
    trigger([]);
  }

  return (
    <Box>
      <Box mb="20px">
        <Typography variant="h6" mb="8px">
          {t("price.title")}
        </Typography>
        <Divider />
      </Box>
      <RootForm methods={methods}>
        <Grid container columnSpacing="20px" rowGap="20px" flexDirection={{ md: "row-reverse" }} mb="20px">
          <Grid item xs={12} md={6}>
            <Box borderRadius="20px" padding="10px 20px" bgcolor={theme.palette.grey["100"]}>
              <Typography variant="h6">{t("price.info-box-title")}</Typography>
              <Typography fontWeight={300} fontSize="14px !important" color={theme.palette.grey["400"]}>
                {t("price.info-box-text")}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack gap="20px">
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
            </Stack>
          </Grid>
        </Grid>
        <Box mb="20px">
          <BlockPromoCodes />
        </Box>
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }} mb="20px">
          <Button onClick={onSubmit} variant="black-contain" size="medium" sx={{ minWidth: "190px" }}>
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
