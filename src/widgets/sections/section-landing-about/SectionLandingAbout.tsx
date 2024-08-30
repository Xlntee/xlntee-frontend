import { FC } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";
import { ArrowsWordsList } from "./ui";

import "./SectionLandingAbout.scss";

interface SectionLandingAboutProps {
  title: string;
  wordsList: string[];
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const SectionLandingAbout: FC<SectionLandingAboutProps> = ({ title, wordsList, description, image }) => {
  return (
    <Box component="section" className="section-about">
      <Container>
        <Box className="section-about__panel">
          <Typography variant="h2" color={XlnteeColors.BlackTextColor} className="section-about__title">
            {title}
          </Typography>
          <Grid container direction="row" spacing={{ md: "40px" }} paddingInline={{ md: "30px" }}>
            <Grid item md={4} mx="auto">
              <img src={image.src} alt={image.alt} />
            </Grid>
            <Grid item md={8} display="flex" flexDirection="column" gap="16px">
              <ArrowsWordsList wordsArray={wordsList} />
              <Typography fontWeight={300} fontSize={{ md: "24px" }}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionLandingAbout;
