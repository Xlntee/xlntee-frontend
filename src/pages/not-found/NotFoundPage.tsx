import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Stack, Container, Typography, Button } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import { AppRoutes } from "src/shared/routes";

const NotFoundPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("not-found");

  return (
    <Stack component="section" py="20px" flex="1" flexDirection="column" justifyContent="center">
      <Container>
        <Typography variant="h1" textAlign="center" mb="20px">
          {t("title")}
        </Typography>
        <Box textAlign="center">
          <Button to={AppRoutes.home} component={Link} variant="contained">
            {t("link-text")}
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default NotFoundPage;
