import { FC } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTranslation } from "react-i18next";

import { Stack, Box, Avatar, Typography, Button } from "@mui/material";

export type UserSingleCommentProps = {
  id: string;
  image?: string;
  nickname: string;
  date: string;
  text: string;
  onClickAnswer?: () => void;
};

const UserComment: FC<UserSingleCommentProps> = ({ image, nickname, date, text, onClickAnswer }) => {
  const { t } = useTranslation("common");
  dayjs.extend(relativeTime);
  const howLongAgo = dayjs(date).from(dayjs());

  return (
    <Stack direction="row" gap="10px" flexWrap={{ xs: "wrap", sm: "nowrap" }}>
      <Avatar src={image} />
      <Box>
        <Box mb="10px">
          <Typography variant="caption">{nickname}</Typography>
          <Typography variant="caption">, {howLongAgo}</Typography>
        </Box>
        <Typography variant="body2">{text}</Typography>
        <Button variant="dark-text" size="small" onClick={onClickAnswer} sx={{ minWidth: "auto" }}>
          {t("answer-button")}
        </Button>
      </Box>
    </Stack>
  );
};

export default UserComment;
