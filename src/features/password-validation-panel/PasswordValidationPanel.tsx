import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

interface PasswordValidationPanelProps {
  isError?: boolean;
}

const PasswordValidationPanel: FC<PasswordValidationPanelProps> = ({ isError = false }) => {
  const { t } = useTranslation("auth");

  return (
    <Box bgcolor={isError ? XlnteeColors.ErrorLightColor : XlnteeColors.LightElementColor} borderRadius="4px" p="8px">
      <Typography
        variant="caption"
        color={isError ? XlnteeColors.ErrorDarkColor : XlnteeColors.GrayColor700}
        fontWeight={300}
      >
        {t("password-requirements")} !@#$%^&*()_+/\.-~
      </Typography>
    </Box>
  );
};

export default PasswordValidationPanel;
