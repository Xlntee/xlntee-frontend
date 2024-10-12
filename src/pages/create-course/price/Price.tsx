import { FC } from "react";
import { useForm } from "react-hook-form";
import yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, FormLabel, Divider, Checkbox, Stack, Typography, Grid, TextField, Button } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { XlnteeColors } from "src/shared/themes/colors";

import { defaultValuesForm } from "./initialData";
import validationSchema from "./validation";
import { BlockPromoCodes } from "./ui";

import "./Price.scss";

export type FormValues = yup.InferType<typeof validationSchema>;

const PricePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");

  const { handleSubmit, register } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(validationSchema)
  });

  function onSubmitForm(data: FormValues): void {
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
              <Typography className="field-box__title">{t("price.checkbox_label")}</Typography>
            </Stack>
          </FormLabel>
          <FormLabel className="field-box">
            <Typography mb="8px" className="field-box__title">
              {t("price.price_field_label")}
            </Typography>
            <TextField
              {...register("price")}
              variant="outlined"
              fullWidth
              placeholder={`${t("price.price_field_placeholder")}...`}
            />
          </FormLabel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box borderRadius="20px" padding="10px 20px" bgcolor={XlnteeColors.LightElementColor}>
            <Typography variant="h6" color={XlnteeColors.BlackElementColor}>
              {t("price.info_box_title")}
            </Typography>
            <Typography fontWeight={300} fontSize="14px !important" color={XlnteeColors.GrayColor600}>
              {t("price.info_box_text")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <BlockPromoCodes />
      <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }}>
        <Button variant="black-contain" size="medium" sx={{ minWidth: "190px" }} onClick={handleSubmit(onSubmitForm)}>
          {t("button_save")}
        </Button>
        <Button variant="black-text" size="medium">
          {t("button_discard_changes")}
        </Button>
      </Stack>
    </Box>
  );
};

export default PricePage;
