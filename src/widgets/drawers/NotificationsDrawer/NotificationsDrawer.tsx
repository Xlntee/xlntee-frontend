import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack, Typography } from "@mui/material";

import { Notification } from "src/features";
import { DrawerHeader } from "../DrawerHeader";
import { DrawerBody } from "../DrawerBody";

const NotificationsDrawer: FC = () => {
  const { t } = useTranslation("common");

  const array = Array.from(Array(0).keys());

  return (
    <>
      <DrawerHeader>
        <Typography variant="body1">{t("notifications")}</Typography>
      </DrawerHeader>
      <DrawerBody>
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
      </DrawerBody>
    </>
  );
};

export default NotificationsDrawer;
