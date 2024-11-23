import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, FormLabel, Divider, Checkbox, Stack, Typography, Grid, TextField, Button } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { XlnteeColors } from "src/shared/themes/colors";

import { defaultValuesForm } from "./initialData";
import { BlockPromoCodes } from "./ui";

import "./Price.scss";

export type PriceFormValues = {
  paid: boolean;
  price: string;
};

const PricePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  const { handleSubmit, register } = useForm<PriceFormValues>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm
  });

  function onSubmitForm(data: PriceFormValues): void {
    console.log(data);
  }

  return (
    <Box className="create-course-price">
      <Box>
        <Typography variant="h6" mb="8px">
          {t("price.title")}
        </Typography>
        <Divider />
      </Box>
      <Grid container columnSpacing="20px" rowGap="20px">
        <Grid item xs={12} md={6}>
          <FormLabel className="field-box">
            <Stack direction="row" alignItems="start" gap="10px">
              <Checkbox {...register("paid")} />
              <Typography className="field-box__title">{t("price.checkbox-label")}</Typography>
            </Stack>
          </FormLabel>
          <FormLabel className="field-box">
            <Typography mb="8px" className="field-box__title">
              {t("price.price-field-label")}
            </Typography>
            <TextField
              {...register("price")}
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
      <BlockPromoCodes />
      <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }}>
        <Button variant="black-contain" size="medium" sx={{ minWidth: "190px" }} onClick={handleSubmit(onSubmitForm)}>
          {tCommon("button-save")}
        </Button>
        <Button variant="black-text" size="medium">
          {tCommon("button-discard-changes")}
        </Button>
      </Stack>
    </Box>
  );
};

export default PricePage;
