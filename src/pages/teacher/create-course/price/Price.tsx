import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, FormLabel, Divider, Stack, Typography, Grid, Button, useTheme } from "@mui/material";

import { PageProps } from "pages/type";
import useTitle from "src/shared/hooks/useTitle";
import { CheckboxField, TextField, RootForm } from "src/shared/ui";
import useInverseColor from "src/shared/hooks/useInverseColor";

import { PromoCodeCreateFormFields, BlockPromoCodes } from "./ui";
import { defaultValuesForm } from "./initialDate";
import { useValidationSchema } from "./validation";

export type PriceFormFields = PromoCodeCreateFormFields & {
  paid: boolean;
  price: string;
};

const PricePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const theme = useTheme();
  const { getInverseColor } = useInverseColor();
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
            <Box
              borderRadius="20px"
              padding="10px 20px"
              bgcolor={getInverseColor(theme.palette.grey["100"], "transparent")}
              border={`1px solid ${getInverseColor("transparent", theme.palette.grey["100"])}`}
            >
              <Typography variant="body2">{t("price.info-box-title")}</Typography>
              <Typography variant="caption" display="block">
                {t("price.info-box-text")}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack gap="20px">
              <Box className="field-box">
                <Stack direction="row" alignItems="center">
                  <CheckboxField
                    id="paid"
                    name="paid"
                    sx={{
                      mb: "4px"
                    }}
                  />
                  <FormLabel htmlFor="paid">{t("price.checkbox-label")}</FormLabel>
                </Stack>
              </Box>
              <FormLabel className="field-box">
                <Typography className="field-box__title" mb="8px">
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
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap="20px" mb="20px">
          <Button onClick={onSubmit} variant="contained" color="primary" size="large" sx={{ minWidth: "150px" }}>
            {tCommon("button-save")}
          </Button>
          <Button variant="dark-text" size="large" disabled>
            {tCommon("button-discard-changes")}
          </Button>
        </Stack>
      </RootForm>
    </Box>
  );
};

export default PricePage;
