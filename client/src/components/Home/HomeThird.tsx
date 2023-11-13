import styled from "styled-components";
import Main from "./components/Third/Main";
import MySwiper from "./components/Third/MySwiper";

const SwiperContainer = styled.div`
  width: 1200px;
  margin: 50px auto;

  // iPad Pro && iPad Air
  @media (max-width: 1200px) {
    width: 900px;
  }

  // iPad Mini
  @media (max-width: 900px) {
    width: 650px;
  }
`

const HomeThird: React.FC = () => {

  return (
    <div className="homethird">
      <Main/>
      <SwiperContainer>
        <MySwiper/>
      </SwiperContainer>
    </div>
  );
}

export default HomeThird;
