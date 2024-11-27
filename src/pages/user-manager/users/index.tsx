import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Grid, TextField } from "@mui/material";

import { UserProps, Users } from "src/features/user-manager";
import { AppUserManagerRoutes } from "src/app/routing/appRoutes";

const UsersPage: FC = () => {
  const { t } = useTranslation("user-manager");

  const students: UserProps[] = [
    {
      id: "1",
      fullname: "Іван Михайлюк",
      email: "test1@test.com",
      dateRegistration: "2024-08-05T18:45:12.728Z",
      latestActivity: "2024-10-05T20:45:12.728Z",
      path: `${AppUserManagerRoutes.userStudents}/1`
    },
    {
      id: "2",
      fullname: "Іван Михайлюк",
      email: "test1@test.com",
      dateRegistration: "2024-08-05T18:45:12.728Z",
      latestActivity: "2024-10-05T20:45:12.728Z",
      path: `${AppUserManagerRoutes.userStudents}/2`
    },
    {
      id: "3",
      fullname: "Іван Михайлюк",
      email: "test1@test.com",
      dateRegistration: "2024-08-05T18:45:12.728Z",
      latestActivity: "2024-10-05T20:45:12.728Z",
      path: `${AppUserManagerRoutes.userStudents}/3`
    }
  ];

  const teachers: UserProps[] = [
    {
      id: "1",
      fullname: "Іван Михайлюк",
      email: "test1@test.com",
      dateRegistration: "2024-08-05T18:45:12.728Z",
      latestActivity: "2024-10-05T20:45:12.728Z",
      path: `${AppUserManagerRoutes.userTeacher}/1`
    },
    {
      id: "2",
      fullname: "Іван Михайлюк",
      email: "test1@test.com",
      dateRegistration: "2024-08-05T18:45:12.728Z",
      latestActivity: "2024-10-05T20:45:12.728Z",
      path: `${AppUserManagerRoutes.userTeacher}/2`
    },
    {
      id: "3",
      fullname: "Іван Михайлюк",
      email: "test1@test.com",
      dateRegistration: "2024-08-05T18:45:12.728Z",
      latestActivity: "2024-10-05T20:45:12.728Z",
      path: `${AppUserManagerRoutes.userTeacher}/3`
    }
  ];

  return (
    <Box component="section" py="40px">
      <Container>
        <Box mb="20px" maxWidth="500px" marginLeft="auto">
          <TextField
            className="search-input"
            variant="outlined"
            placeholder={t("search")}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        <Grid container spacing="20px">
          <Grid item xs={12} lg={6} display="flex">
            <Users title={t("teachers")} users={teachers} />
          </Grid>
          <Grid item xs={12} lg={6} display="flex">
            <Users title={t("students")} users={students} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UsersPage;
