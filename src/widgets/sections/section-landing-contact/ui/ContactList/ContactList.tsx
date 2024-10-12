import { FC } from "react";

import { Stack, Typography, Link } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

import "./ContactList.scss";

interface ContactLinksProps {
  items: ContactLinkType[];
}

export type ContactLinkType = {
  title: string;
  link: string;
};

const ContactLinks: FC<ContactLinksProps> = ({ items }) => {
  return (
    <Stack direction="row" className="contact-list">
      {items.map((item, index) => (
        <Stack key={index} direction={{ sm: "row" }} alignItems="center" gap={1} className="contact-list__item">
          <Typography variant="body2" color={XlnteeColors.BlackElementColor}>
            {item.title}
          </Typography>
          <Link variant="body2" href={item.link}>
            {item.link}
          </Link>
        </Stack>
      ))}
    </Stack>
  );
};

export default ContactLinks;
