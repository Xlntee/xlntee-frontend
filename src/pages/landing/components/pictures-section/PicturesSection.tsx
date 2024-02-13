import { YouniColors } from "src/themes/colors";
import "./PictureSection.scss";
import { Box, Container, Grid } from "@mui/material";

const PicturesSection = () => {
  return (
    <Box style={{ backgroundColor: YouniColors.DarkGray }} component="section">
      <Container fixed maxWidth="lg">
        <Grid container spacing={2} columnSpacing={1} className="pictures-section">
          <Grid item xs={3} className="pictures-section__image-box">
            <img src="/assets/learn-youni.png" alt="Вчись на Youni" className="pictures-section__image" />
            <div className="pictures-section__text">Вчись на Youni</div>
          </Grid>
          <Grid item xs={3} className="pictures-section__image-box">
            <img src="/assets/learn-calculation.png" alt="Вчись вичисляти" className="pictures-section__image" />
            <div className="pictures-section__text">Вичисляти</div>
          </Grid>
          <Grid item xs={3} className="pictures-section__image-box">
            <img src="/assets/learn-design.png" alt="Вчись дизайнити" className="pictures-section__image" />
            <div className="pictures-section__text">Дизайнити</div>
          </Grid>
          <Grid item xs={3} className="pictures-section__image-box">
            <img src="/assets/learn-programming.png" alt="Вчись програмувати" className="pictures-section__image" />
            <div className="pictures-section__text">Програмувати</div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PicturesSection;
