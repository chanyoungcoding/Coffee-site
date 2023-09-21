import React from "react";
import coffeeBox from "../../assets/coffeebox.jpeg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImgBox: React.FC = () => {
  return (
    <div className="carousel-slide">
      <img src={coffeeBox} alt="#" />
      <p>Vanilla Latte</p>
      <a href="/">보러가기</a>
    </div>
  );
}

const HomeThird: React.FC = () => {

  return (
    <div className="homethird">
      <h1>MENU</h1>
      <div className="third__navbar">
        <li>COFFEE</li>
        <li>COFFEE</li>
        <li>COFFEE</li>
        <li>COFFEE</li>
      </div>

      <div className='swiper__containers'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
        >
          <SwiperSlide>{ImgBox}</SwiperSlide>
          <SwiperSlide>{ImgBox}</SwiperSlide>
          <SwiperSlide>{ImgBox}</SwiperSlide>
          <SwiperSlide>{ImgBox}</SwiperSlide>
          <SwiperSlide>{ImgBox}</SwiperSlide>
          <SwiperSlide>{ImgBox}</SwiperSlide>
          <SwiperSlide>{ImgBox}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeThird;
