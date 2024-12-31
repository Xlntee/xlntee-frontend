import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";

const CourseCertificate: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("student");

  return (
    <Box py="40px">
      <Box maxWidth="500px" marginInline="auto">
        <Box marginInline="auto" maxWidth="224px" width="100%" marginBottom="20px">
          <img src="/assets/congratulations.png" alt="congratulations" />
        </Box>
        <Typography variant="body1">{t("course-certificate.title")}</Typography>
        <Typography variant="body1" fontWeight={300}>
          {t("course-certificate.text")}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseCertificate;
