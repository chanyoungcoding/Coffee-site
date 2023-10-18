
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


const HomeThird: React.FC = () => {
  const navbarLists = ['COFFEE','TASTE','COUNTRY',"SMELL"]
  const coffeeDB = 'http://localhost:4000/api/coffee'

  const {data, isLoading, isError} = useApiData(coffeeDB);
  
  if(isError) return 
  <div className='mainmenu__error'>
    <p>무엇인가 에러가 발생했습니다.</p>
  </div>

  if(isLoading) return <p>로딩중입니다..</p>
  
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
      </div>
    </div>
  );
}

export default HomeThird;
