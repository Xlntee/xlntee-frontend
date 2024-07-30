import { Typography, TypographyProps } from "@mui/material";
import React from "react";

type FooterCaptionComponentProps = TypographyProps;

const FooterCaptionComponent: React.FC<FooterCaptionComponentProps> = ({ children, sx, ...props }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Noto Sans",
        fontWeight: 700,
        fontSize: "17px",
        color: "#fff",
        textTransform: "uppercase",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default FooterCaptionComponent;
