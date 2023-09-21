import React from "react";
import coffeeBox from "../../assets/coffeebox.jpeg"

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Imgbox {
  imgsrc: string
  imgintro: string
  imghref: string
}

const ImgBox: React.FC<Imgbox> = ({imgsrc, imgintro, imghref}) => {
  return (
    <div className="carousel-slide">
      <img src={imgsrc} alt="#" />
      <p>{imgintro}</p>
      <a href={imghref}>보러가기</a>
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
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <ImgBox imghref='/' imgintro='coffee' imgsrc={coffeeBox}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox imghref='/' imgintro='coffee' imgsrc={coffeeBox}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox imghref='/' imgintro='coffee' imgsrc={coffeeBox}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox imghref='/' imgintro='coffee' imgsrc={coffeeBox}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox imghref='/' imgintro='coffee' imgsrc={coffeeBox}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox imghref='/' imgintro='coffee' imgsrc={coffeeBox}/>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox imghref='/' imgintro='coffee' imgsrc={coffeeBox}/>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default HomeThird;
