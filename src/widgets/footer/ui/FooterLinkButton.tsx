import { FC, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Button } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

interface FooterLinkButtonProps {
  path: string;
  children: ReactNode;
}

const FooterLinkButton: FC<FooterLinkButtonProps> = ({ path, children }) => {
  const isMailto = path.startsWith("mailto:");

  return (
    <Button
      component={isMailto ? "a" : RouterLink}
      href={isMailto ? path : undefined}
      to={!isMailto ? path : undefined}
      sx={{
        fontSize: "14px !important",
        fontWeight: 400,
        color: XlnteeColors.LinkColor,
        minHeight: "initial !important",
        p: 0
      }}
    >
      {children}
    </Button>
  );
};

export default FooterLinkButton;
