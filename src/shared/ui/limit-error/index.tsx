import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Stack, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

type LimitErrorProps = {
  message: string;
};

const LimitError: FC<LimitErrorProps> = ({ message }) => {
  const { t } = useTranslation("teacher-create-course");

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap="10px" className="error-limits">
      <ErrorOutlineOutlinedIcon color="error" />
      <Typography variant="body2" fontWeight={300} color="text.secondary">
        {message} {""}
        <RouterLink to="#">
          <Typography variant="body2" component="span" color="text.secondary">
            {t("change-plan")}
          </Typography>
        </RouterLink>
      </Typography>
    </Stack>
  );
};
export default LimitError;
