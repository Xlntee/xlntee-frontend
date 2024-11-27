import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Paper, Stack, Typography, Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { CourseComplains } from "src/widgets/user-manager";
import { AboutCourse } from "src/widgets/user-manager/about-course";

const CourseSinglePage: FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("user-manager");

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
            <Stack direction="column" gap="20px">
              <Typography variant="h6" fontWeight={400} pl="10px">
                Як щось там навчитися робити {""}
                <Link to="#">student@gmail.com</Link>
              </Typography>
              <AboutCourse />
              <CourseComplains title={t("complain.title")} />
              <CourseComplains title={t("refund.title")} />
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default CourseSinglePage;
