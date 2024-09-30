import { Button, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Notifications = () => {
  return (
    <Button variant="black-text">
      <Badge variant="dot" color="primary">
        <NotificationsNoneIcon />
      </Badge>
    </Button>
  );
};

export default Notifications;
