import { Box, Container } from "@mui/material";
import { YouniColors } from "src/themes/colors";
import "./PicturesSection.scss";
import ImageSlider from "./swiper/Slider";

const PicturesSection = () => {
  return (
    <Box style={{ backgroundColor: YouniColors.DarkGray }} component="section" p={"30px 0"}>
      <Container fixed maxWidth="lg">
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box component="div" className="image-box">
            <img src="/assets/picture-section-main.jpg" alt="picture section main" className="image-box__image" />
            <div className="image-box__text-first">Правильні інструменти - ключ до досягнень</div>
            <div className="image-box__text-second">
              Обирай свій напрямок на <img src="/assets/x-logo-picturesSection.png" /><span>lntee</span> і навчайся
            </div>
          </Box>

          <Box sx={{ width: "480px", borderRadius: "5px", overflow: "hidden" }}>
            <ImageSlider />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PicturesSection;
