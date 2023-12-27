import styled from "styled-components";
import { useApiDataNumber } from "../../../services/api";
import Button from "../../Button";

const RecipeTitle = styled.h1`
  margin-bottom: 50px;
  padding: 50px 0px;
  font-size: 3rem;
  border-bottom: 1px solid #6b3939;
`

const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const RecipeBox = styled.div`
  width: 500px;
  margin: 0px 10px;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    color: #986C4A;
  }
  p {
    margin: 15px;
    font-size: 24px;
    @media (max-width:500px) {
      padding: 40px;
    }
  }
  a {
    display: flex;
    justify-content: center;
  }
`

const RecipeButton = styled.button`
  display: block;
  width: 300px;
  margin: 50px auto;
  padding: 20px 15px;
  font-size: 24px;
  background-color: #A87D65;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  &:active {
    transform: scale(0.9);
  }
`

const RecipeIntro = () => {
  const coffeeDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/coffeeNumber';

  const {data, isLoading, isError, changeNumber } = useApiDataNumber(coffeeDB);

  if(isError) return <div className='mainmenu__error'><p>에러가 발생했습니다..</p></div>
  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="recipehome__recommend">
      <RecipeTitle>레시피</RecipeTitle>
      <RecipeContainer>
        {data?.map(item => (
          <RecipeBox key={item._id}>
            <img src={item.imgurl} alt="#"/>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Button href={`/recipe/${item.name}`}>보러 가기</Button>
          </RecipeBox>
        ))}
      </RecipeContainer>
      <RecipeButton onClick={changeNumber}>더보기</RecipeButton>
  </div>
  );
}

export default RecipeIntro;