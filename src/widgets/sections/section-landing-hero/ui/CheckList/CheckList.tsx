import { List, ListItem, Typography } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "./CheckList.scss";

interface CheckListProps {
  items: string[];
}

const CheckList = ({ items }: CheckListProps) => {
  return (
    <List className="check-list">
      {items.map((item, index) => (
        <ListItem key={index} className="check-list__item">
          <CheckCircleOutlineIcon />
          <Typography variant="body1">{item}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default CheckList;
