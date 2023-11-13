import React from "react";

// swiper 라이브러리
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ImgBox from "./ImgBox";
import { useApiData } from "../../../../services/api";

const MySwiper:React.FC = () => {

  const coffeeDB = 'http://localhost:4000/api/coffee'
  const {data, isLoading, isError} = useApiData(coffeeDB);
  
  if(isError) return 
  <div className='mainmenu__error'>
    <p>무엇인가 에러가 발생했습니다.</p>
  </div>

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <ImgBox 
              imghref={`/menuDetail/${item.name}`} 
              imgintro={item.name} 
              imgsrc={item.imgurl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MySwiper;