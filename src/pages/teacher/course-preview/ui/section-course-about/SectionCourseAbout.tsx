import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Avatar, Box, Stack, Container, Typography, useTheme } from "@mui/material";
import { Skills } from "./ui";

type SectionCourseAboutProps = {
  name: string;
  description: string;
  skills: string[];
};

const SectionCourseAbout: FC<SectionCourseAboutProps> = ({ name, skills, description }) => {
  const { t } = useTranslation("teacher-preview");
  const theme = useTheme();

  return (
    <Box component="section" className="section-about-teacher">
      <Container>
        <Box
          gap="20px"
          p={{ xs: "20px", md: "26px 32px" }}
          borderRadius="20px"
          border={`1px solid ${theme.palette.grey["300"]}`}
        >
          <Typography variant="h2" fontWeight={400}>
            {t("section-about-teacher.title")}
          </Typography>
          <Box maxWidth="1080px" mx="auto">
            <Stack direction="column" alignItems="center" gap="10px" mb="20px">
              <Avatar sx={{ width: 150, height: 150 }} />
              <Typography variant="body1" textAlign="center">
                {name}
              </Typography>
              <Box maxWidth="600px" mx="auto">
                <Skills items={skills} />
              </Box>
            </Stack>
            <Typography variant="body1">{description}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionCourseAbout;
