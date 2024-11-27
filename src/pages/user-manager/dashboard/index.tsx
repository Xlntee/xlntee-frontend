import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Grid } from "@mui/material";

import { StatisticCard, StatisticCardProps } from "src/features/user-manager";

const DashboardPage: FC = () => {
  const { t } = useTranslation("user-manager");
  const data: StatisticCardProps[] = [
    {
      title: t("statistic.subscriptions"),
      totalValue: 1.234,
      lastMonthValue: 43
    },
    {
      title: t("statistic.subscriptionsTotalAmount"),
      totalValue: 12.345,
      lastMonthValue: 43
    },
    {
      title: t("statistic.saleCoursesTotalAmount"),
      totalValue: 123,
      lastMonthValue: 12
    },
    {
      title: t("statistic.complainsOnCourse"),
      totalValue: 12,
      lastMonthValue: 3
    },
    {
      title: t("statistic.refund"),
      totalValue: 10,
      lastMonthValue: 2
    },
    {
      title: t("statistic.canceledSubscriptions"),
      totalValue: 13,
      lastMonthValue: 3
    },
    {
      title: t("statistic.teachers"),
      totalValue: 100,
      lastMonthValue: 12
    },
    {
      title: t("statistic.students"),
      totalValue: 52,
      lastMonthValue: 9
    }
  ];

  return (
    <Box component="section" py="40px">
      <Container>
        <Grid container spacing="20px">
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} display="flex">
              <StatisticCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardPage;
