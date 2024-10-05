import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Paper, TextField } from "@mui/material";
import { TableCourse } from "src/features/user-manager";
import { AppUserManagerRoutes } from "src/app/routing/appRoutes";

const CoursesPage: FC = () => {
  const { t } = useTranslation("user-manager");

  const courses = [
    {
      id: "1",
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, fugiat",
      courseId: "C1203912",
      dateCreation: "2024-08-05T18:45:12.728Z",
      status: "Активний",
      path: `${AppUserManagerRoutes.courses}/1`
    },
    {
      id: "2",
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, fugiat",
      courseId: "C1203912",
      dateCreation: "2024-08-05T18:45:12.728Z",
      status: "Видалений",
      path: `${AppUserManagerRoutes.courses}/2`
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
        <Box maxWidth="950px" marginInline="auto">
          <Paper elevation={12}>
            <TableCourse items={courses} />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default CoursesPage;
