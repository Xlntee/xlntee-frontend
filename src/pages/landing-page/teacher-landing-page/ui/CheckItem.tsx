import { Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { XlnteeColors } from "src/shared/themes/colors";

interface CheckItemProps {
  children: ReactNode;
}

const CheckItem: React.FC<CheckItemProps> = ({ children }) => {
  return (
    <Stack direction="row" alignItems="center" gap="5px">
      <CheckCircleOutlineIcon sx={{ fontSize: "20px" }} />
      <Typography
        sx={{ fontFamily: "Noto Sans", fontWeight: 400, fontSize: "20px", color: XlnteeColors.BlackTextColor, whiteSpace: 'nowrap' }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default CheckItem;
