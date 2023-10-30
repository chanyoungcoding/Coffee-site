import Main from "./components/Third/Main";
import MySwiper from "./components/Third/MySwiper";

const HomeThird: React.FC = () => {

  return (
    <div className="homethird">
      <Main/>
      <div className='swiper__containers'>
        <MySwiper/>
      </div>
    </div>
  );
}

export default HomeThird;
