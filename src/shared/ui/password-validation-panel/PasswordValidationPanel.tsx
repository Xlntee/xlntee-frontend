import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, useTheme } from "@mui/material";

type PasswordValidationPanelProps = {
  isError?: boolean;
};

const PasswordValidationPanel: FC<PasswordValidationPanelProps> = ({ isError = false }) => {
  const theme = useTheme();
  const { t } = useTranslation("auth");

  return (
    <Box
      className="password-validation-panel"
      bgcolor={isError ? theme.palette.warning.light : theme.palette.grey["100"]}
      borderRadius="4px"
      p="8px"
    >
      <Typography variant="caption" fontWeight={300} color="text.secondary">
        {t("password-requirements")} !@#$%^&*()_+/\.-~
      </Typography>
    </Box>
  );
};

export default PasswordValidationPanel;
