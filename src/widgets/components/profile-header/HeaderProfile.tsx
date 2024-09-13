import { FC, useState } from "react";

import { Box, Container, Stack, Button, Badge } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { MenuToggler, Navigation, NavigationDrawer, NavigationLinkType } from "src/features";

import { Tools, User } from "./ui";

import "./HeaderProfile.scss";

type HeaderProfileProps = {
  children?: React.ReactNode;
  type: "teacher" | "student";
};

const navList: NavigationLinkType[] = [
  {
    id: "1",
    name: "Courses",
    path: "/",
    icon: <VideocamIcon />,
    type: "link",
  },
  {
    id: "2",
    name: "Statistic",
    path: "/",
    icon: <EqualizerIcon />,
    type: "link",
  },
  {
    id: "3",
    name: "Billing",
    path: "/",
    icon: <CreditCardIcon />,
    type: "link",
  },
  {
    id: "4",
    name: "Support",
    path: "/",
    icon: <HelpOutlineIcon />,
    type: "link",
  },
  {
    id: "5",
    name: "Pricing Plans",
    path: "/",
    type: "action",
  },
];

const courseNavList: NavigationLinkType[] = [
  {
    id: "1",
    name: "My Learning",
    path: "/",
    icon: <VideocamIcon />,
    type: "link",
  },
  {
    id: "2",
    name: "Completed Courses",
    path: "/",
    icon: <DoneOutlineIcon />,
    type: "link",
  },
  {
    id: "3",
    name: "Certificates",
    path: "/",
    icon: <LocalActivityIcon />,
    type: "link",
  },
  {
    id: "4",
    name: "Support",
    path: "/",
    icon: <HelpOutlineIcon />,
    type: "link",
  },
];

const HeaderProfile: FC<HeaderProfileProps> = ({ children, type }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  function onClose() {
    setOpen(false);
  }

  function getNavigation() {
    if (type === "student") {
      return navList;
    }
    return courseNavList;
  }

  return (
    <Box component="header" className="header-profile">
      <Container className="header-profile__container">
        <Box className="header-profile__logo">
          <img src="/assets/x-logo-modal-extend.png" />
        </Box>
        <Box className="header-profile__nav">
          <Box className="header-profile__nav-left">
            <Navigation items={getNavigation()} />
          </Box>
          <Box className="header-profile__nav-center">{children}</Box>
          <Stack direction="row" alignItems="center" gap="10px" className="header-profile__nav-right">
            <Stack direction="row" alignItems="center" gap="10px">
              {type === "student" && <Tools />}
              <Button variant="black-text">
                <Badge variant="dot" color="primary">
                  <NotificationsNoneIcon />
                </Badge>
              </Button>
              <User />
            </Stack>
            <MenuToggler active={open} onClick={toggleDrawer} />
          </Stack>
        </Box>
      </Container>
      <NavigationDrawer navigationList={getNavigation()} open={open} onClose={onClose} />
    </Box>
  );
};

export default HeaderProfile;
