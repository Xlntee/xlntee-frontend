import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, Stack, Container } from "@mui/material";

type CoursePreviewDescriptionBlockProps = {
  courseDescription: string;
};

const CoursePreviewDescriptionBlock: FC<CoursePreviewDescriptionBlockProps> = ({ courseDescription }) => {
  const { t } = useTranslation("teacher-preview");

  return (
    <Box component="section" className="section-course-description">
      <Container>
        <Stack p={{ xs: "20px", md: "26px 32px" }} gap="18px" borderRadius="20px">
          <Typography variant="h2" fontWeight={400}>
            {t("section-course-description.title")}
          </Typography>
          <Box pl={{ xs: "16px", md: "28px" }}>
            <Typography variant="body1">{courseDescription}</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default CoursePreviewDescriptionBlock;
