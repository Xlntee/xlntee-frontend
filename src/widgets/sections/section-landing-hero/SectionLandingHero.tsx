import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { AppRoutes } from "src/app/routing/appRoutes";
import { CheckList } from "./ui";

import "./SectionLandingHero.scss";

interface SectionLandingHeroProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  features: string[];
  children: ReactNode;
}

const SectionLandingHero: React.FC<SectionLandingHeroProps> = ({
  title,
  subtitle,
  buttonTitle,
  features,
  children,
}) => {
  const theme = useTheme();

  const isFeaturesArray = Array.isArray(features);
  SectionLandingHero;

  return (
    <Box component="section" className="section-hero">
      <Container>
        <Grid container rowGap="30px" columnGap={{ md: "40px" }} justifyContent={{ md: "space-between" }}>
          <Grid item xs={12} md={6} direction="column" display="flex" alignItems="start" gap="30px">
            <Typography color="primary" variant="h1" mb="-14px" lineHeight={1}>
              {title}
            </Typography>
            <Typography variant="body1" color={theme.palette.primary.contrastText} className="section-hero__subtitle">
              {subtitle}
            </Typography>
            {isFeaturesArray && <CheckList items={features} />}
            <Button
              component={RouterLink}
              to={AppRoutes.auth}
              color="secondary"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "50px",
                px: "36px",
              }}
            >
              {buttonTitle}
            </Button>
          </Grid>
          <Grid item xs={6} md={5} mx="auto">
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionLandingHero;
