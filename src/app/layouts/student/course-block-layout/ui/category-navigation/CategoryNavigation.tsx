import { FC, ReactNode } from "react";

import { Box, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "./CategoryNavigation.scss";

export type CategoryType = "file" | "video" | "quiz";

export type CategoryLinkType = {
  id: string;
  type: CategoryType;
  title: string;
  href: string;
  completed: boolean;
};

type CategoryNavigationProps = {
  items: CategoryLinkType[];
};

const CategoryNavigation: FC<CategoryNavigationProps> = ({ items }) => {
  const theme = useTheme();

  function getIconRelateOnType(type: CategoryType): ReactNode {
    if (type === "file") {
      return <InsertDriveFileIcon />;
    }
    if (type === "quiz") {
      return <HelpCenterIcon />;
    }
    if (type === "video") {
      return <VideocamIcon />;
    }
  }

  return (
    <Box className="category-navigation">
      <List>
        {items.map((item) => (
          <ListItemButton key={item.id} className="category-navigation__button">
            {item.completed && (
              <ListItemIcon
                className="category-navigation__check"
                sx={{
                  color: theme.palette.primary.contrastText
                }}
              >
                <CheckCircleOutlineIcon />
              </ListItemIcon>
            )}
            <ListItemIcon
              className="category-navigation__icon"
              sx={{
                color: theme.palette.primary.contrastText
              }}
            >
              {getIconRelateOnType(item.type)}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              className="category-navigation__text"
              sx={{
                color: theme.palette.primary.contrastText,
                "& .MuiTypography-root": {
                  color: "currentColor"
                }
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default CategoryNavigation;
