import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, Paper } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

import "./StatisticCard.scss";

export interface StatisticCardProps {
  title: string;
  totalValue?: number;
  lastMonthValue?: number;
}

const StatisticCard: FC<StatisticCardProps> = ({ title, totalValue, lastMonthValue }) => {
  const { t } = useTranslation("user-manager");

  return (
    <Paper elevation={14} className="statistic-card">
      <Typography variant="h6" className="statistic-card__title" fontSize={{ xs: "16px", lg: "20px" }} fontWeight={400}>
        {title}
      </Typography>
      <Box className="statistic-card__total-value" textAlign="center" fontSize="48px">
        {totalValue}
      </Box>
      <Typography
        className="statistic-card__text"
        fontSize={{ xs: "16px", lg: "20px" }}
        fontWeight={400}
        color={XlnteeColors.GrayColor600}
      >
        {t("statistic.text")}{" "}
        <Typography variant="caption" fontSize={{ xs: "16px", lg: "20px" }} fontWeight={700}>
          {lastMonthValue}
        </Typography>
      </Typography>
    </Paper>
  );
};

export default StatisticCard;
