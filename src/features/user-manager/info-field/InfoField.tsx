import { FC } from "react";

import { Stack, Box, Typography } from "@mui/material";

import "./InfoField.scss";

export type InfoFieldProps = {
  title?: string;
  value: string;
};

const InfoField: FC<InfoFieldProps> = ({ title, value }) => {
  return (
    <Stack className="info-field">
      {title && (
        <Typography variant="caption" className="info-field__title">
          {title}
        </Typography>
      )}
      <Box className="info-field__value">{value}</Box>
    </Stack>
  );
};

export default InfoField;
