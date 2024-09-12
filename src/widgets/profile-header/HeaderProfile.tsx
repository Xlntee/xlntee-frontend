import { FC, useState } from "react";

import { Box, Container, Stack, Button, Drawer, Divider } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Navigation, NavigationLinkType } from "src/features";

import { Tools, User } from "./ui";

import "./HeaderProfile.scss";

type HeaderProfileProps = {
  children?: React.ReactNode;
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

const HeaderProfile: FC<HeaderProfileProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const iconSize = "30px";

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  function onClose() {
    setOpen(false);
  }

  function getNavigation() {
    const flag = false;

    if (flag) {
      return <Navigation items={navList} />;
    }
    return <Navigation items={courseNavList} />;
  }

  function getLogo() {
    return (
      <Box className="header-profile__logo">
        <img src="/assets/x-logo-modal-extend.png" />
      </Box>
    );
  }

  return (
    <Box component="header" className="header-profile">
      <Container className="header-profile__container">
        {getLogo()}
        <Box className="header-profile__nav">
          <Box className="header-profile__nav-left">{getNavigation()}</Box>
          <Box className="header-profile__nav-center">{children}</Box>
          <Stack direction="row" alignItems="center" gap="10px" className="header-profile__nav-right">
            <Stack direction="row" alignItems="center" gap="10px">
              <Tools />
              <User />
            </Stack>
            <Button variant="black-text" className="header-profile__toggler" onClick={toggleDrawer}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </Stack>
        </Box>
      </Container>
      <Drawer anchor="left" open={open} onClose={onClose} className="header-drawer">
        <Stack direction="column" gap="20px" width="320px">
          <Box className="header-drawer__header">
            {getLogo()}
            <Button variant="black-text" onClick={onClose}>
              <CloseIcon sx={{ fontSize: iconSize }} />
            </Button>
          </Box>
          <Box paddingInline="20px">
            {getNavigation()}
            <Box marginBlock="20px">
              <Divider />
            </Box>
            {children}
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default HeaderProfile;
