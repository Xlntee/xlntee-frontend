import { Box, Container, Grid, Typography } from "@mui/material";
import CourseCard from "components/course-card/CourseCard";
import { YouniColors } from "src/themes/colors";

const TopCoursesSection = () => {
  return (
    <Box sx={{ backgroundColor: YouniColors.WheatYellow, py: 6 }} component="section">
      <Container fixed maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 900, color: YouniColors.DeepBlue, mb: 6, fontFamily: "Noto Sans" }}>
          Топ курси
        </Typography>
        <Grid container spacing={2} columnSpacing={3}>
          <Grid item xs={4} className="pictures-section__image-box">
            <CourseCard />
          </Grid>
          <Grid item xs={4} className="pictures-section__image-box">
            <CourseCard />
          </Grid>
          <Grid item xs={4} className="pictures-section__image-box">
            <CourseCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopCoursesSection;
