import { FC } from "react";

import { Box, Stack } from "@mui/material";

import { UserComments, UserCommentsProps } from "../user-comments";

interface CommentsProps {
  id: string;
  comments: UserCommentsProps[];
}

const Comments: FC<CommentsProps> = ({ id, comments }) => {
  return (
    <Box className="course-comments">
      {comments.length ? (
        <Stack direction="column" gap="10px">
          {comments.map((comment) => (
            <UserComments user={comment.user} comments={comment.comments} />
          ))}
        </Stack>
      ) : null}
    </Box>
  );
};

export default Comments;
