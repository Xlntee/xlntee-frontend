import { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import "./CheckboxOption.scss";

interface CheckboxOptionProps {
  value: string;
  label: string;
  [x: string]: any;
}

const CheckboxOption = forwardRef<HTMLInputElement, CheckboxOptionProps>(({ value, label, ...rest }, ref) => {
  return (
    <Box className="checkbox-option">
      <input type="checkbox" ref={ref} value={value} {...rest} />
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
});

export default CheckboxOption;
