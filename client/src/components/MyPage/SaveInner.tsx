import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { useApiUser, useDeleteGreat } from "../../services/api";
import Button from "../Button";
import { coffeeGreat, userName } from "../../recoil/shop";
import Loading from "../Loading/Loading";


const SaveInner:React.FC = () => {

  const userDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/user';

  const username = useRecoilValue(userName);
  const [coffee, setCoffee] = useRecoilState(coffeeGreat);

  const {mutate} = useDeleteGreat();

  const { 
    data, 
    isError, 
    isLoading 
  } = useApiUser(userDB, username);


  useEffect(() => { setCoffee(data) },[ setCoffee, data ])

  const DeleteGreat = (userId: string | undefined) => {
    mutate({username, userId})
  }

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <Loading/>

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
            <button className="intro__delete" onClick={() => DeleteGreat(item._id)}>삭제하기</button>
          </div>
          
        </div>
      ))}
    </>
  );
}

export default SaveInner;