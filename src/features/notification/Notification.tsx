import { FC } from "react";
import dayjs from "dayjs";

import { Box, Stack, Typography } from "@mui/material";
import { datesFormat } from "src/shared/utils/const";

type NotificationProps = {
  title: string;
  text: string;
  date: string;
};

const Notification: FC<NotificationProps> = ({ title, text, date }) => {
  const dateTime = dayjs(date).format(datesFormat.time);
  const dateSimple = dayjs(date).format(datesFormat.secondary);

  return (
    <Stack className="notification">
      <Box>
        <Typography variant="body2" fontWeight={500}>
          {title}
        </Typography>
        <Typography variant="body2" fontWeight={300}>
          {text}
        </Typography>
      </Box>
      <Stack textAlign="right">
        <Typography variant="caption">{dateTime}</Typography>
        <Typography variant="caption">{dateSimple}</Typography>
      </Stack>
    </Stack>
  );
};

export default Notification;
