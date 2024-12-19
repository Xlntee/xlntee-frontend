import { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";

import "./PasswordValidationPanel.scss";

type PasswordValidationPanelProps = {
  isError?: boolean;
};

const PasswordValidationPanel: FC<PasswordValidationPanelProps> = ({ isError = false }) => {
  const { t } = useTranslation("auth");

  return (
    <Box
      className={cn("password-validation-panel", {
        "password-validation-panel--has-error": isError
      })}
      borderRadius="4px"
      p="8px"
    >
      <Typography variant="caption" fontWeight={300} color="text.primary">
        {t("password-requirements")} !@#$%^&*()_+/\.-~
      </Typography>
    </Box>
  );
};

export default PasswordValidationPanel;
