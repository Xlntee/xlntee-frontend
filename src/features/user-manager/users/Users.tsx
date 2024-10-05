import { FC } from "react";

import { Typography, Paper } from "@mui/material";

import { TableUser, UserProps } from "../table-user";

interface UsersProps {
  title: string;
  users: UserProps[];
}

const Users: FC<UsersProps> = ({ title, users }) => {
  return (
    <Paper elevation={12}>
      <Typography variant="body2" fontWeight={300} paddingInline="10px">
        {title} ({users.length})
      </Typography>
      <TableUser items={users} />
    </Paper>
  );
};

export default Users;
