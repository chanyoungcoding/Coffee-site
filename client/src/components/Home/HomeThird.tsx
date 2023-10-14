
//components, ts
import ImgBox from "./components/ImgBox";

import { useApiData } from "../../services/api";

// swiper 라이브러리
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const navbarLists:string[] = ['COFFEE','COFFEE','COFFEE',"COFFEE"]

const HomeThird: React.FC = () => {
  const coffeeDB = 'http://localhost:4000/api/coffee'
  const {data, error} = useApiData(coffeeDB);

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
              <ImgBox 
                imghref={`/menuDetail/${item.name}`} 
                imgintro={item.name} 
                imgsrc={item.imgurl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeThird;
