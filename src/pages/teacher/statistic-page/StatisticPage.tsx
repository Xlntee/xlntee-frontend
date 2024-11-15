import { FC } from "react";
import { Box, Stack, TextField, Container } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import CourseStatistic from "./ui/course-statistic/CourseStatistic";
import { CourseStatus } from "src/shared/config/CourseStatus";

const StatisticPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Box component="section" py={7}>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="end" gap="10px" mb="20px">
          <TextField
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Box>-</Box>
          <TextField
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Stack>
        <Stack gap={{ xs: "20px", md: "40px" }}>
          <CourseStatistic
            id="1"
            title="Lorem ipsum"
            status={CourseStatus.moderation}
            updateTime="23.11.2022"
            image="/assets/temp-course-image2.png"
          />
          <CourseStatistic
            id="1"
            title="Lorem ipsum"
            status={CourseStatus.moderation}
            updateTime="23.11.2022"
            image="/assets/temp-course-image2.png"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default StatisticPage;
