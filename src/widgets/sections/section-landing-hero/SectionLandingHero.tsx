import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, Button, Grid, Stack, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { AppRoutes } from "src/shared/routes";
import { CheckList } from "./ui";

import "./SectionLandingHero.scss";

type SectionLandingHeroProps = {
  title: string;
  subtitle: string;
  buttonTitle: string;
  features: string[];
  image: {
    src: string;
    alt: string;
  };
};

const SectionLandingHero: FC<SectionLandingHeroProps> = ({ title, subtitle, buttonTitle, features, image }) => {
  const theme = useTheme();

  const isFeaturesArray = Array.isArray(features);

  return (
    <Box component="section" className="section-hero">
      <Container>
        <Grid container rowGap="30px" columnGap={{ md: "40px" }} justifyContent={{ md: "space-between" }}>
          <Grid item xs={12} md={6}>
            <Stack display="flex" alignItems="start" gap="30px">
              <Typography color="primary" variant="h1" mb="-14px" lineHeight={1}>
                {title}
              </Typography>
              <Typography variant="body1" color={theme.palette.primary.contrastText} className="section-hero__subtitle">
                {subtitle}
              </Typography>
              {isFeaturesArray && <CheckList items={features} />}
              <Button
                component={RouterLink}
                to={AppRoutes.auth.base}
                color="secondary"
                variant="contained"
                size="large"
                className="button-rounded-lg"
                sx={{
                  px: "36px"
                }}
              >
                {buttonTitle}
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} mx="auto">
            <img src={image.src} alt={image.alt} width={320} height={320} className="section-hero__image" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionLandingHero;
