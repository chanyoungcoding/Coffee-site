import React, { useEffect } from "react";
import { useApiUser } from "../../services/api";

import Button from "../Button";

import { useRecoilState, useRecoilValue } from "recoil";
import { coffeeGreat, userName } from "../../recoil/shop";


const SaveInner:React.FC = () => {
  const userDB = 'http://localhost:4000/api/user';
  const username = useRecoilValue(userName);

  const { data, isError, isLoading } = useApiUser(userDB, username);
  const [coffee, setCoffee] = useRecoilState(coffeeGreat);
  console.log(coffee)

  useEffect(() => {
    setCoffee(data);
  },[setCoffee, data])

  const DeleteGreat = (username:string | undefined, userId: string | undefined) => {
    console.log(username, userId);
  }

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <>
      {coffee?.map((item,index) => (
        <div key={index} className="inner__box">
          <div className="inner__img">
            <img src={item.coffeeUrl}></img>
          </div>
          <div className="inner__intro">
            <p>{item.coffeeName}</p>
            <Button href={`/menuDetail/${item.coffeeName}`}>자세한 정보</Button>
            <button onClick={() => DeleteGreat(username, item._id)}>삭제하기</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default SaveInner;