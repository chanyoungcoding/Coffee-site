import Button from "../../Button";
import styled from "styled-components";

const BannerBackground = styled.div`
  border-top: 20px solid #E9E9E9;
  background: linear-gradient(90deg, rgba(76,29,21,1) 0%, rgba(132,77,68,1) 48%, rgba(178,145,143,1) 100%);
`

const Banner = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  // iPhone XR ~ 15
  @media (max-width:500px) {
    padding: 50px;
  }
  p {
    color: #986C4A;
    font-size: 2rem;
  }
  h1 {
    color: white;
    font-size: 3rem;

    // iPhone XR ~ 15
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
  a {
    width: 202px;
    @media (max-width: 500px) {
      width: 125px;
    }
  }
`


const RecipeBanner = () => {
  return ( 
    <BannerBackground>

      <Banner>
        <p>Our Recipe</p>
        <h1>레시피를 보고 따라 만들어 보세요</h1>
        <Button href={`/recipe/아메리카노`}>가장 인기 있는 메뉴</Button>
      </Banner>
      
    </BannerBackground>
  );
}
export default RecipeBanner;