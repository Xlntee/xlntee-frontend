import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button, Box, Stack } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

import { UserSingleComment, UserSingleCommentProps } from "../user-single-comment";

export interface UserCommentsProps {
  user: UserSingleCommentProps;
  comments: UserSingleCommentProps[];
}

const UserComment: FC<UserCommentsProps> = ({ comments, user }) => {
  const { t } = useTranslation("common");
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);

  function onToggleVisibilityComments() {
    setIsOpenComments((prev) => !prev);
  }

  return (
    <Box>
      <UserSingleComment {...user} />
      {comments.length ? (
        <Stack direction="column" gap="20px" paddingTop="20px" pl="40px" display={isOpenComments ? "flex" : "none"}>
          {comments.map((comment) => (
            <UserSingleComment key={comment.id} {...comment} />
          ))}
        </Stack>
      ) : null}
      <Box pl="50px">
        <Button
          variant="black-text"
          size="small"
          onClick={onToggleVisibilityComments}
          sx={{
            minWidth: "auto",
            minHeight: "auto !important",
            color: XlnteeColors.GrayColor700,
            fontWeight: 400,
          }}
        >
          {isOpenComments ? (
            t("close-comments")
          ) : (
            <>
              {t("review-answers.review")} {comments.length}{" "}
              {comments.length > 1 ? t("review-answers.answers") : t("review-answers.answer")}
            </>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default UserComment;
