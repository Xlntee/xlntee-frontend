import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button, Badge, Box, Stack, Drawer, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { MenuToggler, Notification } from "src/features";

const Notifications: FC = () => {
  const { t } = useTranslation("common");

  const [visible, setVisible] = useState<boolean>(false);

  function onClose(): void {
    setVisible(false);
  }

  const array = Array.from(Array(0).keys());

  return (
    <>
      <Button variant="black-text" onClick={() => setVisible(true)}>
        <Badge variant="dot" color="primary">
          <NotificationsNoneIcon />
        </Badge>
      </Button>
      <Drawer anchor="right" open={visible} onClose={onClose} className="notifications-drawer drawer drawer--lg">
        <Box className="drawer__inner">
          <Box className="drawer__header">
            <Typography variant="body1">{t("notifications")}</Typography>
            <MenuToggler active={true} onClick={onClose} className="drawer__close" />
          </Box>
          <Box className="drawer__body">
            {array.length ? (
              <Stack gap="20px">
                {array.map((_, index) => (
                  <Notification
                    key={index}
                    title="Notification Title:"
                    text="Notification test Notification test Notification"
                    date={new Date().toLocaleString()}
                  />
                ))}
              </Stack>
            ) : (
              <Box>
                <Typography variant="body1">{t("no-notifications")}</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Notifications;
