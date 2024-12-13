import { FC } from "react";

import { Stack, Typography, Link } from "@mui/material";

import "./ContactList.scss";

type ContactLinksProps = {
  items: ContactLinkType[];
};

export type ContactLinkType = {
  title: string;
  link: string;
};

const ContactLinks: FC<ContactLinksProps> = ({ items }) => {
  return (
    <Stack direction="row" className="contact-list">
      {items.map((item, index) => (
        <Stack key={index} direction={{ sm: "row" }} alignItems="center" gap={1} className="contact-list__item">
          <Typography variant="body2">{item.title}</Typography>
          <Link variant="body2" href={item.link}>
            {item.link}
          </Link>
        </Stack>
      ))}
    </Stack>
  );
};

export default ContactLinks;
