import { FC } from "react";
import { Link } from "react-router-dom";

import { Box, Stack, Container, Typography, Button } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";
import { AppRoutes } from "src/app/routing/appRoutes";

const NotFoundPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Stack component="section" py="20px" flex="1" flexDirection="column" justifyContent="center">
      <Container>
        <Typography variant="h1" textAlign="center" mb="20px">
          Page not found
        </Typography>
        <Box textAlign="center">
          <Button to={AppRoutes.home} component={Link} variant="contained">
            Link to home page
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default NotFoundPage;
