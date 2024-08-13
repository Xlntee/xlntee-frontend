import { Stack, Typography } from "@mui/material";
import React from "react";
import { XlnteeColors } from "src/shared/themes/colors";

interface ContactItemProps {
  caption: string;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ caption, link }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography variant="body1" sx={{ fontWeight: 400, color: `${XlnteeColors.BlackElementColor}` }}>
        {caption}
      </Typography>
      <Typography
        variant="body1"
        component="a"
        href={`mailto:${link}`}
        sx={{ fontWeight: 400, color: `${XlnteeColors.LinkColor}` }}
      >
        {link}
      </Typography>
    </Stack>
  );
};

export default ContactItem;
