import { FC } from "react";

import { Typography, List, ListItem } from "@mui/material";

import "./ListRequirements.scss";

type ListRequirementsProps = {
  items: {
    title: string;
    value: string;
  }[];
};

const ListRequirements: FC<ListRequirementsProps> = ({ items }) => {
  return (
    <List className="list-requirements">
      {items.map(({ title, value }, index) => (
        <ListItem key={index}>
          <Typography variant="body2" className="list-requirements__text">
            {title}
            <Typography component="span" variant="body2" fontWeight={300} className="list-requirements__text-value">
              {value}
            </Typography>
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default ListRequirements;
