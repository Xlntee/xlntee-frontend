import { FC } from "react";

import { Box, Stack } from "@mui/material";

import { UserComments, UserCommentsProps } from "../user-comments";

interface CommentsProps {
  id: string;
  comments: UserCommentsProps[];
}

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <Box className="course-comments">
      <Stack direction="column" gap="10px">
        {comments.map((comment) => (
          <UserComments key={comment.user.id} user={comment.user} comments={comment.comments} />
        ))}
      </Stack>
    </Box>
  );
};

export default Comments;
