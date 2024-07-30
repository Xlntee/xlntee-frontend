import { Typography, TypographyProps } from "@mui/material";
import React from "react";

type FooterTextComponentProps = TypographyProps;

const FooterTextComponent: React.FC<FooterTextComponentProps> = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Noto Sans",
        fontWeight: 300,
        fontSize: "16px",
        color: "#fff",
        textAlign: "left",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default FooterTextComponent;
