import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, Grid } from "@mui/material";

import { InfoField } from "src/features/user-manager";

export type CourseProps = {
  id: string;
  date: string;
  amount: string;
  appointment: string;
  cardNumber: string;
  status: string;
};

const UserWallet: FC = () => {
  const { t } = useTranslation("user-manager");

  return (
    <Box>
      <Typography variant="h6" fontWeight={400} mb="20px" pl="10px">
        {t("user-wallet.title")}
      </Typography>
      <Grid container spacing={{ xs: "20px", md: "30px" }}>
        <Grid item xs={12} sm={6}>
          <InfoField title={t("user-wallet.availableAmount")} value="12,100" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InfoField title={t("user-wallet.availableAmountRefferals")} value="900" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserWallet;
