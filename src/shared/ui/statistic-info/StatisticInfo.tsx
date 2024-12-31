import { FC } from "react";

import { Box, Typography } from "@mui/material";

import "./StatisticInfo.scss";

type StatisticInfoProps = {
  text: string;
  value: string;
};

const StatisticInfo: FC<StatisticInfoProps> = ({ text, value }) => {
  return (
    <Box className="statistic-info">
      <Typography variant="h3" className="statistic-info__value" color="grey.900">
        {value}
      </Typography>
      <Typography className="statistic-info__text" fontWeight={300} color="grey.900">
        {text}
      </Typography>
    </Box>
  );
};

export default StatisticInfo;
