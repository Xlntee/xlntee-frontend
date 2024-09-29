import { FC } from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();

  return (
    <Box component="nav" className="navigation">
      <List className="navigation__list">
        {items.map(({ id, path, name, icon, type }) => {
          if (type === "link") {
            return (
              <ListItem key={id} className="navigation__item">
                <Link to={path} className={cn("navigation__link", { active: pathname === path })}>
                  <Box component="span" className="navigation__icon">
                    {icon}
                  </Box>
                  <Typography variant="caption" className="navigation__name">
                    {name}
                  </Typography>
                </Link>
              </ListItem>
            );
          }
          return (
            <ListItem key={id} className="navigation__item">
              <Link to="/" className="navigation__link">
                <Typography variant="caption" className="navigation__action">
                  {name}
                </Typography>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
