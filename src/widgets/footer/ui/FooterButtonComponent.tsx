import { Typography, TypographyProps } from "@mui/material";
import React from "react";

type FooterButtonComponentProps = TypographyProps;

const FooterButtonComponent: React.FC<FooterButtonComponentProps> = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Noto Sans",
        fontWeight: 300,
        fontSize: "16px",
        color: "#fff",
        textAlign: "left",
        cursor: "pointer",
        transition: "color 0.3s ease",
        "&:hover": {
          color: "#ccc",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default FooterButtonComponent;
