import { FC } from "react";
import dayjs from "dayjs";

import { Box, Stack, Typography, useTheme } from "@mui/material";

import "./Notification.scss";

type NotificationProps = {
  title: string;
  text: string;
  date: string;
};

const Notification: FC<NotificationProps> = ({ title, text, date }) => {
  const theme = useTheme();
  const dateTime = dayjs(date).format("HH:MM");
  const dateSimple = dayjs(date).format("DD.MM.YYYY");

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
        <Typography variant="caption" color={theme.palette.grey["400"]}>
          {dateTime}
        </Typography>
        <Typography variant="caption" color={theme.palette.grey["400"]}>
          {dateSimple}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Notification;
