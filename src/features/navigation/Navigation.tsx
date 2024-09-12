import { FC } from "react";
import { NavLink } from "react-router-dom";

import { Box, List, ListItem, Typography } from "@mui/material";

import "./Navigation.scss";

type NavigationProps = {
  items: NavigationLinkType[];
};

export type NavigationLinkType = {
  id: string;
  path: string;
  name: string;
  icon?: React.ReactNode;
  type: "link" | "action";
};

const Navigation: FC<NavigationProps> = ({ items }) => {
  return (
    <Box component="nav" className="navigation">
      <List className="navigation__list">
        {items.map(({ id, path, name, icon, type }) => {
          if (type === "link") {
            return (
              <ListItem key={id} className="navigation__item">
                <NavLink to={path} className="navigation__link">
                  <Box component="span" className="navigation__icon">
                    {icon}
                  </Box>
                  <Typography variant="caption" className="navigation__name">
                    {name}
                  </Typography>
                </NavLink>
              </ListItem>
            );
          }
          return (
            <ListItem className="navigation__item">
              <NavLink to="/" className="navigation__link">
                <Typography variant="caption" className="navigation__action">
                  {name}
                </Typography>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
