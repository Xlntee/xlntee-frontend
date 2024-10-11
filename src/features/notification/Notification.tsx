import { FC } from "react";
import dayjs from "dayjs";

import { Box, Stack, Typography } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";

type NotificationProps = {
  title: string;
  text: string;
  date: string;
};

const Notification: FC<NotificationProps> = ({ title, text, date }) => {
  const dateTime = dayjs(date).format("HH:MM");
  const dateSimple = dayjs(date).format("DD.MM.YYYY");

  return (
    <Stack
      className="notification"
      direction="row"
      alignItems="start"
      justifyContent="space-between"
      bgcolor={XlnteeColors.LightElementColor}
      borderRadius="10px"
      p="10px"
      gap="10px"
    >
      <Box>
        <Typography variant="body2" fontWeight={500}>
          {title}
        </Typography>
        <Typography variant="body2" fontWeight={300}>
          {text}
        </Typography>
      </Box>
      <Stack textAlign="right">
        <Typography variant="caption" color={XlnteeColors.GrayColor600}>
          {dateTime}
        </Typography>
        <Typography variant="caption" color={XlnteeColors.GrayColor600}>
          {dateSimple}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Notification;
