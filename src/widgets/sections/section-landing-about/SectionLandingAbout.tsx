import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Box, Grid, Container, Typography } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";
import { ArrowsWordsList } from "./ui";

import "./SectionLandingAbout.scss";

type SectionLandingAboutProps = {
  title: string;
  wordsList: string[];
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

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
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                width={260}
                height={260}
                className="section-about__image"
              />
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
