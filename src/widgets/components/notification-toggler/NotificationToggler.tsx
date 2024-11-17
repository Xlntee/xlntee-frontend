import { FC } from "react";

import { Button, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import useDrawer from "src/hooks/useDrawer";

const NotificationToggler: FC = () => {
  const { onOpenDrawer } = useDrawer();

  function openMenu(): void {
    onOpenDrawer("NOTIFICATIONS_DRAWER", {
      direction: "right"
    });
  }

  return (
    <Button variant="black-text" onClick={openMenu}>
      <Badge variant="dot" color="primary">
        <NotificationsNoneIcon />
      </Badge>
    </Button>
  );
};

export default NotificationToggler;
