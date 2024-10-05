import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Paper, Stack, Typography, Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { TableCourse, TableUser } from "src/features/user-manager";
import { TransactionHistory, UserWallet } from "src/widgets/user-manager";
import { AppUserManagerRoutes } from "src/app/routing/appRoutes";

const UserSinglePage: FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("user-manager");

  const user = [
    {
      id: "1",
      fullname: "Іван Михайлюк",
      email: "test@gmail.com",
      dateRegistration: "2024-08-05T18:45:12.728Z",
      latestActivity: "2024-10-05T20:45:12.728Z"
    }
  ];

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
        <Stack direction={{ md: "row" }} gap="20px" alignItems="start">
          <Button
            startIcon={<NavigateBeforeIcon />}
            variant="black-text"
            sx={{ fontWeight: 400 }}
            onClick={() => navigate(-1)}
          >
            Назад
          </Button>
          <Paper elevation={12}>
            <Stack direction="column" gap="20px" p="10px">
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" fontWeight={400}>
                  Іван Михайлюк
                </Typography>
                <Stack direction="row" gap="20px">
                  <Button
                    color="error"
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: "20px", fontSize: "12px", minHeight: "24px !important" }}
                  >
                    {t("users.activated-button")}
                  </Button>
                  <Button
                    color="success"
                    variant="outlined"
                    size="small"
                    disabled
                    sx={{ borderRadius: "20px", fontSize: "12px", minHeight: "24px !important" }}
                  >
                    {t("users.deactivated-button")}
                  </Button>
                </Stack>
              </Stack>
              <Box mb="30px">
                <TableUser items={user} />
              </Box>
              <Box mb="30px">
                <TableCourse title={t("courses.title")} items={courses} />
              </Box>
              <Box mb="30px">
                <UserWallet />
              </Box>
              <TransactionHistory />
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default UserSinglePage;
