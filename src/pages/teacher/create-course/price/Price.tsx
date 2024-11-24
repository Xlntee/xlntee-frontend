import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Divider, Typography, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { XlnteeColors } from "src/shared/themes/colors";
import { PriceForm } from "src/widgets/forms";

import { BlockPromoCodes } from "./ui";

export type PriceFormFields = {
  paid: boolean;
  price: string;
};

const PricePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");

  return (
    <Box>
      <Box mb="20px">
        <Typography variant="h6" mb="8px">
          {t("price.title")}
        </Typography>
        <Divider />
      </Box>
      <Grid container columnSpacing="20px" rowGap="20px" flexDirection={{ md: "row-reverse" }}>
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
        <Grid item xs={12} md={6}>
          <PriceForm />
        </Grid>
      </Grid>
      <BlockPromoCodes />
    </Box>
  );
};

export default PricePage;
