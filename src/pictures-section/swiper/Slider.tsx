import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "./Slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        className="Slider"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="slider-image-box">
            <img src="/assets/slide-design.jpg" alt="slide design"  />
            <div className="slider-image-box__text">Дизайну</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-image-box">
            <img src="/assets/slide-programming.jpg" alt="slide programming" />
            <div className="slider-image-box__text">Програмуванню</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-image-box">
            <img src="/assets/slide-psychology.jpg" alt="slide psychology" />
            <div className="slider-image-box__text">Психології</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-image-box">
            <img src="/assets/slide-music.jpg" alt="slide music"/>
            <div className="slider-image-box__text">Музиці</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-image-box">
            <img src="/assets/slide-business.jpg" alt="slide business" />
            <div className="slider-image-box__text">Бізнесу</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
