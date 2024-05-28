import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "./OnboardingSwiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Typography } from "@mui/material";

interface OnboardingSwiperProps {
  handleSetIsLastSlide: () => void;
}

const OnboardingSwiper: React.FC<OnboardingSwiperProps> = ({ handleSetIsLastSlide }) => {
  return (
    <Swiper
      className="onboardingSwiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onReachEnd={handleSetIsLastSlide}
    >
      <SwiperSlide>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src="/assets/onboarding-slide1.png" alt="slide one" />
          <Typography sx={{ fontFamily: "Inter", fontWeight: 300, fontSize: "20px" }}>
            Зручний пошук курсів, попередній перегляд перед купівлею, газальнодоступні відгуки - ми зробили все, аби ти
            був певен у своєму виборі.
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src="/assets/onboarding-slide2.png" alt="slide two" />
          <Typography sx={{ fontFamily: "Inter", fontWeight: 300, fontSize: "20px" }}>
            Проходь курси та отримуй сертифікати прямо на платформі
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src="/assets/onboarding-slide3.png" alt="slide three" />
          <Typography sx={{ fontFamily: "Inter", fontWeight: 300, fontSize: "20px" }}>
            Добре знаєшся на якійсь темі? тоді худчіш тисни +Навчати, створи свій крутезний курс та публікуй його
            прямісінько на платформі
          </Typography>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default OnboardingSwiper;
