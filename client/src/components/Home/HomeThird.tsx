import React, { useEffect, useState } from "react";
import coffeeBox from "../../assets/coffeebox.jpeg"

import { Imgbox } from "../../models/coffee";
import { Data } from '../../models/coffee';

import Button from "../Button";


// swiper 라이브러리
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios, { AxiosError } from "axios";

const ImgBox: React.FC<Imgbox> = ({imgsrc, imgintro, imghref}) => {
  return (
    <div className="carousel-slide">
      <img src={imgsrc} alt="#" />
      <p>{imgintro}</p>
      <Button href={imghref}>보러가기</Button>
    </div>
  );
}

const navbarLists:string[] = ['COFFEE','COFFEE','COFFEE',"COFFEE"]

const HomeThird: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  const coffeeDB = 'http://localhost:4000/api/coffee'

  const fetchData = async () => {
    try {
      const response = await axios.get(coffeeDB);
      setData(response.data);
    } catch(e:unknown) {
      if(e instanceof AxiosError) setError(e);
    }
  }

  useEffect(() => { fetchData()},[]);

  if(error) return <div className='mainmenu__error'>{error ? error.message : null}</div>

  return (
    <div className="homethird">
      <h1>MENU</h1>
      <div className="third__navbar">
        {navbarLists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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
          {data.map((item) => (
            <SwiperSlide key={item._id}>
              <ImgBox imghref={`/menuDetail/${item.name}`} imgintro={item.name} imgsrc={coffeeBox}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeThird;
